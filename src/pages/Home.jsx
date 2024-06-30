import React from "react";
import Home1 from "../assets/Home1.png";
import Home2 from "../assets/productivity.png";
import Button from "../components/common/Button";
import FeaturesCard from "../components/core/FeaturesCard";
import BlogSection from "../components/core/BlogSection";

const Home = () => {
  const featuresDetails = [
    {
      icon: "search",
      heading: "Tracking",
      description: "See What's Your Empoyee Doing In A Detailed Way",
    },
    {
      icon: "trophy",
      heading: "Scores",
      description: "Analyze tracking information and get productivity scores.",
    },
    {
      icon: "camera",
      heading: "Office TV",
      description: "Watch your office computers to see what's being done.",
    },
  ];
  return (
    <div>
      {/* section 1 */}
      <div className="flex justify-center items-center bg-[#F5F5F5] pt-10 pb-24">
        <div className="flex w-11/12 justify-between">
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

      {/* section 2 */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center pt-10 pb-24 w-11/12">
          <h2 className="text-5xl font-semibold text-blue text-shadow-custom leading-[1.8]">
            OUR FEATURES
          </h2>
          <div className="flex justify-between items-center gap-10 mt-10">
            {featuresDetails.map((feature, index) => {
              return (
                <div className="w-1/3">
                  <FeaturesCard {...feature} key={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="flex flex-col justify-center items-center bg-[#F5F5F5] pt-10 pb-24">
        <h2 className="text-6xl mb-10 font-semibold text-blue text-shadow-custom leading-[1.8]">
          ABOUT US
        </h2>

        <div className="flex justify-center items-center">
          <div className="flex w-11/12 justify-between">
            <div className="w-[40%]">
              <img src={Home2} alt="homeImage1" />
            </div>
            <div className="w-1/2 flex flex-col gap-10">
              <h2 className="text-5xl font-semibold text-blue text-shadow-custom leading-[1.3]">
                With our ethical approach, everyone benefits!
              </h2>
              <p className="text-grey text-lg pr-16">
                TrackSoft is committed to providing solutions that enhance
                visibility and productivity using an ethical approach that is
                focused on transparency and collaboration. Our platform does not
                use intrusive employee monitoring technologies like keystroke
                logging and video surveillance. Instead, we focus on the
                collection of contextual data that helps you achieve amazing
                things without sacrificing trust. And that means everyone wins!
              </p>
              <div>
                <Button text={"Learn More"} link={"/"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <BlogSection />
    </div>
  );
};

export default Home;
