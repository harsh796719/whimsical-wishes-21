
import { useState, useEffect } from 'react';

export const BirthdayMessage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`max-w-2xl mx-auto text-center transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <p className="typing-text text-lg md:text-xl text-white/90 mb-6">
        To my amazing best friend, who lights up every room she enters...
      </p>
      <p className="text-base md:text-lg text-white/80 leading-relaxed">
        Twenty-one years of bringing joy, laughter, and endless adventures to everyone around you. 
        Here's to celebrating you and all the wonderful moments we've shared together.
      </p>
    </div>
  );
};
