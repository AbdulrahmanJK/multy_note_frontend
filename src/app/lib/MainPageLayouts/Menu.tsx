import Image from "next/image";
import OpenFolder from "/public/Open_Folder.svg";
import CloseFolder from "/public/Close_Folder.svg";
import PlusFolder from "/public/Plus_Folder.svg";
import Plus from "/public/Plus.svg";
import { useState } from "react";
import { useStoreAuth } from "../../../store/Auth";

const Menu = () => {
  const token = useStoreAuth((state) => state.token);
  console.log(token);

  
  const [folderOpen, setFoldlerOpen] = useState<boolean>(false);
  return (
    <div className="border w-[15%] border-red-800 border-1">
      <div>
        <div className=" my-5 mx-[15px] bg-[#242424] flex justify-center rounded-[5px] h-[45px]">
          <button>New Note</button>
          <Image className="mx-2 w-[15px]" src={Plus} alt="Add folder button" />
        </div>
      </div>
      <div>
        <div className="flex justify-between px-[20px]">
          <h2>Folders</h2>
          <Image
            className="cursor-pointer w-[20px]"
            src={PlusFolder}
            alt="Add folder button"
          />
        </div>
        <ul>
          <div
            onClick={() => setFoldlerOpen(!folderOpen)}
            className="flex bg-[red] px-[20px]"
          >
            <Image
              className="w-[20px]"
              src={folderOpen ? OpenFolder : CloseFolder}
              alt="folder"
            />
            <li className="mx-2">1</li>
          </div>
          <div className="flex bg-[blue] px-[20px]">
            <Image className="w-[20px]" src={CloseFolder} alt="folder" />
            <li className="mx-2">2</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
