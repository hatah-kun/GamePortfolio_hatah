import {useState, useEffect} from "react";
import {BiMenu} from "react-icons/bi";
import {BiX} from "react-icons/bi";
import HyperText from "./ui/hyper-text";
import ImageAssets from "./AssetContainer";

const NavBar = () => {

    const [btnDisplay, setBtnDisplay] = useState(false);

    const [currentSection, setCurrentSection] = useState("home_sec");
    const toggleNav = () => {
        setBtnDisplay(!btnDisplay);
    };

    // effect to handle scroll and update current section
    useEffect(() => {
        const handleScroll = () => {

            // check if #intro_sec is in view
            const intro = document.getElementById("home_sec");

            if (intro) {
                const rect = intro.getBoundingClientRect();
                if (rect.bottom > 0) {
                    setCurrentSection("home_sec");
                } else {
                    setCurrentSection("other");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <div className="z-50 fixed w-full h-min flex items-center md:justify-between px-10 py-5">

            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-transparent z-40"></div>
            <a href="/" className="flex items-center z-50">
                <img
                    src={ImageAssets.Other.logo}
                    alt="Icon"
                    className="h-14 w-auto mr-2"
                />
                <span className="hidden md:block text-white font-StylishBold text-xl md:text-4xl tracking-widest">
                  <HyperText
                      as={"p"}
                      startOnView={false}
                      duration={1000}
                      className=" font-Gemsbuck_bold"
                  > RedCraft
                  </HyperText>
                </span>
            </a>

            <div className="flex-grow px-2 md:px-6">
                <hr className="border-t border w-full"/>
            </div>

            {currentSection !== "home_sec" && (
                <button
                    className="flex items-center justify-center p-2 text-white text-4xl font-extrabold md:hidden z-50"
                    onClick={toggleNav}
                >
                    {btnDisplay ? <BiX/> : <BiMenu/>}
                </button>
            )}

            {currentSection !== "home_sec" && (
                <ul
                    className={`${
                        btnDisplay ? "flex" : "hidden"
                    } flex-col gap-2 absolute top-full right-4 w-2/4
          font-semibold text-white text-xl z-50 
          md:flex md:flex-row md:gap-10 md:relative md:w-fit
          animate-rectBackwards`}
                >
                    <NavBtn btnName="Home" target="#home_sec" onClick={toggleNav}/>
                    <NavBtn btnName="Projects" target="#showcase_sec" onClick={toggleNav}/>
                    <NavBtn btnName="About" target="#skills_sec" onClick={toggleNav}/>
                    <NavBtn btnName="Contact" target="#contact_sec" onClick={toggleNav}/>
                </ul>
            )}
        </div>
    );
}

interface NavBtnProps {
    btnName: string;
    target: string;
    onClick?: () => void;
}

const NavBtn = ({btnName, target, onClick}: NavBtnProps) => (
    <a href={target} className="nav-btn" onClick={onClick}>
        <li className="block transform skew-x-12">{btnName}</li>
    </a>
);

export default NavBar;
