
import { useEffect, useState } from 'react';
import { Timer } from '../components/Timer';
import { StarryBackground } from '../components/StarryBackground';
import { BirthdayMessage } from '../components/BirthdayMessage';
import { ReasonsGrid } from '../components/ReasonsGrid';
import { VirtualCake } from '../components/VirtualCake';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <StarryBackground />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center space-y-8 px-4">
          <h1 className="text-3xl md:text-6xl font-bold text-primary playfair text-center animate-fade-in px-2">
            Happy 21st Birthday, Sneha Shamili !
          </h1>
          <Timer targetDate="2025-02-23" />
          <BirthdayMessage />
        </section>

        <section className="min-h-screen py-16 px-4">
          <ReasonsGrid />
        </section>

        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <VirtualCake />
        </section>
      </main>
    </div>
  );
};

export default Index;
