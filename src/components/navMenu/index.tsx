"use client";
import Link from "next/link";
import { Close, GameLogo, MenuIcon } from "../../../public/icons";
import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "@/useWindowDimensions";

export function NavMenu() {
  const [closeMenu, setCloseMenu] = useState(false);
  const { width } = useWindowDimensions();

  const handleOpenMenu = () => {
    setCloseMenu(!closeMenu);
  };

  if (closeMenu && width !== undefined && width >= 1024) {
    setCloseMenu(false);
  }
  return (
    <>
      <header className="sticky shadow-md min-h-20 inset-0 z-50 flex w-full  bg-gradient-to-br from-LIGTH-BLUE/90 to-white/90 backdrop-blur-md text-BLUE-2">
        <div className="w-full flex-wrap items-center justify-between lg:flex ">
          <div className="m-2 flex items-center justify-between ">
            <GameLogo size={50} />
            <button
              className="flex items-center rounded px-3 py-2 hover:border-white lg:hidden"
              onClick={() => handleOpenMenu()}
            >
              {closeMenu ? <MenuIcon size={32} /> : <Close size={32} />}
            </button>
          </div>
          <nav
            className={`${
              closeMenu ? "hidden " : ""
            } lg:mr-32 mb-2 lg:mb-0 lg:mt-6 lg:items-end lg:divide-x-2`}
          >
            <Link
              href={"#"}
              className="group relative block px-2 text-end font-semibold lg:inline-block "
            >
              Home
              <span className="lg:flex hidden absolute -bottom-0 left-0 h-1 w-0 bg-white/10 duration-300 group-hover:w-full group-hover:transition-all"></span>
            </Link>

            <Link
              href={"#"}
              className="group relative block px-2 text-end font-semibold lg:inline-block "
            >
              About
              <span className="lg:flex hidden absolute -bottom-0 left-0 h-1 w-0 bg-white/10 duration-300 group-hover:w-full group-hover:transition-all"></span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
