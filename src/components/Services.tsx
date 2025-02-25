import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'Develop fast and secure websites that adapt to any device, using the latest technologies to ensure an optimal user experience.',
    href: '#',
  },
  {
    num: '02',
    title: 'Mobile Apps',
    description:
      'Design and develop custom mobile applications for iOS and Android, focusing on usability and meeting the specific needs of your business.',
    href: '#',
  },
  {
    num: '03',
    title: 'E-Commerce',
    description:
      'Create custom e-commerce solutions that facilitate online sales and improve customer interaction, helping you increase your sales.',
    href: '#',
  },
  {
    num: '04',
    title: 'AI Automation',
    description:
      'Offer AI automation services to optimize processes and increase efficiency, reducing human errors and improving productivity.',
    href: '#',
  },
  {
    num: '05',
    title: 'Training',
    description:
      'Provide training programs in digital skills, covering topics such as web development, digital marketing, and data analysis, for companies and individuals.',
    href: '#',
  },
  {
    num: '06',
    title: 'Integrations & APIs',
    description:
      'Help integrate systems and applications to improve operational efficiency, developing custom APIs and integrations according to your business needs.',
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
