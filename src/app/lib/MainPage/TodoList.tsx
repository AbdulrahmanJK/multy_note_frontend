interface TodoListProps {
  className?: string;
}

const TodoList = ({ className }: TodoListProps) => {
  return <div className='border w-[15%] border-red-800 border-1'>TodoList</div>;
};

export default TodoList;
