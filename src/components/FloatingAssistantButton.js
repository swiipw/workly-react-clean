import React from 'react';
import { Bot } from 'lucide-react';

const FloatingAssistantButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-4 md:right-10 w-14 h-14 bg-[#1ABC9C] text-white rounded-full shadow-lg flex items-center justify-center 
                 hover:bg-[#17202A] transition-all duration-300 transform hover:scale-110 z-20"
      aria-label="Asistente Virtual"
    >
      <Bot className="w-8 h-8" />
    </button>
  );
};

export default FloatingAssistantButton;
