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
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center py-6 gap-4 md:flex-row md:justify-between md:py-4">
              
              {/* Left Section: Logo + Links */}
              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                  <Image
                    src="/images/logow-01.png"
                    alt="Logo"
                    width={70}
                    height={35}
                    className="dark:hidden object-contain"
                  />
                </Link>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white text-sm md:text-base">
                  <Link href="/privacypolicy" className="hover:underline whitespace-nowrap">
                    Personvernerklæring
                  </Link>
                  <Link href="/terms" className="hover:underline whitespace-nowrap">
                    Brukervilkår
                  </Link>
                  <Link href="/awards" className="hover:underline whitespace-nowrap">
                    Prisvinnende
                  </Link>
                </div>
              </div>

              {/* Right Section: Social Links */}
              <div className="flex items-center gap-5">
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
