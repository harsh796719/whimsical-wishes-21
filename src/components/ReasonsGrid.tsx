
import { useState } from 'react';

const reasons = [
  {
    text: "Your contagious laughter that brightens everyone's day",
    emoji: "😊",
    color: "from-pink-200 to-purple-200"
  },
  {
    text: "Your incredible strength and resilience in facing challenges",
    emoji: "💪",
    color: "from-blue-200 to-indigo-200"
  },
  {
    text: "The way you always know how to make me smile",
    emoji: "🌟",
    color: "from-yellow-200 to-orange-200"
  },
  {
    text: "Your creativity and unique perspective on life",
    emoji: "🎨",
    color: "from-green-200 to-teal-200"
  },
  {
    text: "Your unwavering loyalty as a friend",
    emoji: "🤝",
    color: "from-purple-200 to-pink-200"
  },
  {
    text: "The passion you bring to everything you do",
    emoji: "🔥",
    color: "from-red-200 to-orange-200"
  },
  {
    text: "Your amazing taste in music (even the questionable ones)",
    emoji: "🎵",
    color: "from-indigo-200 to-blue-200"
  },
  {
    text: "Your ability to find humor in any situation",
    emoji: "😂",
    color: "from-yellow-200 to-green-200"
  },
  {
    text: "The way you dance like nobody's watching",
    emoji: "💃",
    color: "from-pink-200 to-red-200"
  },
  {
    text: "Your kind and generous heart",
    emoji: "❤️",
    color: "from-red-200 to-pink-200"
  },
  {
    text: "Your determination to chase your dreams",
    emoji: "✨",
    color: "from-purple-200 to-blue-200"
  },
  {
    text: "The silly faces you make in our photos",
    emoji: "🤪",
    color: "from-orange-200 to-yellow-200"
  },
  {
    text: "Your incredible cooking skills (especially those cookies)",
    emoji: "🍪",
    color: "from-amber-200 to-orange-200"
  },
  {
    text: "The way you remember little details about everyone",
    emoji: "🎯",
    color: "from-teal-200 to-green-200"
  },
  {
    text: "Your spontaneous adventure ideas",
    emoji: "🌈",
    color: "from-blue-200 to-purple-200"
  },
  {
    text: "The honest advice you always give",
    emoji: "🤔",
    color: "from-indigo-200 to-violet-200"
  },
  {
    text: "Your terrible puns that somehow make everyone laugh",
    emoji: "🃏",
    color: "from-fuchsia-200 to-pink-200"
  },
  {
    text: "The way you stand up for what you believe in",
    emoji: "👊",
    color: "from-rose-200 to-red-200"
  },
  {
    text: "Your ability to make everyone feel special",
    emoji: "🌟",
    color: "from-yellow-200 to-amber-200"
  },
  {
    text: "The countless memories we've created together",
    emoji: "📸",
    color: "from-violet-200 to-purple-200"
  },
  {
    text: "Simply being you - the most amazing friend anyone could ask for",
    emoji: "👑",
    color: "from-amber-200 to-yellow-200"
  }
];

export const ReasonsGrid = () => {
  const [visibleReasons, setVisibleReasons] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleReasonClick = (index: number) => {
    if (!visibleReasons.includes(index)) {
      setVisibleReasons(prev => [...prev, index]);
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary playfair mb-8 animate-color-change px-4">
        21 Reasons Why You're Amazing
        <span className="inline-block ml-2 animate-bounce">✨</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`reason-card cursor-pointer transition-all duration-300 transform
              ${visibleReasons.includes(index) ? 'opacity-100' : 'opacity-40'}
              ${hoveredIndex === index ? 'scale-105 shadow-xl' : ''}
              hover:bg-gradient-to-br ${reason.color} backdrop-blur-md
              rounded-lg p-4 sm:p-6`}
            onClick={() => handleReasonClick(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {visibleReasons.includes(index) ? (
              <div className="animate-fade-in space-y-3">
                <div className="text-3xl animate-bounce mb-2">{reason.emoji}</div>
                <p className="text-base sm:text-lg font-medium text-secondary">
                  {reason.text}
                </p>
                <div className="text-sm text-primary/60 mt-2">
                  Reason #{index + 1}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center min-h-[100px]">
                <span className="animate-pulse text-base sm:text-lg">
                  Click to reveal #{index + 1}...
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-8 text-white/60 px-4">
        <p className="animate-float text-lg">
          {visibleReasons.length}/21 reasons revealed
          <span className="ml-2 animate-sparkle">✨</span>
        </p>
        {visibleReasons.length === reasons.length && (
          <p className="mt-4 text-primary animate-fade-in text-xl">
            You've unlocked all the reasons! 🎉
          </p>
        )}
      </div>
    </div>
  );
};
