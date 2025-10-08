"use client";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Fade duration={2000}>
        <footer className="relative z-10 bg-[#58c0c2]">
          <div className="container">
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-between py-3 md:py-4 gap-4 md:gap-0">
              
              {/* Left Section: Logo + Links */}
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8">
                {/* Logo */}
                <Link href="/">
                  <Image
                    src="/images/logow-01.png"
                    alt="Logo"
                    width={70}
                    height={35}
                    className="dark:hidden object-contain"
                  />
                </Link>

                {/* Links */}
                <div className="flex gap-6 text-white text-sm md:text-base">
                  <Link href="/privacypolicy" className="hover:underline">
                    Privacy Policy
                  </Link>
                  <Link href="/awards" className="hover:underline">
                    Awards
                  </Link>
                </div>
              </div>

              {/* Right Section: Social Links */}
              <div className="flex items-center gap-5 lg:pr-24">
                <Link
                  href="https://www.instagram.com/innoscribe.no"
                  target="_blank"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <FaInstagram size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/innoscribe/"
                  target="_blank"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <FaLinkedin size={20} />
                </Link>
                
              </div>
            </div>
          </div>

          {/* Background Shapes */}
          <div>
            <span className="absolute left-0 top-0 z-[-1]">
              <Image src="/images/footer/shape-1.svg" alt="shape" fill />
            </span>
            <span className="absolute bottom-0 right-0 z-[-1]">
              <Image src="/images/footer/shape-3.svg" alt="shape" fill />
            </span>
          </div>
        </footer>
      </Fade>
    </>
  );
};

export default Footer;
