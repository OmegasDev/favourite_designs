import React, { useState } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChatWithSalma: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm Salma, your AI project consultant. I'd love to hear about your project ideas! What kind of project are you looking to build?"
    }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { type: 'user', content: input }]);
    setInput('');

    // Placeholder for future AI integration
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "Thanks for sharing! I've noted down your requirements. While I'm being developed to provide more specific responses, our team would love to discuss your project in detail. Would you like to schedule a call with our experts?"
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="py-4 border-b border-gray-800">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="h-[calc(100vh-200px)] flex flex-col">
          <div className="flex-1 overflow-y-auto py-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-100'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="py-4">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 rounded-xl hover:bg-purple-700 transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatWithSalma;