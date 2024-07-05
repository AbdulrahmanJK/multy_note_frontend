interface DescriptionProps {
  title?: string;
  date?:string;
  text?:string
}

const Description = ({ title, date, text }: DescriptionProps) => {
  return <div className="p-[15px] border w-[70%] border-red-800 border-1">
    <h1>Tittle</h1>
    <div className="flex w-[140px] justify-between ">
      <p>Date</p>
      <p>20.20.01</p>
    </div>

    <div className="flex w-[140px] justify-between">
      <p>Folder</p>
      <p>Name</p>
    </div>

    <div className="mt-[30px]">
      <p>Text lkdglfdmgfdkgfdkgdfk</p>
    </div>
  </div>;
};

export default Description;
