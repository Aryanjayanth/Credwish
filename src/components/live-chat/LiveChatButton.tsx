'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

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
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Load chat history from localStorage on component mount
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem('chatMessages');
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      } else {
        // Only show welcome message if no history exists
        setMessages([{
          role: 'assistant',
          content: 'Hello! I\'m your CredWish assistant. How can I help you today?'
        }]);
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
    }
  }, []);

  // Save messages to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving chat history:', error);
    }
  }, [messages]);

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
    if (!input.trim() || isSending) return;

    const userMessage: Message = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);
    setIsSending(true);

    try {
      console.log('Sending request to OpenRouter API...');
      const apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
      const requestBody = {
        model: 'google/gemma-7b-it:free', // Free model
        messages: [
          {
            role: 'system',
            content: 'You are CredWish AI assistant, helping users with their financial needs. Be friendly, professional, and concise. Keep responses under 100 words.'
          },
          ...updatedMessages.map(msg => ({
            role: msg.role === 'assistant' ? 'assistant' : 'user',
            content: msg.content
          }))
        ],
        temperature: 0.7,
        max_tokens: 150, // Lower token limit for free tier
        stream: false
      };

      console.log('Request body:', JSON.stringify(requestBody, null, 2));

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.href,
          'X-Title': 'CredWish Chat'
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();
      console.log('API Response:', JSON.stringify(responseData, null, 2));

      if (!response.ok) {
        throw new Error(
          `API Error: ${response.status} - ${response.statusText}\n` +
          `Details: ${JSON.stringify(responseData, null, 2)}`
        );
      }

      const assistantMessage = responseData.choices?.[0]?.message?.content || 
        "I'm sorry, I couldn't process that request. Please try again later.";
      
      if (assistantMessage) {
        setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
      } else {
        throw new Error('No valid response from AI');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      
      toast({
        variant: 'destructive',
        title: 'Connection Error',
        description: `Unable to connect to the chat service. ${error.message}`,
      });
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `I'm having trouble connecting to the AI service right now. Here's what I can help with when I'm back online:\n\n• Answer questions about CredWish services\n• Help with account information\n• Guide you through our loan process\n• Connect you with a human agent\n\nPlease try again in a few moments or visit our Contact page for direct support.`
      }]);
    } finally {
      setIsTyping(false);
      setIsSending(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isVisible) return null;

  // Get the last 4 messages for the window title (for OpenRouter context)
  const recentMessages = messages.slice(-4).map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n');

  return (
    <div className="fixed bottom-6 right-6 z-50" data-last-messages={recentMessages}>
      {isOpen ? (
        <div className="chat-container bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl w-80 h-[500px] flex flex-col overflow-hidden border border-white/20 relative">
          {/* Floating elements */}
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/10 rounded-full mix-blend-overlay"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white/10 rounded-full mix-blend-overlay"></div>
          {/* Chat header */}
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <div>
                <div className="font-semibold">CredWish Assistant</div>
                <div className="text-xs opacity-80">
                  {isTyping ? 'Typing...' : 'Online'}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white/80 hover:bg-white/20 hover:text-white"
                onClick={() => setMessages([{
                  role: 'assistant',
                  content: 'Hello! I\'m your CredWish assistant. How can I help you today?'
                }])}
                title="Clear chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white/80 hover:bg-white/20 hover:text-white"
                onClick={() => setIsOpen(false)}
                title="Minimize chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                <div
                  className={cn(
                    'max-w-[85%] rounded-xl p-3 relative',
                    message.role === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none border border-gray-200',
                    'shadow-sm hover:shadow transition-shadow duration-200'
                  )}
                >
                  <div className="flex items-start space-x-2">
                    {message.role === 'assistant' && (
                      <Bot className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
                    )}
                    <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                    {message.role === 'user' && (
                      <User className="h-4 w-4 mt-0.5 flex-shrink-0 text-white/80" />
                    )}
                  </div>
                  <div className={cn(
                    'text-xs mt-1 text-right',
                    message.role === 'user' ? 'text-white/70' : 'text-gray-500'
                  )}>
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center space-x-2 p-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                <span className="text-xs text-gray-500 ml-2">Assistant is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {/* Input area */}
          <div className="border-t p-3 bg-gray-50">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-full bg-white border-gray-300 focus-visible:ring-primary text-sm py-5"
                disabled={isSending}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
              />
              <Button
                type="submit"
                size="icon"
                className={cn(
                  'rounded-full h-10 w-10 transition-all',
                  isSending 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-primary hover:bg-primary/90'
                )}
                disabled={!input.trim() || isSending}
              >
                {isSending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </form>
            <div className="text-xs text-center text-gray-500 mt-2">
              {isSending ? 'Sending...' : 'Press Enter to send'}
            </div>
          </div>
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
