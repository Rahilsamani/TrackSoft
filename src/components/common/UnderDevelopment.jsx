import Image from "../../assets/development.gif";

const UnderDevelopment = () => {
  return (
    <div className="flex justify-center items-center flex-col overflow-hidden">
      <div className="h-[350px] w-[480px]">
        <img
          src={Image}
          className="w-fit h-fit"
          height={300}
          alt="under-development"
        />
      </div>
    </div>
  );
};

export default UnderDevelopment;
