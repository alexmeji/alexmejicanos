import { FiDownload } from 'react-icons/fi';
import { Button } from './ui/button';
import Socials from './Socials';
import ProfilePicture from './ProfilePicture';

export default function Hero() {
  return (
    <section className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* Text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Senior Software Engineer</span>
          <h1 className="h1 mb-6">
            Hello I'm <br />{' '}
            <span className="text-accent-default">Alex Mejicanos</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            I'm a software developer with a passion for building web
            applications and solving problems. I specialize in helping startups
            grow their services and reach their full potential. I'm always
            looking for new challenges and opportunities to learn and grow.
          </p>

          {/* Buttons and socials*/}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent rounded-full text-accent-default border-2 border-accent-default uppercase flex items-center gap-2 hover:bg-accent-default hover:text-black transition-all"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
              <Socials
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border-2 border-accent-default rounded-full flex justify-center items-center text-accent-default text-base hover:bg-accent-default hover:text-black hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <ProfilePicture />
        </div>
      </div>
    </section>
  );
}
