"use client";
import { useState, useEffect } from 'react';

export default function ChatRoomsList({ 
  currentUser, 
  onSelectRoom 
}) {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState(null);

  useEffect(() => {
    if (currentUser) {
      fetchRooms();
    }
  }, [currentUser]);

  const fetchRooms = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/chat/rooms/${currentUser.id}/${currentUser.role}`
      );
      if (response.ok) {
        const data = await response.json();
        setRooms(data.rooms || []);
      }
    } catch (error) {
      console.error('Error fetching rooms:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoomSelect = (room) => {
    setSelectedRoomId(room.id);
    onSelectRoom(room);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      return 'Today';
    } else if (diffDays === 2) {
      return 'Yesterday';
    } else if (diffDays <= 7) {
      return date.toLocaleDateString('en-US', { weekday: 'short' });
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (rooms.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500">
        <div className="text-4xl mb-4">💬</div>
        <p className="text-lg font-medium">No conversations yet</p>
        <p className="text-sm">Start a conversation when you send or receive a proposal</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {rooms.map((room) => (
        <div
          key={room.id}
          onClick={() => handleRoomSelect(room)}
          className={`p-4 rounded-lg cursor-pointer transition-colors ${
            selectedRoomId === room.id
              ? 'bg-blue-50 border-blue-200 border'
              : 'bg-white hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-gray-900 truncate">
                  Proposal #{room.proposal_id}
                </h3>
                <span className="text-xs text-gray-500">
                  {formatDate(room.created_at)}
                </span>
              </div>
              <p className="text-sm text-gray-600 truncate">
                {room.status === 'active' ? 'Active' : room.status}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 