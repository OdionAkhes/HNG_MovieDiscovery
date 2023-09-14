/** @format */
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-black p-4 flex flex-col items-center">
      <div className="mb-4 flex space-x-4">
        <Link
          to="/twitter"
          className="hover:text-gray-400 flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faTwitter} />
 
        </Link>
        <Link
          to="/facebook"
          className="hover:text-gray-400 flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faFacebook} />

        </Link>
        <Link
          to="/instagram"
          className="hover:text-gray-400 flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faInstagram} />

        </Link>
        <Link
          to="/youtube"
          className="hover:text-gray-400 flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faYoutube} />
     
        </Link>
      </div>

      <div className="flex flex-wrap justify-center mb-4 space-x-4">
        <Link to="/conditions-of-use" className="hover:text-gray-400">
          Conditions of Use
        </Link>
        <Link to="/privacy-policy" className="hover:text-gray-400">
          Privacy & Policy
        </Link>
        <Link to="/press-room" className="hover:text-gray-400">
          Press Room
        </Link>
      </div>

      <p className="mt-4">&copy; Moviebox by akhetuamhen odion</p>
    </footer>
  );
};

export default Footer;
