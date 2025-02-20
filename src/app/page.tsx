import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <Stats />
    </div>
  );
}
