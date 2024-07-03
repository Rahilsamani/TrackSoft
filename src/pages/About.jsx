import Footer from "../components/common/Footer";
import AboutContent from "../components/common/AboutContent";

const About = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#F5F5F5] pt-10 pb-24">
        <AboutContent />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
