import React from "react";
import Home1 from "../assets/Home1.png";
import Button from "../components/common/Button";
import FeaturesCard from "../components/core/FeaturesCard";
import BlogSection from "../components/core/BlogSection";
import About from "./About";
import Footer from "../components/common/Footer";

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
            <h2 className="text-5xl font-semibold text-blue text-shadow-custom leading-[1.3] mb-3">
              Employee Monitoring System
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
      <About />

      {/* Section 4 */}
      <BlogSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
