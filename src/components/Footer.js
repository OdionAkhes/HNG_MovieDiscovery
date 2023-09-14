/** @format */
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
        <a href="#" className="hover:text-gray-400 flex items-center space-x-2">
          <FontAwesomeIcon icon={faTwitter} />

        </a>
        <a href="#" className="hover:text-gray-400 flex items-center space-x-2">
          <FontAwesomeIcon icon={faFacebook} />

        </a>
        <a href="#" className="hover:text-gray-400 flex items-center space-x-2">
          <FontAwesomeIcon icon={faInstagram} />
     
        </a>
        <a href="#" className="hover:text-gray-400 flex items-center space-x-2">
          <FontAwesomeIcon icon={faYoutube} />
  
        </a>
      </div>

      <div className="flex flex-wrap justify-center mb-4 space-x-4">
        <a href="#" className="hover:text-gray-400">
          Conditions of Use
        </a>
        <a href="#" className="hover:text-gray-400">
          Privacy & Policy
        </a>
        <a href="#" className="hover:text-gray-400">
          Press Room
        </a>
      </div>

      <p className="mt-4">&copy; Moviebox by akhetuamhen odion</p>
    </footer>
  );
};

export default Footer;
