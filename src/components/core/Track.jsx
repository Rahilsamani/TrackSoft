import React from "react";

const Track = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Timer */}
      <div className="w-1/3 flex flex-col justify-center items-center h-1/3 mt-16">
        {/* Time  */}
        <div className="flex justify-center items-center text-center w-full p-5 text-[#f3f3f3] bg-[#071952] rounded-t-lg text-3xl">
          00:00:00
        </div>
        {/* Buttons */}
        <div className="flex justify-center items-center gap-2 text-center p-5 bg-[#EBF4F6] rounded-b-lg w-full">
          <button className="border border-black rounded-sm px-2">Start</button>
          <button className="border border-black rounded-sm px-2">Break</button>
          <button className="border border-black rounded-sm px-2">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Track;
