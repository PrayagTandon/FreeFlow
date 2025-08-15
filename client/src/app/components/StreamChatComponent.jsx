"use client";
import { useState, useEffect } from 'react';
import {
    Chat,
    Channel,
    ChannelHeader,
    MessageInput,
    MessageList,
    Thread,
    Window,
} from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/v2/index.css';

export default function StreamChatComponent({
    currentUser,
    channelId,
    onClose
}) {
    const [client, setClient] = useState(null);
    const [channel, setChannel] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const initChat = async () => {
            try {
                // Get Stream token from backend
                const tokenResponse = await fetch('/api/chat/token', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userId: currentUser.id,
                        userRole: currentUser.role,
                        userName: currentUser.name
                    })
                });

                if (!tokenResponse.ok) {
                    throw new Error('Failed to get chat token');
                }

                const { token, userId } = await tokenResponse.json();

                // Initialize Stream Chat client
                const chatClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_API_KEY);

                await chatClient.connectUser(
                    {
                        id: userId,
                        name: currentUser.name,
                        image: `https://getstream.io/random_svg/?id=${userId}`,
                    },
                    token
                );

                // Get the channel
                const channel = chatClient.channel('messaging', channelId);
                await channel.watch();

                setClient(chatClient);
                setChannel(channel);
                setIsLoading(false);

            } catch (error) {
                console.error('Error initializing chat:', error);
                setIsLoading(false);
            }
        };

        if (currentUser && channelId) {
            initChat();
        }

        return () => {
            if (client) {
                client.disconnectUser();
            }
        };
    }, [currentUser, channelId]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!client || !channel) {
        return (
            <div className="flex items-center justify-center h-64 text-gray-500">
                Failed to load chat
            </div>
        );
    }

    return (
        <div className="h-full">
            <Chat client={client} theme="str-chat__theme-light">
                <Channel channel={channel}>
                    <Window>
                        <ChannelHeader />
                        <MessageList />
                        <MessageInput />
                    </Window>
                    <Thread />
                </Channel>
            </Chat>
        </div>
    );
} 