
import { useState } from 'react';

const reasons = [
  "Your contagious laughter that brightens everyone's day",
  "Your incredible strength and resilience in facing challenges",
  "The way you always know how to make me smile",
  "Your creativity and unique perspective on life",
  "Your unwavering loyalty as a friend",
  "The passion you bring to everything you do",
  "Your amazing taste in music (even the questionable ones)",
  "Your ability to find humor in any situation",
  "The way you dance like nobody's watching",
  "Your kind and generous heart",
  "Your determination to chase your dreams",
  "The silly faces you make in our photos",
  "Your incredible cooking skills (especially those cookies)",
  "The way you remember little details about everyone",
  "Your spontaneous adventure ideas",
  "The honest advice you always give",
  "Your terrible puns that somehow make everyone laugh",
  "The way you stand up for what you believe in",
  "Your ability to make everyone feel special",
  "The countless memories we've created together",
  "Simply being you - the most amazing friend anyone could ask for"
];

export const ReasonsGrid = () => {
  const [visibleReasons, setVisibleReasons] = useState<number[]>([]);

  const handleReasonClick = (index: number) => {
    if (!visibleReasons.includes(index)) {
      setVisibleReasons(prev => [...prev, index]);
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary playfair mb-8 animate-fade-in">
        21 Reasons Why You're Amazing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`reason-card cursor-pointer ${
              visibleReasons.includes(index) ? 'opacity-100' : 'opacity-40'
            }`}
            onClick={() => handleReasonClick(index)}
          >
            <p className="text-lg font-medium text-secondary">
              {visibleReasons.includes(index) ? reason : "Click to reveal..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
