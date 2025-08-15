"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ChatRoomsList from '../components/ChatRoomsList';
import StreamChatComponent from '../components/StreamChatComponent';

export default function ChatPage() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Get user data from localStorage
        const userData = localStorage.getItem('user');
        if (userData) {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
        } else {
            // No user data, redirect to login
            router.push('/login');
            return;
        }
        setLoading(false);
    }, [router]);

    const handleRoomSelect = (room) => {
        setSelectedRoom(room);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600">
                                Welcome, {user.name}
                            </span>
                            <button
                                onClick={() => router.push('/dashboard')}
                                className="text-sm text-blue-600 hover:text-blue-800"
                            >
                                Back to Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
                    {/* Chat Rooms List */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm border p-4 h-full">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Conversations</h2>
                            <ChatRoomsList
                                currentUser={user}
                                onSelectRoom={handleRoomSelect}
                            />
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm border h-full">
                            {selectedRoom ? (
                                <StreamChatComponent
                                    currentUser={user}
                                    channelId={selectedRoom.stream_channel_id}
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-500">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">💬</div>
                                        <h3 className="text-lg font-medium mb-2">Select a conversation</h3>
                                        <p className="text-sm">Choose a conversation from the list to start chatting</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 