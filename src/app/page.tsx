'use client';

import Description from '@/app/lib/MainPage/Description';
import Todo from '@/app/lib/MainPage/TodoList';
import Header from '@/app/lib/MainPage/Menu';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex border h-lvh border-red-800 border-1'>
      <Header />
      <Todo />
      <Description/>
    </div>
  );
}
