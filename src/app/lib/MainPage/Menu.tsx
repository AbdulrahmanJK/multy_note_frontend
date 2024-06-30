import Image from 'next/image';
import OpenFolder from '/public/Open_Folder.svg';
import CloseFolder from '/public/Close_Folder.svg';
import PlusFolder from '/public/Plus_Folder.svg';
import Plus from '/public/Plus.svg';
interface MenuProps {
  className?: string;
}

const Menu = ({ className }: MenuProps) => {
  return (
    <div className='border w-[15%] border-red-800 border-1'>
      <div>
        <div className=' my-5 mx-[15px] bg-[#242424] flex justify-center rounded-[5px] h-[45px]'>
          <button>New Note</button>
          <Image className='mx-2' src={Plus} width={15} height={15} alt='Add folder button' />
        </div>
      </div>
      <div>
        <div className='flex justify-between px-[20px]'>
          <h2>Folders</h2>
          <Image className='cursor-pointer' src={PlusFolder} width={20} height={20} alt='Add folder button' />
        </div>
        <ul>
          <div className='flex bg-[red] px-[20px]'>
            <Image src={CloseFolder} width={20} height={20} alt='folder' />
            <li className='mx-2'>1</li>
          </div>
          <div className='flex bg-[blue] px-[20px]'>
            <Image src={CloseFolder} width={20} height={20} alt='folder' />
            <li className='mx-2'>2</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
