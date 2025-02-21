
import { useEffect, useState } from 'react';

export const StarryBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; style: { top: string; left: string; animationDelay: string } }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        style: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`
        }
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#1A1F2C] to-[#2C1A2C] overflow-hidden">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={star.style}
        />
      ))}
    </div>
  );
};
