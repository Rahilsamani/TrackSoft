import Button from "./Button";
import Home2 from "../../assets/productivity.png";

const AboutContent = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F5F5F5] pt-10 pb-24">
      <h2 className="text-6xl mb-10 font-semibold text-blue text-shadow-custom leading-[1.8]">
        ABOUT US
      </h2>

      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row w-11/12 justify-center items-center">
          <div className=" md:w-[40%]">
            <img src={Home2} alt="homeImage1" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <h2 className="text-5xl font-semibold text-blue text-shadow-custom leading-[1.3]">
              With our ethical approach, everyone benefits!
            </h2>
            <p className="text-grey text-lg pr-16">
              At TrackSoft, we believe in ethical employee monitoring that
              benefits everyone. Our solutions enhance visibility and
              productivity through transparency and collaboration. Unlike other
              platforms, we do not use intrusive technologies like keystroke
              logging or video surveillance. Instead, we focus on collecting
              contextual data that helps you achieve amazing results without
              compromising trust. With TrackSoft, everyone wins!
            </p>
            <div>
              <Button text={"Learn More"} link={"/"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
