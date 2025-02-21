import { Metadata } from 'next';

import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact | Alex Mejicanos',
  description: 'Alex Mejicanos - Contact',
};

export default function ContactPage() {
  return <Contact />;
}
