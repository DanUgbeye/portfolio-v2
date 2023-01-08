import React from "react";
import { Link, NavLink } from "react-router-dom";
import useNav from "../../hooks/useNav.hook";
import StyledSection from "../StyledSection.component";
import AnchorLink from "./AnchorLink.component";
import MenuIcon from "../../assets/svg/menu.svg";
import CloseIcon from "../../assets/svg/arrow-right.svg";
import NavBarLink from "./NavBarLink.component";

export default function Navbar() {
  const { navExpanded, openNav, closeNav } = useNav();

  return (
    <StyledSection className=" sticky top-0 right-0 left-0 shadow-sm shadow-gray-400/10 z-30 bg-deep-blue-900 mb-8 md:mb-2 ">
      <div className=" flex items-center py-2 h-20 md:h-28 ">
        <h3 className=" text-lg md:text-2xl flex gap-x-1  ">
          <span className=" font-bold ">Daniel</span>
          <span className=" font-normal ">Ugbeye</span>
        </h3>

        {/* OPEN NAV BUTTON */}
        <button
          className={` ${
            navExpanded && "hidden"
          } ml-auto md:hidden z-50 hover:bg-white/5 p-2 rounded-full `}
          onClick={() => {
            openNav();
          }}
        >
          <img src={MenuIcon} alt="menu" className=" w-7 " />
        </button>

        <div
          className={` ${
            navExpanded ? " translate-x-0 " : " translate-x-[200%] "
          } fixed md:relative w-full max-w-[300px] md:w-fit md:max-w-none bg-deep-blue-900/50 backdrop-blur-md md:bg-transparent h-screen md:h-fit top-0 md:top-[unset] right-0 md:right-[unset] text-sm ml-auto overflow-y-auto md:overflow-none md:translate-x-0 transition-transform duration-[400ms] `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* CLOSE NAV BUTTON */}
          <button
            className={` ${
              !navExpanded && "hidden"
            } ml-auto absolute top-5 right-[2rem] mt- md:hidden z-50 hover:bg-white/5 p-2 rounded-full `}
            onClick={() => {
              closeNav();
            }}
          >
            <img src={CloseIcon} alt="menu" className=" w-7 " />
          </button>

          <div className=" py-[5rem] px-[1rem] md:p-0 flex flex-col md:flex-row md:items-center gap-x-4 gap-y-4  ">
            <NavBarLink to={"/"}>Home</NavBarLink>

            <NavBarLink to={"/#about"}>About</NavBarLink>

            <NavBarLink to={"/#skills"}>Skills</NavBarLink>

            <NavBarLink to={"/#services"}>Services</NavBarLink>

            <NavBarLink to={"/#projects"}>Projects</NavBarLink>

            <NavBarLink
              className=" bg-violet-light hover:bg-violet-light/80 text-white "
              to={"/#contact"}
            >
              Hire Me
            </NavBarLink>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
