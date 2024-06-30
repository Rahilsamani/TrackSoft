import Benefits from "../../assets/benefits.png";
import Fraud from "../../assets/employeefraud.png";
import Future from "../../assets/future.png";
import BlogsCard from "./BlogsCard";

const BlogSection = () => {
  const blogsDetails = [
    {
      image: Benefits,
      date: "10 March, 2023",
      author: "By Kendra Gaffin",
      heading: "Employee Fraud",
      description:
        "Fraud is likely to be discovered only after it has been committed if don't have a mechanism to keep an eye on your employee's computers. It's too late to take type of significant action to stop additional fraud at that point...",
      link: "https://www.insightful.io/blog/protect-business-from-employee-fraud",
    },
    {
      image: Fraud,
      date: "22 Feb, 2023",
      author: "By Gavi",
      heading: "7 Benefits Of TrackSoft",
      description:
        "Remote teams often lack the cohesiveness of in-office teams. Once making the move to a virtual work environment, many traditional workplace forms of collaboration ....",
      link: "https://www.insightful.io/blog/7-benefits-real-time-tracking-remote-workers",
    },
    {
      image: Future,
      date: "12 Feb, 2023",
      author: "By Kendra Gaffin",
      heading: "The Future Of Remote Work",
      description:
        "For the first time, working remotely is becoming the default setting. While we saw a surge of remote working during the pandemic, few thought that it would take over in-office working....",
      link: "https://www.insightful.io/blog/future-remote-work",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center pt-10 pb-24 w-11/12">
        <h2 className="text-5xl font-semibold text-blue text-shadow-custom leading-[1.8]">
          BLOGS
        </h2>
        <div className="flex justify-between items-center gap-10 mt-10">
          {blogsDetails.map((blog, index) => {
            return (
              <div className="w-[320px]">
                <BlogsCard key={index} {...blog} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
