'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export function LiveChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your CredWish assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Close chat if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.chat-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    try {
      // Using Hugging Face's free inference API (you'll need to get a free API key from Hugging Face)
      const response = await fetch('https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer hf_YourFreeHuggingFaceAPIKey', // Replace with your free API key
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: {
            past_user_inputs: updatedMessages
              .filter(m => m.role === 'user')
              .map(m => m.content),
            generated_responses: updatedMessages
              .filter(m => m.role === 'assistant')
              .map(m => m.content),
            text: input,
          },
        }),
      });

      const data = await response.json();
      
      if (data.generated_text) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.generated_text }]);
      } else if (data.error) {
        throw new Error(data.error);
      } else {
        throw new Error('No response from AI');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `I'm a simple AI assistant. Here's what I can help with:\n\n1. Answer questions about CredWish services\n2. Help with account information\n3. Guide you through our loan process\n4. Connect you with a human agent\n\nPlease visit our Contact page for direct support.`
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="chat-container bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl w-80 overflow-hidden border border-white/20 relative">
          {/* Floating elements */}
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/10 rounded-full mix-blend-overlay"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white/10 rounded-full mix-blend-overlay"></div>
          
          <div className="bg-gradient-to-r from-credwish-700 to-credwish-800 p-4 flex justify-between items-center">
            <h3 className="text-white font-semibold text-lg">Live Chat Support</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-br from-gray-50 to-gray-100 h-64 relative">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex mb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`flex items-start max-w-[80%] ${
                    message.role === 'user' 
                      ? 'bg-gradient-to-r from-credwish-600 to-credwish-700 text-white rounded-l-xl rounded-tr-xl p-3 shadow-md' 
                      : 'bg-white/90 backdrop-blur-sm border border-white/30 shadow-sm rounded-r-xl rounded-bl-xl p-3'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="bg-credwish-100 p-1 rounded-full mr-2">
                      <Bot className="h-4 w-4 text-credwish-600" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm">{message.content}</p>
                  </div>
                  {message.role === 'user' && (
                    <div className="bg-credwish-700 p-1 rounded-full ml-2">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center space-x-2 p-2">
                <div className="w-2 h-2 rounded-full bg-credwish-400 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-credwish-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 rounded-full bg-credwish-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSendMessage} className="p-4 border-t border-white/20 bg-white/80">
            <div className="relative">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="w-full pr-10"
                disabled={isTyping}
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isTyping}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-credwish-600 hover:text-credwish-700 disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute -top-2 -right-2 w-16 h-16 bg-credwish-400/30 rounded-full mix-blend-overlay animate-pulse"></div>
          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-gradient-to-br from-credwish-600 to-credwish-700 hover:from-credwish-700 hover:to-credwish-800 text-white rounded-full p-4 shadow-xl flex items-center justify-center transition-all hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-credwish-500 focus:ring-offset-2 hover:scale-105"
            aria-label="Open live chat"
          >
            <MessageCircle className="h-7 w-7" />
          </button>
        </div>
      )}
    </div>
  );
}
