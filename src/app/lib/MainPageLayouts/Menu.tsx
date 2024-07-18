'use client';
import Image from 'next/image';
import OpenFolder from '/public/Open_Folder.svg';
import CloseFolder from '/public/Close_Folder.svg';
import PlusFolder from '/public/Plus_Folder.svg';
import Plus from '/public/Plus.svg';
import { useState, useEffect } from 'react';
import { useStoreFolder } from '@/store/Folders';
const Menu = () => {
  const { createFolders, folders, getFolders, getByIdFolders, deleteByIdFolders, patchByIdFolders } = useStoreFolder(
    (state) => state
  );
  useEffect(() => {
    getFolders();
  }, []);

  const [openedFolderIds, setOpenedFolderIds] = useState(new Set());
  const toggleFolder = (id) => {
    console.log(id);
    
    setOpenedFolderIds(prev => {
      const newOpened = new Set(prev);
      if (newOpened.has(id)) {
        newOpened.delete(id);
      } else {
        newOpened.add(id);
      }
      return newOpened;
    });
  };
  
  
  return (
    <div className='border w-[15%] border-red-800 border-1'>
      <div>
        <div className=' my-5 mx-[15px] bg-[#242424] flex justify-center rounded-[5px] h-[45px]'>
          <button>New Note</button>
          <Image className='mx-2 w-[15px]' src={Plus} alt='Add folder button' />
        </div>
      </div>

      <div>
        <div className='flex justify-between px-[20px]'>
          <h2>Folders</h2>
          <Image className='cursor-pointer w-[20px]' src={PlusFolder} alt='Add folder button' />
        </div>
      </div>
      <ul>
        {folders.map((item) => (
        <>
       { console.log(item)}
        
          <div key={item._id} onClick={() => toggleFolder(item._id)} className={'flex px-[20px] ' + (openedFolderIds.has(item._id) ? "bg-blue-600 rounded-sm" : null)}>
            <Image src={openedFolderIds.has(item._id) ? OpenFolder : CloseFolder} alt='Folder icon' width={20} height={20} />
            <li className='mx-2'>{item.name}</li>
          </div>
        </>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
