import React from "react";
import Mission from "../assets/mission.png";
import Vision from "../assets/vision.png";
import WhyUs from "../assets/whyUs.png";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#F5F5F5] pt-5 pb-24">
        <h2 className="text-7xl mb-3 font-semibold text-blue text-shadow-custom leading-[1.8]">
          ABOUT US
        </h2>
        <p className="w-[75%] text-center tex ">
          At <span className="font-medium">TrackSoft</span>, we believe that a
          productive workforce is the foundation of any successful business. Our
          mission is to empower organizations with the tools they need to create
          transparent, efficient, and thriving work environments. We understand
          the challenges companies face in managing productivity and ensuring
          compliance, which is why we developed our comprehensive Employee
          Monitoring System.
        </p>
        {/* section 1 */}
        <div className="flex justify-center items-center bg-[#F5F5F5] pt-10 mt-16 pb-24">
          <div className="flex flex-col-reverse md:flex-row w-11/12 justify-between">
            <div className="w-full md:w-[40%] flex items-center justify-center">
              <img src={Mission} alt="mission" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-2 mt-5">
              <h2 className="text-5xl font-semibold text-blue text-shadow-custom leading-[1.3] mb-3">
                Our Mission
              </h2>
              <p className="text-grey text-lg pr-16">
                At TrackSoft, our mission is to revolutionize workforce
                management. We provide a reliable, feature-rich platform that
                simplifies operations, enhances productivity, and fosters
                accountability. Our goal is to reduce inefficiencies, streamline
                processes, and equip organizations with the tools to make
                data-driven decisions. By emphasizing transparency and real-time
                insights, we help businesses achieve operational goals and
                create a culture of trust and collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="flex justify-center items-center bg-[#F5F5F5] pt-10 pb-24">
          <div className="flex flex-col-reverse md:flex-row w-11/12 justify-between">
            <div className="w-full md:w-1/2 flex flex-col gap-2 mt-5">
              <h2 className="text-5xl font-semibold text-blue text-shadow-custom leading-[1.3] mb-3">
                Our Vision
              </h2>
              <p className="text-grey text-lg pr-16">
                Our vision is to become the leading global platform for employee
                tracking and workforce management, setting a new benchmark for
                innovation, reliability, and user experience. We aspire to
                create a future where businesses of all sizes can seamlessly
                manage their teams, improve employee satisfaction, and achieve
                operational excellence by leveraging the transformative power of
                technology.
              </p>
            </div>

            <div className="w-full md:w-[40%] flex items-center justify-center">
              <img src={Vision} alt="vision" />
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="flex justify-center items-center bg-[#F5F5F5] pt-2 mt-16">
          <div className="flex flex-col-reverse md:flex-row w-11/12 justify-between">
            <div className="w-full md:w-[40%] flex items-center justify-center">
              <img src={WhyUs} alt="WhyUs" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-2 mt-5">
              <h2 className="text-5xl font-semibold text-blue text-shadow-custom leading-[1.3] mb-3">
                Why Choose TrackSoft?
              </h2>
              <p className="text-grey text-lg pr-16">
                TrackSoft stands out as a modern, intuitive, and adaptable
                solution tailored to the evolving needs of businesses. Built
                with cutting-edge web technologies, the platform ensures speed,
                security, and reliability. Its user-centric design prioritizes
                simplicity, making it accessible for managers and employees
                alike. Whether you are a small startup or a large enterprise,
                TrackSoft adapts effortlessly to meet your unique requirements,
                empowering you to focus on what truly matters—growing your
                business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default About;
