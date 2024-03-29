import React, { useState, createContext, useEffect } from "react";

export const CursorContext = createContext();
const Cursor = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  const mobileViewportIsActive = window.innerWidth < 768;
  const [cursorBG, setCursorBG] = useState("default");
  useEffect(() => {
    if (!mobileViewportIsActive) {
      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", move);
      return () => {
        window.removeEventListener("mousemove", move);
      };
    } else {
      setCursorBG("none");
    }
  });

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColr: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      mixBlendMode: "difference",
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: "rgba(255,255,255,1)",
    },
  };
  const mouseEnterHandler = () => {
    setCursorBG("text");
  };
  const mouseLeaverHandler = () => {
    setCursorBG("default");
  };

  return (
    <CursorContext.Provider
      value={{
        cursorVariants,
        cursorBG,
        mouseEnterHandler,
        mouseLeaverHandler,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default Cursor;
