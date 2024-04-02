import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import FooterNav from "./FooterNav";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import {
  aboutZomato,
  forRestaurants,
  learnMore,
  zomaverse,
} from "../../data/footerData";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] pt-8">
      <div className="w-10/12 mx-auto">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-5xl font-bold italic ">zomato</h1>
          <div className="w-4/12 md:w-3/12 flex gap-3">
            <div className="w-1/2 flex justify-between items-center border border-gray-500 rounded-md p-2">
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png"
                alt=""
                srcset=""
                className="w-3/12"
              />
              <p>India</p>
              <IoIosArrowDown />
            </div>
            <div className="w-1/2 flex justify-between items-center border border-gray-500 rounded-md p-2">
              <CiGlobe size={24} />
              <p>Language</p>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <div className={`footer-navs-wrapper grid grid-cols-5 my-5`}>
          <FooterNav title={aboutZomato.title} navs={aboutZomato.navs} />
          <FooterNav title={zomaverse.title} navs={zomaverse.navs} />
          <FooterNav title={forRestaurants.title} navs={forRestaurants.navs} />
          <FooterNav title={learnMore.title} navs={learnMore.navs} />
          <div className="socialLinks ">
            <h3 className="font-semibold">SOCIAL LINKS</h3>
            <ul className="*:w-6 *:h-6 *:rounded-full *:bg-gray-600 *:flex *:justify-center *:items-center mt-1 text-white flex gap-1">
              <li className="">
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="">
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li className="">
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li className="">
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li className="">
                <a href="#">
                  <AiOutlineYoutube />
                </a>
              </li>
            </ul>
            <div className="app-link mt-4 w-7/12 flex flex-col gap-3">
              <a href="#">
                <img
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                  alt="Google Play"
                />
              </a>
              <a href="#">
                <img
                  src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                  alt="App Store"
                />
              </a>
            </div>
          </div>
        </div>
        <hr className="text-black" />

        <div className="copy-rights text-center my-2">
          Cloned by Saiful Islam 💖 | Just for learning Purposes 💻.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
