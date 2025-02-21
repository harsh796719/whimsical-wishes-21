
import { useState } from 'react';

export const VirtualCake = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCakeClick = () => {
    if (!candlesBlown) {
      setCandlesBlown(true);
      setTimeout(() => setShowMessage(true), 1000);
    }
  };

  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl md:text-3xl text-primary playfair mb-4 animate-color-change">
        Make a Wish!
        <span className="inline-block ml-2 animate-sparkle">✨</span>
      </h2>
      <div
        className={`w-64 h-64 mx-auto cursor-pointer relative transform transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
        onClick={handleCakeClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center text-8xl animate-float">
          {candlesBlown ? "🎂" : "🎂"}
        </div>
        {!candlesBlown && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <span className="text-2xl animate-bounce">🕯️</span>
          </div>
        )}
        {isHovered && !candlesBlown && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-sm text-primary animate-fade-in">
            Click to blow the candle!
          </div>
        )}
      </div>
      {showMessage && (
        <div className="space-y-4 animate-slide-up">
          <p className="text-lg text-primary animate-color-change">
            May all your wishes come true! 
          </p>
          <div className="flex justify-center space-x-2">
            {Array.from("✨🎉🎈").map((emoji, index) => (
              <span
                key={index}
                className="inline-block animate-bounce"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
