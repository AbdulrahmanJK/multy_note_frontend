interface TodoListProps {
  className?: string;
}

const TodoList = ({ className }: TodoListProps) => {
  return <div className='p-[15px] border w-[15%] border-red-800 border-1'>
    <div>TodoList</div>
   
  </div>;
};

export default TodoList;
