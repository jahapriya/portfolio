import React, { useContext } from "react";
import WomanImg from "../img/about/woman.png";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";
const About = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="section"
      >
        <div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          className="container mx-auto h-full relative"
        >
          <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              style={{ height: "70%" }}
              transition={transition1}
              className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden"
            >
              <img src={WomanImg} alt=""></img>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={transition1}
              className="flex-1 pt-5 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
            >
              <h1 className="h1">About me</h1>
              <p className="mb-12 max-w-sm">
                <b>My Approach:</b>I believe in a collaborative approach to
                development, working closely with designers and back-end
                developers to bring concepts to life. Attention to detail is my
                forte, and I strive to create websites that not only meet but
                exceed the client's vision.<b> Continuous Learning:</b> The
                ever-evolving nature of web development excites me, and I'm
                committed to continuous learning. Whether it's experimenting
                with new frameworks or staying updated on the latest design
                principles, I enjoy pushing the boundaries of what's possible in
                the digital realm. <b>Let's Connect:</b> I'm always open to new
                opportunities, collaborations, and interesting projects. If
                you're looking for a dedicated front-end developer who is not
                just technically proficient but also passionate about creating
                exceptional user experiences, let's connect! Feel free to
                explore my portfolio to see some of my work, and don't hesitate
                to reach out for a chat or collaboration.
              </p>
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. */}
              {/* <p className="mb-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.lorem40
            </p> */}
              <Link to={"/portfolio"} className="btn">
                View my work
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default About;
