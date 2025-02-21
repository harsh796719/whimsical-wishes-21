
import { useState, useEffect } from 'react';

export const BirthdayMessage = () => {
  const [visible, setVisible] = useState(false);
  const [letterClass, setLetterClass] = useState('opacity-0');

  useEffect(() => {
    setVisible(true);
    const letters = "HAPPY BIRTHDAY!".split('');
    letters.forEach((_, index) => {
      setTimeout(() => {
        setLetterClass(prev => prev + ' animate-bounce');
      }, index * 200);
    });
  }, []);

  return (
    <div className={`w-full max-w-2xl mx-auto text-center px-4 sm:px-6 transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="mb-6 sm:mb-8">
        {Array.from("HAPPY BIRTHDAY!").map((letter, index) => (
          <span
            key={index}
            className={`inline-block text-2xl sm:text-3xl md:text-4xl font-bold animate-color-change`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
      <div className="relative overflow-hidden w-full mb-4 sm:mb-6">
        <p className="typing-text text-base sm:text-lg md:text-xl text-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg min-h-[60px] sm:min-h-[70px]">
          To my amazing pookie, who lights up every room she enters...
        </p>
      </div>
      <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-lg mx-4 sm:mx-0">
        Twenty-one years of bringing joy, laughter, and endless adventures to everyone around you. 
        Here's to celebrating you and all the wonderful moments we've shared together.
      </p>
      <div className="mt-6 sm:mt-8 flex justify-center space-x-2">
        {Array.from("✨").map((star, index) => (
          <span
            key={index}
            className="inline-block animate-sparkle text-xl sm:text-2xl"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {star}
          </span>
        ))}
      </div>
    </div>
  );
};
