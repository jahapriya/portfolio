import React, { useContext } from "react";
// import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
// import Image5 from "../img/portfolio/5.png";
// import Image6 from "../img/portfolio/6.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-5 pb-8">
          {/* <div>text</div> */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Around 2 years of experience in Frontend React Development,
              conceptualizing, architecting, and implementing for user-centric
              web applications ● Proficient in React.js and its ecosystem,
              including Redux for state management, React Router for navigation,
              and other modern libraries/tools like Axios, Material-UI, or
              Styled Components for crafting intuitive, responsive, and visually
              appealing interfaces. ● Experience in all stages of Software
              Development Life Cycle and QA Life Cycle. ● Proficient in
              Maintaining Code version through GitHub. ● Expertise in Continuous
              Integration Testing using Jenkins like deploy jobs, release
              management jobs.
              {/* ● Experienced in optimizing application
              performance through efficient code, leveraging best practices, and
              implementing responsive designs for diverse devices and browsers.
              ● Adapt at collaborating closely with designers and backend
              developers to ensure seamless integration of frontend components
              with robust backend systems, fostering a cohesive and functional
              end-to-end product. ● Demonstrated ability to troubleshoot, debug,
              and refactor code for enhanced maintainability and scalability. ●
              Communication skills enable effective collaboration within
              multidisciplinary teams, contributing ideas and solutions while
              adhering to project timelines and quality standards. ● Continuous
              learning and improvement, seeking opportunities to further refine
              skills and contribute expertise to innovative projects. */}
              <br />
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. */}
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </motion.div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className="grid grid-cols-2 lg:gap-2"
          >
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[200px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div className="max-w-[200px] lg:max-w-[300px] h-[175px] lg:h-[200px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[200px] hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div className="max-w-[200px] lg:max-w-[300px] h-[175px] lg:h-[200px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[200px] hover:scale-110 transition-all duration-500"
                src={Image3}
                alt=""
              />
            </div>
            <div className="max-w-[200px] lg:max-w-[300px] h-[175px] lg:h-[200px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[200px] hover:scale-110 transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
            {/* <div className="max-w-[200px] lg:max-w-[300px] h-[175px] lg:h-[200px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[200px] hover:scale-110 transition-all duration-500"
                src={Image5}
                alt=""
              />
            </div>
            <div className="max-w-[200px] lg:max-w-[300px] h-[175px] lg:h-[200px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[200px] hover:scale-110 transition-all duration-500"
                src={Image6}
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
