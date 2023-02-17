import React from "react";
import useNav from "../../hooks/useNav.hook";
import StyledSection from "../StyledSection.component";
import NavBarLink from "./NavBarLink.component";
import MenuIcon from "../../assets/svg/menu.svg";
import CloseIcon from "../../assets/svg/arrow-right.svg";
import useAnchorNavigate from "../../hooks/useAnchorNavigate.hook";
import { motion, Variants } from "framer-motion";

const NavbarVariants: Variants = {
  hidden: {
    y: -100,
    transition: {
      duration: 0.1,
    },
  },

  visible: {
    y: 0,
    transition: {
      duration: 0.4,
      type: "keyframes",
      ease: "linear",
    },
  },
};

export default function Navbar() {
  const { navExpanded, openNav, closeNav } = useNav();
  const anchorNavigate = useAnchorNavigate();

  return (
    <StyledSection className=" sticky top-0 right-0 left-0 shadow-sm shadow-gray-400/10 z-[1000] bg-deep-blue-900 mb-8 md:mb-2 ">
      <motion.div
        variants={NavbarVariants}
        animate="visible"
        initial="hidden"
        className=" flex items-center py-2 h-20 md:h-20 "
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navExpanded && closeNav();
            anchorNavigate("/");
          }}
          className=" text-lg md:text-2xl flex gap-x-1  "
        >
          <span className=" font-bold ">Daniel</span>
          <span className=" font-normal ">Ugbeye</span>
        </a>

        {/* OPEN NAV BUTTON */}
        <button
          className={` ${
            !navExpanded ? " opacity-100 " : " opacity-0 pointer-events-none "
          } ml-auto md:hidden z-50 hover:bg-white/5 p-2 rounded-full transition-opacity duration-300 `}
          onClick={() => {
            openNav();
          }}
        >
          <img src={MenuIcon} alt="menu" className=" w-7 " />
        </button>

        <div
          className={` ${
            navExpanded ? " translate-x-0 " : " translate-x-[200%] "
          } fixed md:relative w-full max-w-[300px] md:w-fit md:max-w-none bg-deep-blue-900/60 backdrop-blur-md md:bg-transparent h-screen md:h-fit top-0 md:top-[unset] right-0 md:right-[unset] text-sm md:translate-x-0 transition-transform duration-[400ms] pt-[5rem] px-2 md:p-0 md:ml-auto m-0  `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* CLOSE NAV BUTTON */}
          <button
            className={` ${
              navExpanded ? " opacity-100 " : " opacity-0 pointer-events-none "
            } ml-auto absolute top-5 right-[2rem] mt- md:hidden z-50 hover:bg-white/5 p-2 rounded-full transition-opacity duration-300 `}
            onClick={() => {
              closeNav();
            }}
          >
            <img src={CloseIcon} alt="menu" className=" w-7 " />
          </button>

          <div className=" overflow-y-auto h-full p-[1rem] md:p-0 ">
            <div className=" flex flex-col md:flex-row md:items-center gap-x-4 gap-y-4  ">
              <NavBarLink
                className="  text-white/50 sm:text-white hover:bg-white/5 hover:text-white md:hover:text-white focus:bg-white/5 "
                to={"/"}
              >
                Home
              </NavBarLink>

              <NavBarLink
                className="  text-white/50 sm:text-white hover:bg-white/5 hover:text-white md:hover:text-white focus:bg-white/5 "
                to={"/#about"}
              >
                About
              </NavBarLink>

              <NavBarLink
                className="  text-white/50 sm:text-white hover:bg-white/5 hover:text-white md:hover:text-white focus:bg-white/5 "
                to={"/#skills"}
              >
                Skills
              </NavBarLink>

              <NavBarLink
                className="  text-white/50 sm:text-white hover:bg-white/5 hover:text-white md:hover:text-white focus:bg-white/5 "
                to={"/#services"}
              >
                Services
              </NavBarLink>

              <NavBarLink
                className="  text-white/50 sm:text-white hover:bg-white/5 hover:text-white md:hover:text-white focus:bg-white/5 "
                to={"/#projects"}
              >
                Projects
              </NavBarLink>

              <NavBarLink
                className=" bg-violet-light hover:bg-violet-light/70 focus:bg-violet-light/70 text-white  "
                to={"/#contact"}
              >
                Hire Me
              </NavBarLink>
            </div>
          </div>
        </div>
      </motion.div>
    </StyledSection>
  );
}
