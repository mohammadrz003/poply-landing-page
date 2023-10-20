import { useEffect, useRef, useState } from "react";
import Section from "@/components/Section";
import { toast } from "react-toastify";
import Image from "next/image";
import { PiArrowUpRightBold } from "react-icons/pi";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const parallaxRef = useRef<any>(null);

  return (
    <Section
      className="pt-12 pb-20 overflow-hidden sm:pt-[6rem] sm:pb-40 lg:pt-[6rem] lg:pb-[13.8rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <Image
        src="/images/hero/hero-background.svg"
        alt=""
        fill
        className="object-cover opacity-60"
      />
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto mb-[3.875rem] text-center md:mb-20 lg:mb-[6.25rem]">
          <h1 className="mb-6 h1">
            Poply, The Community Based NFT Marketplace
          </h1>
          <p className="max-w-3xl mx-auto mb-6 body-1 text-n-2 lg:mb-8">
            combining cutting-edge AI technology with the power of blockchain to
            unlock new possibilities in the NFT ecosystem
          </p>
          <button
            onClick={() => toast.info("Coming soon!")}
            className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition-all duration-500 rounded-lg hover:scale-105"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#BDEE60] rounded-lg blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#A6FF96] rounded-lg blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#CFFF65] rounded-lg blur-md"></span>
            </span>
            <span className="relative flex items-center gap-x-3">
              <span className="text-slate-900">Join Waitlist</span>{" "}
              <PiArrowUpRightBold className="text-slate-900" />
            </span>
          </button>
        </div>
      </div>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block"></div>
      <svg
        className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block"
        width="11"
        height="11"
        fill="none"
      >
        <path
          d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
          fill="#ada8c4"
        />
      </svg>
      <svg
        className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block"
        width="11"
        height="11"
        fill="none"
      >
        <path
          d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
          fill="#ada8c4"
        />
      </svg>
    </Section>
  );
};

export default Hero;
