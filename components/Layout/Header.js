import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import LogoVPN from "../../public/assets/Logo.svg";
import { useRouter } from "next/router";
import { FaHome, FaBloggerB } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import { TbZoomQuestion } from 'react-icons/tb';
const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  const router = useRouter();
  const activePath = useMemo(() => router.asPath, [router.asPath]);
  const navItems = [
    {
      label: "Home",
      path: '/',
      icon: <FaHome size={24} />
    },
    {
      label: "Tutorials",
      path: '/tutorials',
      icon: <MdLibraryBooks size={24} />
    },
    {
      label: "Interview Questions",
      path: '/interview',
      icon: <TbZoomQuestion size={24} />
    },
    {
      label: "Blog",
      path: '/blog',
      icon: <FaBloggerB size={24} />
    },
  ]
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <LogoVPN className="h-8" />
            <h1 className="font-semibold text-xl">Selenium Ninja</h1>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {navItems?.map(item => (
              <Link
                href={item.path}
                className={
                  "cursor-pointer animation-hover inline-block relative"

                }
              >
                <a className={`px-4 py-2 mx-2 ${activePath === item.path
                  ? " !text-orange-500 animation-active"
                  : " text-black-500 hover:text-orange-500 border-bottom-orange-500 a"}`}>{item.label}</a>
              </Link>
            ))}

            {/*  
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Blog
            </LinkScroll> */}
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <ButtonOutline>
              <a href="https://www.youtube.com/@seleniumninja2138" target={'_blank'}>Subscribe Us</a>
            </ButtonOutline>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="w-full flex justify-between items-start text-black-500">
            {navItems?.map((nav, index) => (
              <Link
                href={nav.path}
                passHref
                className={`
                
              `}
                key={nav + index}
              >
                <span className={`${activePath === nav.path
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent"} text-ellipsis whitespace-nowrap flex flex-col items-center text-xs mx-1 sm:mx-2 px-3 sm:px-4 py-2  border-t-2 transition-all `}>{nav.icon}
                  {nav.label.slice(0, 10)}</span>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
