import { useEffect, useRef, useState } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Generating from "@/components/Generating";
import Notification from "@/components/Notification";
import Logos from "@/components/Logos";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const parallaxRef = useRef<any>(null);

  return (
    <Section
      className="-mt-[4.75rem] pt-[8.25rem] pb-4 overflow-hidden md:pt-[9.75rem] md:pb-[4.8rem] lg:-mt-[5.25rem] lg:-mb-40 lg:pt-[12.25rem] lg:pb-[13.8rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto mb-[3.875rem] text-center md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            <span className="inline-block relative">
              Poply
              <Image
                className="absolute top-full left-0 w-full xl:-mt-2"
                src="/images/curve.png"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
            , The Community Based NFT Marketplace
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            combining cutting-edge AI technology with the power of blockchain to
            unlock new possibilities in the NFT ecosystem
          </p>
          <Button href="/waitlist" white>
            Join Waitlist
          </Button>
        </div>
        <div className="relative z-10 w-full aspect-[740/436] max-w-[23.25rem] mx-auto md:max-w-5xl">
          <Image
            src="/images/hero/hero-preview.png"
            alt={"Hero preview"}
            fill={true}
            quality={100}
            sizes="100vw"
            className={`w-full`}
          />
        </div>
        {/* <Logos className="hidden relative z-10 mt-20 lg:block" /> */}
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
