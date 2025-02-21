import { Metadata } from 'next';

import Resume from '@/components/Resume';

export const metadata: Metadata = {
  title: 'Resume | Alex Mejicanos',
  description: 'Alex Mejicanos - Software Engineer Resume',
};

export default function ResumePage() {
  return <Resume />;
}
