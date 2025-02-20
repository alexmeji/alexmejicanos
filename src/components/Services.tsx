import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'We build responsive and high-performance websites that serve as powerful marketing tools and bring memorable brand experiences. Our team specializes in the latest web technologies to ensure your site is fast, secure, and scalable.',
    href: '#',
  },
  {
    num: '02',
    title: 'Mobile Apps',
    description:
      'Our versatile team of developers design and develop custom mobile apps for both iOS and Android platforms. We focus on creating user-friendly and feature-rich applications that meet your business needs and provide a seamless user experience.',
    href: '#',
  },
  {
    num: '03',
    title: 'E-Commerce',
    description:
      'We create custom e-commerce solutions that are tailored to your business needs. Our team of experts will help you build a user-friendly online store that drives sales and increases customer engagement.',
    href: '#',
  },
  {
    num: '04',
    title: 'IA Automation',
    description:
      'Our IA automation services help businesses streamline their operations and improve efficiency. We use the latest technologies to automate repetitive tasks, reduce human error, and increase productivity.',
    href: '#',
  },
  {
    num: '05',
    title: 'Training',
    description:
      'We offer training programs for businesses and individuals looking to improve their digital skills. Our courses cover a wide range of topics, including web development, digital marketing, and data analytics.',
    href: '#',
  },
  {
    num: '06',
    title: 'Integrations & APIs',
    description:
      'We help businesses integrate their systems and applications to improve efficiency and streamline operations. Our team of experts will work with you to develop custom APIs and integrations that meet your unique business needs.',
    href: '#',
  },
];
export default function Services() {
  return (
    <section className="container mx-auto py-12" id="services">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col justify-center gap-6 group"
          >
            {/* Top */}
            <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                {service.num}
              </div>
              <Link
                href={service.href}
                className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent-default transition-all duration-500 flex justify-center items-center hover:-rotate-45"
              >
                <BsArrowDownRight className="text-primary text-2xl" />
              </Link>
            </div>
            {/* Title */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500">
              {service.title}
            </h2>
            <p className="text-white/60">{service.description}</p>
            <div className="border-b border-white/20 w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
