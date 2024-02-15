import React, { useContext } from "react";
import Header from "./components/Header";
import AnimRoute from "./components/AnimRoutes";
import MobileNav from "./components/MobileNav";
import Socials from "./components/Socials";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import { CursorContext } from "./context/CursorContext";

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  // console.log(useContext(CursorContext));
  return (
    <div>
      <Router>
        <Header />
        <AnimRoute />
        <motion.div
          animate={cursorBG}
          variants={cursorVariants}
          className="w-[32px] h-[32px] bg-priimary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        ></motion.div>
        <MobileNav />
        {/* <Socials /> */}
      </Router>
    </div>
  );
};

export default App;
