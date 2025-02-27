
import { useState } from 'react';

const reasons = [
  {
    text: "1",
    emoji: "😆🌀",
    color: "from-pink-200 to-purple-200"
  },
  {
    text: "2",
    emoji: "😈😂",
    color: "from-blue-200 to-indigo-200"
  },
  {
    text: "3",
    emoji: "🔮😆",
    color: "from-yellow-200 to-orange-200"
  },
  {
    text: "4",
    emoji: "🏸🔥",
    color: "from-green-200 to-teal-200"
  },
  {
    text: "5",
    emoji: "🤝",
    color: "from-purple-200 to-pink-200"
  },
  {
    text: "6",
    emoji: "😆👗",
    color: "from-red-200 to-orange-200"
  },
  {
    text: "7",
    emoji: "🎵",
    color: "from-indigo-200 to-blue-200"
  },
  {
    text: "8",
    emoji: "🧠⚡",
    color: "from-yellow-200 to-green-200"
  },
  {
    text: "9",
    emoji: "🤯💬",
    color: "from-pink-200 to-red-200"
  },
  {
    text: "10",
    emoji: "❤️",
    color: "from-red-200 to-pink-200"
  },
  {
    text: "11",
    emoji: "💌💖",
    color: "from-purple-200 to-blue-200"
  },
  {
    text: "12",
    emoji: "📝🤪",
    color: "from-orange-200 to-yellow-200"
  },
  {
    text: "13",
    emoji: "📱💖",
    color: "from-amber-200 to-orange-200"
  },
  {
    text: "14",
    emoji: "🎯",
    color: "from-teal-200 to-green-200"
  },
  {
    text: "15",
    emoji: "😜😂",
    color: "from-blue-200 to-purple-200"
  },
  {
    text: "16",
    emoji: "🔥💯",
    color: "from-indigo-200 to-violet-200"
  },
  {
    text: "17",
    emoji: "😏🔥",
    color: "from-fuchsia-200 to-pink-200"
  },
  {
    text: "18",
    emoji: "🦋😶",
    color: "from-rose-200 to-red-200"
  },
  {
    text: "19",
    emoji: "🚀💙",
    color: "from-yellow-200 to-amber-200"
  },
  {
    text: "20",
    emoji: "🕵️‍♀️🔎",
    color: "from-violet-200 to-purple-200"
  },
  {
    text: "21",
    emoji: "👑💖",
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
