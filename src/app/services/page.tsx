import { Metadata } from 'next';

import Services from '@/components/Services';

export const metadata: Metadata = {
  title: 'Services | Alex Mejicanos',
  description: 'Alex Mejicanos - List of services provided',
};

export default function ServicesPage() {
  return <Services />;
}
