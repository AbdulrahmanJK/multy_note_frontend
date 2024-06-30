'use client';

import Todo from '@/app/lib/components/Todo';
import Header from '@/app/lib/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Todo />
      <Header />
    </>
  );
}
