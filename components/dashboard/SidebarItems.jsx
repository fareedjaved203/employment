"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BiSolidDashboard } from "react-icons/bi";
import { MdPersonSearch } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoMdHelpCircle } from "react-icons/io";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("dashboard");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="flex-1 px-2 py-4 bg-white">
      <Link
        href="/"
        className={`flex items-center justify-start font-bold px-4 py-2 text-lightGray rounded-md py-3 my-4 mx-4 hover:bg-pinkBackground hover:text-pinkColor focus:bg-pinkBackground focus:text-pinkColor ${
          activeLink === "dashboard" ? "bg-pinkBackground text-pinkColor" : ""
        }`}
        onClick={() => handleLinkClick("dashboard")}
      >
        <BiSolidDashboard className="text-xl mr-3" />
        Dashboard
      </Link>
      <Link
        href="/job-seekers"
        className={`flex items-center justify-start font-bold px-4 py-2 text-lightGray rounded-md py-3 my-4 mx-4 hover:bg-pinkBackground hover:text-pinkColor focus:bg-pinkBackground focus:text-pinkColor ${
          activeLink === "jobSeekers" ? "bg-pinkBackground text-pinkColor" : ""
        }`}
        onClick={() => handleLinkClick("jobSeekers")}
      >
        <MdPersonSearch className="text-xl mr-3" />
        Job Seekers
      </Link>
      <Link
        href="/sponsors"
        className={`flex items-center justify-start px-4 font-bold py-2 text-lightGray rounded-md py-3 my-4 mx-4 hover:bg-pinkBackground hover:text-pinkColor focus:bg-pinkBackground focus:text-pinkColor ${
          activeLink === "sponsors" ? "bg-pinkBackground text-pinkColor" : ""
        }`}
        onClick={() => handleLinkClick("sponsors")}
      >
        <FaHandshakeSimple className="text-xl mr-3" />
        Sponsors
      </Link>
      <hr className="mx-4" />
      <Link
        href="/"
        className={`text-md flex items-center justify-start font-bold px-4 py-2 text-lightGray rounded-md py-3 my-4 mx-4 hover:bg-pinkBackground hover:text-pinkColor focus:bg-pinkBackground focus:text-pinkColor ${
          activeLink === "help" ? "bg-pinkBackground text-pinkColor" : ""
        }`}
        onClick={() => handleLinkClick("help")}
      >
        <IoMdHelpCircle className="text-xl mr-3" />
        Help
      </Link>
    </nav>
  );
};

export default Sidebar;
