import React, { useContext } from "react";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";
import { CursorContext } from "../context/CursorContext";
const Socials = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaverHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4">
        <li>
          <a href="http://www.facebook.com" target="_blank" rel="norefferer">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="http://www.twitter.com" target="_blank" rel="norefferer">
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="http://www.pininterest.com" target="_blank" rel="norefferer">
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href="http://www.instagram.com" target="_blank" rel="norefferer">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="http://www.youtube.com" target="_blank" rel="norefferer">
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
