import React, { useContext } from "react";
import Socials from "./Socials";
import Logo from "../img/header/logo.svg";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";
const Header = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <div style={{ height: "100px" }}>
      <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex-items-center">
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
          <Link
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            to={"/"}
            className="max-w-[200px]"
          >
            <img src={Logo} alt=""></img>
          </Link>
          <nav
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className="hidden xl:flex gap-x-12 font-semibold"
          >
            <Link
              to={"/"}
              className="text-[#696c6d] hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="text-[#696c6d] hover:text-primary transition"
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className="text-[#696c6d] hover:text-primary transition"
            >
              Contact
            </Link>
            {/* <Link
              to={"/porfolio"}
              className="text-[#696c6d] hover:text-primary transition"
            >
              Portfolio
            </Link> */}
          </nav>
          <Socials />
          <MobileNav />
        </div>
      </header>
    </div>
  );
};

export default Header;
