import React from "react";
import { Link, NavLink } from "react-router-dom";
import StyledSection from "../StyledSection.component";

export default function Navbar() {
  return (
    <StyledSection className=" sticky top-0 right-0 left-0 shadow-sm shadow-gray-400/10 z-30 bg-deep-blue-900 mb-8 md:mb-2 ">
      <div className=" flex items-center py-2 h-20 md:h-28 ">
        <h3 className=" text-lg md:text-2xl flex gap-x-1  ">
          <span className=" font-bold ">Daniel</span>
          <span className=" font-normal ">Ugbeye</span>
        </h3>

        <div className=" hidden md:flex items-center text-sm ml-auto gap-x-4 ">
          <NavLink
            to={"/"}
            className={` flex items-center px-3 rounded-lg hover:bg-white/5 focus:bg-white/5 h-12 `}
          >
            Home
          </NavLink>

          <Link
            to={"/#about"}
            className={` flex items-center px-3 rounded-lg hover:bg-white/5 focus:bg-white/5 h-12 `}
          >
            About
          </Link>

          <Link
            to={"/#skills"}
            className={` flex items-center px-3 rounded-lg hover:bg-white/5 focus:bg-white/5 h-12 `}
          >
            Skills
          </Link>

          <Link
            to={"/#services"}
            className={` flex items-center px-3 rounded-lg hover:bg-white/5 focus:bg-white/5 h-12 `}
          >
            Services
          </Link>

          <Link
            to={"/#projects"}
            className={` flex items-center px-3 rounded-lg hover:bg-white/5 focus:bg-white/5 h-12 `}
          >
            Projects
          </Link>

          <Link
            to={"/#contact"}
            className={
              " flex items-center px-3 rounded-lg bg-violet-dark h-12 "
            }
          >
            Hire Me
          </Link>
        </div>
      </div>
    </StyledSection>
  );
}
