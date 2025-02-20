import Link from 'next/link';

import { Button } from './ui/button';

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto py-12">
      <h2 className="text-2xl font-bold text-center mt-10 mb-10">Contact</h2>
      <p className="text-center">
        I'm currently available for hire. If you have a project in mind, please
        don't hesitate to contact me. I am open to freelance opportunities,
        collaborations, or full-time positions. Let's work together to bring
        your ideas to life and achieve your goals.
      </p>
      <div className="flex justify-center mt-8">
        <Link
          href="https://calendar.app.google/egcEQvNAueKG5j9T7"
          passHref
          target="_blank"
        >
          <Button className="bg-accent-default p-10 text-4xl rounded-full whitespace-nowrap text-black font-semibold">
            Schedule a Call
          </Button>
        </Link>
      </div>
    </section>
  );
}
