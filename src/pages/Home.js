import React, { useContext } from "react";
import WomanImg from "../img/home/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Home = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className="w-full pt-5 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center lg:items-start"
          >
            <p className="h1">Developer</p>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lgmb-12">
              Coimbatore
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              Contact
            </Link>
          </motion.div>
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="relative lg:right-40-overflow-hidden"
            >
              <motion.img
                style={{ height: "75%" }}
                transition={transition1}
                whileHover={{ scale: 1.1 }}
                src={WomanImg}
                alt=""
              />
            </motion.div>
            <div className="flex-1 pt-5 pb-[23rem] lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
              <h1 className="h1">About me</h1>
              <p>
                Hello! I'm Jahapriya Krishnasamy, a passionate front-end
                developer with a keen eye for design and a love for creating
                seamless user experiences. My journey in the world of web
                development started and performed crud operations for the page
                to know the history of tracking the vehicle. Since then, I've
                been on an exciting adventure of turning ideas into interactive
                and visually appealing pages .I have 2+ years of experience as
                Front end developer.
              </p>
              <br />
              <br />
              <br />
              <p>
                I specialize in crafting responsive and intuitive user
                interfaces that not only look great but also function flawlessly
                across various devices. I'm well-versed in modern front-end
                technologies and stay updated with the latest industry trends to
                ensure that my projects are not just meeting but exceeding
                expectations.
              </p>
              <Link style={{ fontWeight: "bolder" }} to={"/portfolio"}>
                View my work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
