"use client";
import { useState, useEffect, useRef } from 'react';

const ChatSystem = ({ 
  userEmail, 
  userRole, 
  proposalId, 
  otherPartyEmail, 
  jobTitle, 
  onClose 
}) => {
  console.log('🔍 ChatSystem: Component mounted with props:', { userEmail, userRole, proposalId, otherPartyEmail, jobTitle });
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [chatRoom, setChatRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (proposalId && userEmail && otherPartyEmail) {
      initializeChatRoom();
    }
  }, [proposalId, userEmail, otherPartyEmail]);

  // Auto-refresh messages every 10 seconds
  useEffect(() => {
    if (!chatRoom) return;

    const intervalId = setInterval(() => {
      console.log('🔄 Auto-refreshing messages...');
      fetchMessages(chatRoom.id, true);
    }, 10000); // 10 seconds

    // Cleanup interval on unmount or when chatRoom changes
    return () => clearInterval(intervalId);
  }, [chatRoom]);

  const initializeChatRoom = async () => {
    try {
      console.log('🔍 ChatSystem: Starting initialization...');
      console.log('Props received:', { proposalId, userEmail, otherPartyEmail, userRole, jobTitle });
      
      setLoading(true);
      
      const requestBody = {
        proposalId,
        clientMetamaskId: userRole === 'client' ? userEmail : otherPartyEmail,
        freelancerMetamaskId: userRole === 'freelancer' ? userEmail : otherPartyEmail
      };
      
      console.log('🔍 ChatSystem: Request body:', requestBody);
      console.log('🔍 ChatSystem: Making API call to /api/chat/get-or-create-room...');
      
      // Get or create chat room
      const roomResponse = await fetch('/api/chat/get-or-create-room', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('🔍 ChatSystem: API response status:', roomResponse.status);
      console.log('🔍 ChatSystem: API response ok:', roomResponse.ok);

      if (roomResponse.ok) {
        const roomData = await roomResponse.json();
        console.log('🔍 ChatSystem: Room data received:', roomData);
        
        setChatRoom(roomData.room);
        
        // Fetch existing messages for this chat room
        await fetchMessages(roomData.room.id);
        
        console.log('🔍 ChatSystem: Chat room initialized successfully');
      } else {
        const errorData = await roomResponse.json();
        console.error('❌ ChatSystem: Failed to create chat room');
        console.error('❌ ChatSystem: Error details:', errorData);
      }
    } catch (error) {
      console.error('❌ ChatSystem: Error initializing chat room:', error);
      console.error('❌ ChatSystem: Error stack:', error.stack);
    } finally {
      console.log('🔍 ChatSystem: Setting loading to false');
      setLoading(false);
    }
  };

  const fetchMessages = async (chatRoomId, isAutoRefresh = false) => {
    try {
      if (isAutoRefresh) {
        setRefreshing(true);
      }
      
      console.log('🔍 ChatSystem: Fetching messages for chat room:', chatRoomId);
      
      const response = await fetch(`/api/chat/get-messages?chatRoomId=${chatRoomId}`);
      
      if (response.ok) {
        const data = await response.json();
        console.log('🔍 ChatSystem: Messages fetched:', data.messages.length);
        
        if (data.messages.length === 0) {
          // No messages yet, add welcome message
          const welcomeMessage = [
            {
              id: 1,
              text: `Chat started for job: "${jobTitle}"`,
              sender: 'system',
              timestamp: new Date().toISOString(),
              isSystem: true
            }
          ];
          setMessages(welcomeMessage);
        } else {
          // Convert database messages to component format
          const formattedMessages = data.messages.map(msg => ({
            id: msg.id,
            text: msg.messageText,
            sender: msg.senderId,
            timestamp: msg.createdAt,
            isSystem: false
          }));
          
          // Add welcome message at the beginning
          const newMessages = [
            {
              id: 0,
              text: `Chat started for job: "${jobTitle}"`,
              sender: 'system',
              timestamp: new Date().toISOString(),
              isSystem: true
            },
            ...formattedMessages
          ];
          
          // Only update if messages actually changed (for auto-refresh)
          if (isAutoRefresh) {
            setMessages(prev => {
              // Check if messages are different
              if (prev.length !== newMessages.length) return newMessages;
              
              // Check if any message content changed
              for (let i = 0; i < prev.length; i++) {
                if (prev[i].id !== newMessages[i].id || 
                    prev[i].text !== newMessages[i].text ||
                    prev[i].sender !== newMessages[i].sender) {
                  return newMessages;
                }
              }
              return prev; // No changes, keep existing messages
            });
          } else {
            setMessages(newMessages);
          }
        }
      } else {
        console.error('❌ ChatSystem: Failed to fetch messages');
        // Fallback to welcome message only
        setMessages([
          {
            id: 1,
            text: `Chat started for job: "${jobTitle}"`,
            sender: 'system',
            timestamp: new Date().toISOString(),
            isSystem: true
          }
        ]);
      }
    } catch (error) {
      console.error('❌ ChatSystem: Error fetching messages:', error);
      // Fallback to welcome message only
      setMessages([
        {
          id: 1,
          text: `Chat started for job: "${jobTitle}"`,
          sender: 'system',
          timestamp: new Date().toISOString(),
          isSystem: true
        }
      ]);
    } finally {
      if (isAutoRefresh) {
        setRefreshing(false);
      }
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim() || !chatRoom) return;

    try {
      setSending(true);
      
      // Create new message object
      const message = {
        id: Date.now(),
        text: newMessage.trim(),
        sender: userEmail,
        timestamp: new Date().toISOString(),
        isSystem: false
      };

      // Add message to local state immediately for better UX
      setMessages(prev => [...prev, message]);
      
      // Clear input
      setNewMessage('');
      
      // Save message to database
      const saveResponse = await fetch('/api/chat/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatRoomId: chatRoom.id,
          senderId: userEmail,
          messageText: message.text
        }),
      });

      if (saveResponse.ok) {
        const savedMessage = await saveResponse.json();
        console.log('✅ Message saved to database:', savedMessage);
        
        // Update the message with the real database ID
        setMessages(prev => prev.map(msg => 
          msg.id === message.id 
            ? { ...msg, id: savedMessage.data.id }
            : msg
        ));
      } else {
        console.error('❌ Failed to save message to database');
        // Remove the message from local state if save failed
        setMessages(prev => prev.filter(msg => msg.id !== message.id));
        // Show error to user (you could add a toast notification here)
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      // Remove the message from local state if there was an error
      setMessages(prev => prev.filter(msg => msg.id !== message.id));
    } finally {
      setSending(false);
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}>
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div>Initializing chat...</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '600px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
                 {/* Chat Header */}
         <div style={{
           padding: '1rem 1.5rem',
           borderBottom: '1px solid #e0e0e0',
           display: 'flex',
           justifyContent: 'space-between',
           alignItems: 'center',
           background: '#f8f9fa'
         }}>
           <div>
             <h3 style={{ margin: 0, color: '#333' }}>💬 Chat</h3>
             <div style={{ fontSize: '0.875rem', color: '#666' }}>
               {jobTitle}
             </div>
             <div style={{ fontSize: '0.75rem', color: '#888' }}>
               {userRole === 'client' ? 'Chatting with freelancer' : 'Chatting with client'}
               {refreshing && (
                 <span style={{ marginLeft: '0.5rem', color: '#007bff' }}>
                   🔄 Updating...
                 </span>
               )}
               <button
                 onClick={() => fetchMessages(chatRoom.id, true)}
                 disabled={refreshing}
                 style={{
                   marginLeft: '0.5rem',
                   background: 'none',
                   border: '1px solid #ddd',
                   borderRadius: '4px',
                   padding: '0.25rem 0.5rem',
                   fontSize: '0.75rem',
                   cursor: refreshing ? 'not-allowed' : 'pointer',
                   color: refreshing ? '#999' : '#666'
                 }}
                 title="Refresh messages"
               >
                 🔄 Refresh
               </button>
             </div>
           </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#666',
              padding: '0.5rem'
            }}
          >
            ×
          </button>
        </div>

        {/* Messages Area */}
        <div style={{
          flex: 1,
          padding: '1rem',
          overflowY: 'auto',
          maxHeight: '400px',
          background: '#fafafa'
        }}>
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                marginBottom: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: message.sender === userEmail ? 'flex-end' : 'flex-start'
              }}
            >
              <div style={{
                maxWidth: '70%',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                background: message.isSystem 
                  ? '#e3f2fd' 
                  : message.sender === userEmail 
                    ? '#007bff' 
                    : '#e9ecef',
                color: message.isSystem 
                  ? '#1976d2' 
                  : message.sender === userEmail 
                    ? 'white' 
                    : '#333',
                fontSize: '0.875rem',
                wordWrap: 'break-word'
              }}>
                {message.text}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: '#888',
                marginTop: '0.25rem',
                marginLeft: message.sender === userEmail ? '0' : '0.5rem',
                marginRight: message.sender === userEmail ? '0.5rem' : '0'
              }}>
                {message.sender === userEmail ? 'You' : message.sender === 'system' ? 'System' : 'Other'} • {formatTime(message.timestamp)}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid #e0e0e0',
          background: 'white'
        }}>
          <form onSubmit={sendMessage} style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              disabled={sending}
              style={{
                flex: 1,
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              disabled={!newMessage.trim() || sending}
              style={{
                background: sending || !newMessage.trim() ? '#6c757d' : '#007bff',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: sending || !newMessage.trim() ? 'not-allowed' : 'pointer'
              }}
            >
              {sending ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatSystem; 