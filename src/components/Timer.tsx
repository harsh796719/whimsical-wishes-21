import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Timer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize(); // Get screen size for confetti

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setShowConfetti(true); // Show celebration when time reaches 0
        setTimeout(() => setShowConfetti(false), 7000);

      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Celebration Effect */}
      {showConfetti && <Confetti width={width} height={height} />}

      <div className="flex flex-nowrap justify-center gap-4 px-2 min-h-[100px]">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-white/80 backdrop-blur-md rounded-lg shadow-lg relative animate-float"
          >
            <span className="text-2xl font-bold text-primary">{value}</span>
            <span className="text-xs text-secondary capitalize">{unit}</span>
          </div>
        ))}
      </div>

      {/* Celebration Message */}
      {/* {showConfetti && (
        <h2 className="text-3xl font-bold mt-4 text-green-500 animate-bounce">
          🎉 Celebration Time! 🎉
        </h2>
      )} */}
    </div>
  );
};
