
import { useState } from 'react';

export const VirtualCake = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleCakeClick = () => {
    if (!candlesBlown) {
      setCandlesBlown(true);
      setTimeout(() => setShowMessage(true), 1000);
    }
  };

  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl md:text-3xl text-primary playfair mb-4">
        Make a Wish!
      </h2>
      <div
        className="w-64 h-64 mx-auto cursor-pointer relative"
        onClick={handleCakeClick}
      >
        <div className="absolute inset-0 flex items-center justify-center text-8xl">
          {candlesBlown ? "🎂" : "🎂"}
        </div>
        {!candlesBlown && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <span className="text-2xl animate-float">🕯️</span>
          </div>
        )}
      </div>
      {showMessage && (
        <p className="text-lg text-primary animate-fade-in">
          May all your wishes come true! 
        </p>
      )}
    </div>
  );
};
