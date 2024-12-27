import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import HyperText from "./ui/hyper-text";

const NavBar = () => {
  const [btnDisplay, setBtnDisplay] = useState(false);
  const toggleNav = () => {
    console.log("toggleNav");
    setBtnDisplay(!btnDisplay);
  };

  return (
    <div className="z-50 fixed w-full h-min flex items-center md:justify-between px-10 py-5">
      {/* gradient shadow */}
      {/* <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/70 via-transparent to-transparent z-40"></div> */}
      <a href="/" className="flex items-center z-50">
        <img
          src="src/assets/RedCraft_icon.png"
          alt="RedCraft Icon"
          className="h-14 w-auto mr-2"
        />
        <span className="text-white font-StylishBold text-xl   md:text-4xl tracking-widest">
          <HyperText as={"p"} duration={2000} className=" font-StylishBold">
            Redcraft
          </HyperText>
        </span>
      </a>

      <div className="flex-grow px-2 md:px-6">
        <hr className="border-t border w-full" />
      </div>

      <button
        className="flex items-center justify-center p-2 text-white text-4xl font-extrabold md:hidden z-50"
        onClick={toggleNav}
      >
        {btnDisplay ? <BiX /> : <BiMenu />}
      </button>

      <ul
        className={`${
          btnDisplay ? "flex" : "hidden"
        } flex-col gap-2 absolute top-full right-4 w-2/4
        font-semibold text-white text-xl z-50 
        md:flex md:flex-row md:gap-10 md:relative md:w-fit
        animate-rectBackwards`}
      >
        <NavBtn btnName="Home" target="#home_sec" />
        <NavBtn btnName="Projects" target="#showcase_sec" />
        <NavBtn btnName="About" target="#skills_sec" />
        <NavBtn btnName="Contact" target="#contact_sec" />
      </ul>
    </div>
  );
};

interface NavBtnProps {
  btnName: string;
  target: string;
}

const NavBtn = ({ btnName, target }: NavBtnProps) => (
  <a href={target} className="nav-btn">
    <li className="block transform skew-x-12">{btnName}</li>
  </a>
);

export default NavBar;
