import React from "react";
import Home1 from "../assets/Home1.png";
import Button from "../components/common/Button";

const Home = () => {
  return (
    <div className="flex bg-[#F5F5F5] justify-center items-center">
      <div className="w-11/12">
        {/* section 1 */}
        <div className="flex justify-between py-10">
          <div className="w-[40%]">
            <img src={Home1} alt="homeImage1" />
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <h2 className="text-5xl font-semibold text-blue text-shadow-custom leading-[1.8]">
              Employee Monitoring
            </h2>
            <p className="text-grey text-lg pr-16">
              It's Impossible To Watch Your Employees Every Minute Of The Day.
              But TrackSoft Can Do It For You, Creating A More Productive
              Workplace.
            </p>
            <div className="flex gap-5 mt-5">
              <Button text={"Login"} link={"/login"} />
              <Button text={"SignUp"} link={"/signup"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
