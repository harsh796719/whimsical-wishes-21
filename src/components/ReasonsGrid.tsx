
import { useState } from 'react';

const reasons = [
  {
    text: "Your habit of overthinking every tiny thing, even when there’s nothing to overthink",
    emoji: "😆🌀",
    color: "from-pink-200 to-purple-200"
  },
  {
    text: "Your reaction when I irritate you—it’s priceless and totally worth it",
    emoji: "😈😂",
    color: "from-blue-200 to-indigo-200"
  },
  {
    text: "How you somehow read my mind and say exactly what I was about to say",
    emoji: "🔮😆",
    color: "from-yellow-200 to-orange-200"
  },
  {
    text: "The way you play badminton like you're in the Olympics",
    emoji: "🏸🔥",
    color: "from-green-200 to-teal-200"
  },
  {
    text: "Your unwavering loyalty as a friend",
    emoji: "🤝",
    color: "from-purple-200 to-pink-200"
  },
  {
    text: "Your stylish outfits that I only get to see in photos and never in real life",
    emoji: "😆👗",
    color: "from-red-200 to-orange-200"
  },
  {
    text: "Your amazing taste in music (even the questionable ones)",
    emoji: "🎵",
    color: "from-indigo-200 to-blue-200"
  },
  {
    text: "How our thoughts sync up like we share the same brain",
    emoji: "🧠⚡",
    color: "from-yellow-200 to-green-200"
  },
  {
    text: "How we can talk about the most random things and somehow make it deep",
    emoji: "🤯💬",
    color: "from-pink-200 to-red-200"
  },
  {
    text: "Your kind and generous heart",
    emoji: "❤️",
    color: "from-red-200 to-pink-200"
  },
  {
    text: "The fact that you had the courage to confess, even if destiny messed it up",
    emoji: "💌💖",
    color: "from-purple-200 to-blue-200"
  },
  {
    text: "How you express your feelings in small but meaningful ways after one peg",
    emoji: "📝🤪",
    color: "from-orange-200 to-yellow-200"
  },
  {
    text: "Your online presence feels more real than people I meet in person",
    emoji: "📱💖",
    color: "from-amber-200 to-orange-200"
  },
  {
    text: "The way you remember little details about everyone",
    emoji: "🎯",
    color: "from-teal-200 to-green-200"
  },
  {
    text: "How you pretend to be unaffected by my teasing, but I know you secretly enjoy it",
    emoji: "😜😂",
    color: "from-blue-200 to-purple-200"
  },
  {
    text: "How our friendship survived distance, misunderstandings, and my constant teasing",
    emoji: "🔥💯",
    color: "from-indigo-200 to-violet-200"
  },
  {
    text: "The way you act all shy, but I know there’s a savage side hiding inside you",
    emoji: "😏🔥",
    color: "from-fuchsia-200 to-pink-200"
  },
  {
    text: "Your ability to be both an introvert and a social butterfly, depending on the situation",
    emoji: "🦋😶",
    color: "from-rose-200 to-red-200"
  },
  {
    text: "The fact that after all these years, we’re still this close, even without meeting in person",
    emoji: "🚀💙",
    color: "from-yellow-200 to-amber-200"
  },
  {
    text: "The way you analyze every little detail in life like it’s a detective case",
    emoji: "🕵️‍♀️🔎",
    color: "from-violet-200 to-purple-200"
  },
  {
    text: "Simply being you—the shy, strong, stylish, and irreplaceable best friend I wouldn't trade for anything",
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
