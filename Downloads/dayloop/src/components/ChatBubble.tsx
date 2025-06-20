import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 mb-4 bg-white rounded-xl shadow-lg w-72 overflow-hidden"
          >
            <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">Chat with Salma</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4 bg-gray-50">
              <p className="text-gray-600 text-sm mb-4">
                Hi! I'm Salma, your AI project consultant. I'd love to hear about your project ideas!
              </p>
              <Link
                to="/chat"
                className="block w-full py-2 px-4 bg-purple-600 text-white rounded-lg text-center hover:bg-purple-700 transition-colors"
              >
                Start Chat
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatBubble;