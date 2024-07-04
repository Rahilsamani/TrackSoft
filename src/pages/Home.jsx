import React from "react";
import Home1 from "../assets/Home1.png";
import Button from "../components/common/Button";
import FeaturesCard from "../components/core/FeaturesCard";
import BlogSection from "../components/core/BlogSection";
import Footer from "../components/common/Footer";
import AboutContent from "../components/common/AboutContent";
import { useSelector } from "react-redux";

const Home = () => {
  const featuresDetails = [
    {
      icon: "search",
      heading: "Tracking",
      description:
        "Discover what your employees are doing in detail with our comprehensive tracking tools.",
    },
    {
      icon: "trophy",
      heading: "Scores",
      description:
        "Analyze tracking data to get productivity scores that help you measure and improve performance.",
    },
    {
      icon: "camera",
      heading: "Office TV",
      description:
        "Monitor office computers to see what's being done in real-time.",
    },
  ];
  const { token } = useSelector((state) => state.auth);

  return (
    <div>
      {/* section 1 */}
      <div className="flex justify-center items-center bg-[#F5F5F5] pt-10 pb-24">
        <div className="flex flex-col-reverse md:flex-row w-11/12 justify-between">
          <div className="w-full md:w-[40%]">
            <img src={Home1} alt="homeImage1" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <h2 className="text-5xl font-semibold text-blue text-shadow-custom leading-[1.3] mb-3">
              Employee Monitoring System
            </h2>
            <p className="text-grey text-lg pr-16">
              Welcome to <span className="font-medium">TrackSoft</span>, your
              trusted partner in employee monitoring. Our innovative system
              ensures you stay informed about your employees' activities,
              boosting productivity and fostering a transparent workplace.
            </p>
            {token ? (
              <div className="mt-5 mb-5">
                <Button text={"Let's Get Started"} link={"/dashboard/track"} />
              </div>
            ) : (
              <div className="flex gap-5 mt-5">
                <Button text={"Login"} link={"/login"} />
                <Button text={"SignUp"} link={"/signup"} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center pt-10 pb-24 w-11/12">
          <h2 className="text-5xl font-semibold text-blue text-shadow-custom leading-[1.8]">
            OUR FEATURES
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
            {featuresDetails.map((feature, index) => {
              return (
                <div className="w-[400px] md:w-[300px]" key={index}>
                  <FeaturesCard {...feature} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* section 3 */}
      <AboutContent />

      {/* Section 4 */}
      <BlogSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
