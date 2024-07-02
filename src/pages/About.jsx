import Button from "../components/common/Button";
import Home2 from "../assets/productivity.png";
import Footer from "../components/common/Footer";

const About = () => {
  return (
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
