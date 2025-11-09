"use client";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Header = () => {
  const { data: session } = useSession();

  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) =>
    setOpenIndex((prev) => (prev === index ? -1 : index));

  const { theme, setTheme } = useTheme();

  // close navbar when a link is clicked (mobile)
  const handleLinkClick = () => {
    setNavbarOpen(false);
    setOpenIndex(-1);
  };

  // Desktop color logic
  const desktopLinkColor = () => {
    if (pathUrl === "/") {
      return sticky ? "" : "lg:text-white";
    }
    return sticky
      ? "lg:text-[#58c0c2] lg:hover:text-black"
      : "lg:text-dark lg:hover:text-[#58c0c2]";
  };

  return (
    <>
      <header
        className={`ud-header left-0 z-40 flex w-full items-center ${
          sticky
            ? "shadow-nav fixed z-[999] border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-dark/10 h-16 lg:h-20 lg:pl-28"
            : `absolute bg-transparent ${
                pathUrl === "/" ? "mt-12 lg:pl-28" : ""
              }`
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full pr-4 pl-4 ">
              <Link href="/" className="navbar-logo block w-full">
                {pathUrl !== "/" ? (
                  <>
                    <Image
                      src={`/images/logo/logow.png`}
                      alt="logo"
                      width={200}
                      height={40}
                      className="header-logo dark:hidden"
                    />
                    <Image
                      src={`/images/logow-01.png`}
                      alt="logo"
                      width={100}
                      height={20}
                      className="header-logo hidden dark:block"
                    />
                  </>
                ) : (
                  <>
                    {sticky ? (
                      <Image
                        src="/images/logo/logow.png"
                        alt="logo"
                        width={140}
                        height={28}
                        className="header-logo dark:hidden"
                      />
                    ) : (
                      <Image
                        src="/images/logow-01.png"
                        alt="logo"
                        width={80}
                        height={60}
                        className="header-logo dark:hidden"
                      />
                    )}

                    <Image
                      src={"/images/logo/logow-01.png"}
                      alt="logo"
                      width={200}
                      height={40}
                      className="header-logo hidden dark:block"
                    />
                  </>
                )}
              </Link>
            </div>

            <div className="flex w-full items-center justify-between px-4">
              <div className="ml-28">
                {/* Mobile toggle button */}
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-[#58c0c2] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? " top-[7px] rotate-45" : ""
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-white"
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? "opacity-0" : ""
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-white"
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? " top-[-8px] -rotate-45" : ""
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-white"
                    }`}
                  />
                </button>

                {/* Navbar collapse */}
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 
                  bg-white px-6 py-4 duration-300 
                  dark:border-body-color/20 dark:bg-dark-2 
                  lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                    {menuData.map((menuItem, index) =>
                      menuItem.path ? (
                        <li key={index} className="group relative ">
                          <Link
                            onClick={handleLinkClick}
                            scroll={false}
                            href={menuItem.path}
                            className={`ud-menu-scroll flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6
                              text-dark  dark:text-white
                              ${desktopLinkColor()}
                              ${pathUrl === menuItem?.path ? "text-[#58c0c2]" : ""}
                            `}
                          >
                            {menuItem.title}
                          </Link>
                        </li>
                      ) : (
                        <li className="submenu-item group relative" key={index}>
                          <button
                            onClick={() => handleSubmenu(index)}
                            className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6
                              text-dark dark:text-white
                              ${desktopLinkColor()}
                            `}
                          >
                            {menuItem.title}
                          </button>

                          <div
                            className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? "!-left-[25px]" : "hidden"
                            }`}
                          >
                            {menuItem?.submenu?.map(
                              (submenuItem: any, i: number) => (
                                <Link
                                  href={submenuItem.path}
                                  key={i}
                                  onClick={handleLinkClick}
                                  className={`block rounded px-4 py-[10px] text-sm ${
                                    pathUrl === submenuItem.path
                                      ? "text-primary"
                                      : "text-body-color dark:text-dark-6 dark:hover:text-[#58c0c2]"
                                  }`}
                                >
                                  {submenuItem.title}
                                </Link>
                              )
                            )}
                          </div>
                        </li>
                      )
                    )}
                  </ul>

                 {/* Mobile buttons */}
<div className="mt-4 lg:hidden">
  <Link
    href="https://www.innoscribe.online/"
    onClick={handleLinkClick}
    className="inline-block text-sm font-medium text-black border border-[#58c0c2] py-1.5 px-3 rounded-full bg-slate-50"
  >
    Registrer deg
  </Link>
</div>


                </nav>

                {/* Overlay for closing mobile menu */}
                {navbarOpen && (
                  <div
                    className="fixed inset-0 z-20 bg-black/30 lg:hidden"
                    onClick={handleLinkClick}
                  ></div>
                )}
              </div>

              {/* Right buttons (desktop) */}
              <div className="hidden items-center justify-end sm:flex lg:pr-0 gap-4">
                <Link
                  href="https://www.innoscribe.online/"
                  onClick={handleLinkClick}
                  className="text-base font-medium text-black mr-24 border border-[#58c0c2] py-2 px-4 rounded-full bg-slate-50"
                >
                  Registrer deg
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
