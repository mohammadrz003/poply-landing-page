import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "../Button";
import Logo from "../Logo";
import Image from "../Image";

import { navigation } from "@/constants/navigation";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = () => {
    enablePageScroll();
    setOpenNavigation(false);
  };

  useEffect(() => {
    enablePageScroll();
    setOpenNavigation(false);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full ${
        openNavigation ? "bg-n-8" : " bg-n-8/90 backdrop-blur-sm"
      } border-b border-n-6 lg:bg-n-8/70 lg:backdrop-blur-sm`}
    >
      <div className="flex items-center h-[4.75rem] px-5 lg:h-[5.25rem] lg:px-7.5 xl:px-10">
        <Logo className="xl:mr-8" />
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4.8125rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                className={`block relative text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-7`}
                href={item.url}
                onClick={() => item.url.startsWith(pathname) && handleClick()}
                key={item.id}
                target={item.newWindow ? "_blank" : "_self"}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="absolute inset-0 pointer-events-none lg:hidden">
            <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
              <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
            <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
            <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
            <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
            <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
          </div>
        </nav>

        <Link
          href="https://app.poply.xyz"
          target="_blank"
          className="hidden relative p-0.5 lg:inline-flex items-center justify-center font-semibold overflow-hidden group rounded-lg"
        >
          <span className="w-full h-full bg-gradient-to-br from-[#BDEE60] via-[#A6FF96] to-[#CFFF65] group-hover:from-[#CFFF65] group-hover:via-[#A6FF96] group-hover:to-[#BDEE60] absolute"></span>
          <span className="relative px-4 py-2 transition-all ease-out bg-n-8 rounded-lg group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white group-hover:text-slate-900 text-sm">
              Launch App
            </span>
          </span>
        </Link>
        <Button
          className="ml-auto lg:hidden"
          onClick={toggleNavigation}
          px="px-3"
        >
          <svg
            className="overflow-visible"
            width="20"
            height="12"
            viewBox="0 0 20 12"
          >
            <rect
              className="transition-all origin-center"
              y={openNavigation ? "5" : "0"}
              width="20"
              height="2"
              rx="1"
              fill="white"
              transform={`rotate(${openNavigation ? "45" : "0"})`}
            />
            <rect
              className="transition-all origin-center"
              y={openNavigation ? "5" : "10"}
              width="20"
              height="2"
              rx="1"
              fill="white"
              transform={`rotate(${openNavigation ? "-45" : "0"})`}
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Header;
