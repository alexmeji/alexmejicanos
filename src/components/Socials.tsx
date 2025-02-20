import Link from 'next/link';

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/alexmeji',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/alexmejicanos',
  },
  {
    icon: <FaTwitter />,
    path: 'https://x.com/alex_mejicanos',
  },
];

export default function Socials({
  containerStyles,
  iconStyles,
}: {
  containerStyles?: string;
  iconStyles?: string;
}) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          href={social.path}
          key={index}
          className={iconStyles}
          target="_blank"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
