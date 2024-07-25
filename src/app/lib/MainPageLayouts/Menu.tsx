"use client";
import Image from "next/image";
import OpenFolder from "/public/Open_Folder.svg";
import CloseFolder from "/public/Close_Folder.svg";
import PlusFolder from "/public/Plus_Folder.svg";
import Plus from "/public/Plus.svg";
import { useState, useEffect } from "react";
import { useStoreFolder } from "@/store/Folders";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import useFetch from "../hooks/useFetch";

interface Data {
  name: string;
}

const Menu = () => {
  const {
    createFolders,
    folders,
    getFolders,
    getByIdFolders,
    deleteByIdFolders,
    patchByIdFolders,
  } = useStoreFolder((state) => state);

  useEffect(() => {
    getFolders();
  }, [getFolders]);

  const [openedFolderIds, setOpenedFolderIds] = useState(new Set());
  const [open, setOpen] = useState(false);

  const { mutate, data, isLoading, error } =
    useFetch<typeof createFolders>(createFolders);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();

  const onSubmit = (data: Data) => {
    console.log(data);
    mutate(data.name);
    if (!error) {
      getFolders();
      setOpen(false);
    }
  };

  const toggleFolder = (id: string) => {
    setOpenedFolderIds((prev) => {
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

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button>
                <Image
                  className="cursor-pointer w-[20px]"
                  src={PlusFolder}
                  alt="Add folder button"
                />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
              <Dialog.Content className="fixed top-1/2 left-1/2 max-w-md p-5 bg-[#242424] rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                <form className="w-auto" onSubmit={handleSubmit(onSubmit)}>
                  <div className="">
                    <input
                      placeholder="Имя папки"
                      className="text-[#242424] "
                      id="name"
                      {...register("name", { required: true })}
                    />
                    {error && <span>{error.response?.data.error}</span>}
                  </div>
                    <button className="w-[100%] cursor-pointer rounded-sm bg-blue-600 mt-3">Создать</button>
                </form>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
      <ul>
        {folders.map((item) => (
          <div
            key={item._id}
            onClick={() => toggleFolder(item._id)}
            className={
              "flex px-[20px] " +
              (openedFolderIds.has(item._id) ? "bg-blue-600 rounded-sm" : null)
            }
          >
            <Image
              src={openedFolderIds.has(item._id) ? OpenFolder : CloseFolder}
              alt="Folder icon"
              width={20}
              height={20}
            />
            <li className="mx-2">{item.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
