import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, Sparkles, Trash2, ArrowDownCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const SUGGESTED_QUESTIONS = [
  "What is your design process?",
  "Tell me about the Military Robot project.",
  "What services do you offer?",
  "How can I contact you?",
  "Are you available for freelance?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Aadesh's AI assistant. I can tell you about his design work, technical projects, or how to collaborate. What's on your mind?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const isNearBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 100;
    setShowScrollButton(!isNearBottom);
  };

  const getChat = () => {
    if (!chatRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      chatRef.current = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: "You are the AI Assistant for Aadesh PS, a Graphics Designer, Vector Artist, and Web Developer based in Kerala, India. Your goal is to represent him professionally, creatively, and enthusiastically. Use his background (Master in Applied Electronics, experience at Peoples Urban Development Group & Dashami Finance and Luminar Technolab) to answer questions. Mention his projects like the Military Spying Robot if relevant. Keep responses structured (use bullet points or bold text), concise, and helpful. If asked about contact, give his email: aadeshps2015@gmail.com and WhatsApp: +91 88938 09997.",
        }
      });
    }
    return chatRef.current;
  };

  const handleSend = async (textOverride?: string) => {
    const userMessage = textOverride || input.trim();
    if (!userMessage || isLoading) return;

    if (!textOverride) setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = getChat();
      const response = await chat.sendMessage({ message: userMessage });
      const aiText = response.text || "I'm sorry, I couldn't process that. Feel free to contact Aadesh directly!";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Oops, I hit a snag. Please check your connection or try again later!" }]);
      chatRef.current = null;
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: 'model', text: "Chat history cleared. How else can I help you?" }]);
    chatRef.current = null;
  };

  return (
    <>
      <motion.button
        id="chatbot-trigger"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-brand text-white shadow-2xl flex items-center justify-center ring-4 ring-white dark:ring-zinc-950"
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-24 right-6 z-[60] w-[90vw] md:w-[420px] h-[600px] max-h-[80vh] bg-white dark:bg-zinc-900 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-white dark:bg-zinc-900">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
                    <Sparkles size={20} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white dark:border-zinc-900" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight">Support Assistant</h4>
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest leading-none mt-1">Aadesh PS AI</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={clearChat}
                  className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors text-zinc-400 hover:text-red-500"
                  title="Clear Chat"
                >
                  <Trash2 size={16} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors text-zinc-400"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="relative flex-1 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] overflow-hidden">
              <div 
                ref={scrollRef} 
                onScroll={handleScroll}
                className="h-full overflow-y-auto p-6 space-y-6 scrollbar-hide"
              >
                {messages.map((m, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={i} 
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`group relative max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                      m.role === 'user' 
                        ? 'bg-brand text-white rounded-br-sm shadow-lg' 
                        : 'bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-bl-sm border border-zinc-100 dark:border-zinc-700 shadow-sm'
                    }`}>
                      <div className="markdown-body">
                        <Markdown>{m.text}</Markdown>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isLoading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-3xl rounded-bl-sm border border-zinc-100 dark:border-zinc-700 shadow-sm flex items-center gap-2">
                      <div className="flex gap-1">
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 rounded-full bg-brand" />
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-brand" />
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-brand" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Suggested Questions Section */}
                {!isLoading && messages.length < 3 && (
                  <div className="pt-4 grid grid-cols-1 gap-2">
                    <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1">Common Queries</p>
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(q)}
                        className="text-left p-3 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-xs text-zinc-600 dark:text-zinc-400 hover:border-brand hover:text-brand transition-all duration-300 shadow-sm"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {showScrollButton && (
                <button 
                  onClick={scrollToBottom}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full bg-white dark:bg-zinc-800 shadow-lg border border-zinc-200 dark:border-zinc-700 text-brand"
                >
                  <ArrowDownCircle size={20} />
                </button>
              )}
            </div>

            {/* Input Bar */}
            <div className="p-4 md:p-6 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="w-full pl-6 pr-14 py-4 rounded-[24px] bg-zinc-50 dark:bg-zinc-950 border-2 border-transparent focus:border-brand/30 focus:bg-white dark:focus:bg-zinc-900 focus:outline-none transition-all duration-300 text-sm placeholder:text-zinc-400 shadow-inner"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center disabled:opacity-30 disabled:grayscale transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-center text-zinc-400 mt-4 font-medium italic">
                Aadesh's AI may share creative insights.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
