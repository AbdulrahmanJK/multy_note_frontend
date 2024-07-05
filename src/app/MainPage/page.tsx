'use client';

import Description from "../lib/MainPageLayouts/Description";
import Menu from "../lib/MainPageLayouts/Menu";
import TodoList from "../lib/MainPageLayouts/TodoList";

export default function MainPage() {
  return (
    <div className='flex border h-lvh border-red-800 border-1'>
      <Menu />
      <TodoList/>
      <Description/>
    </div>
  );
}
