import { useRef, useState } from "react";
import Link from "next/link";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Image from "next/image";
import { default as ImageComponent } from "@/components/Image";

import { benefits } from "@/mocks/benefits";

type BenefitsProps = {};

const Benefits = ({}: BenefitsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const ref = useRef<any>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    ref.current?.go(index);
  };

  return (
    <Section className="">
      <div className="container relative z-2">
        <div className="relative -mt-32 sm:-mt-48 lg:-mt-80 z-10 w-full aspect-[740/436]">
          <ImageComponent
            src="/images/hero/hero-preview.png"
            alt={"Hero preview"}
            fill={true}
            quality={100}
            sizes="100vw"
            className={`w-full`}
          />
        </div>
        <Heading
          className="md:max-w-md lg:max-w-2xl mt-20"
          title="Discover Our Best Features"
        />
        <Splide
          className="splide-visible max-w-[24rem] md:max-w-none"
          options={{
            mediaQuery: "min",
            pagination: false,
            arrows: false,
            gap: "1.5rem",
            breakpoints: {
              768: {
                autoWidth: "true",
              },
            },
          }}
          onMoved={(e, newIndex) => {
            setActiveIndex(newIndex);
          }}
          hasTrack={false}
          ref={ref}
        >
          <SplideTrack>
            {benefits.map((item, index) => (
              <SplideSlide key={item.id}>
                <div className="block relative bg-no-repeat md:max-w-[24rem]">
                  <div className="relative aspect-square z-2 flex flex-col pointer-events-none rounded-[20px] overflow-hidden">
                    <Image
                      src={item.backgroundUrl}
                      alt=""
                      fill={true}
                      sizes="(min-width: 768px) 50vw, (min-width: 1200px) 33vw, 100vw"
                      className="absolute inset-0 z-1"
                    />
                    <div className="px-7 py-4 relative z-2 flex flex-col justify-between h-full bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent">
                      <div>
                        <h5 className="mb-5 font-bold text-3xl">
                          0{index + 1}
                        </h5>
                        <h5 className="text-3xl mb-5 font-bold">
                          {item.title}
                        </h5>
                      </div>
                      <p className={`body-2 mb-6 font-normal text-white`}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                  {item.light && (
                    <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none"></div>
                  )}
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
        <div className="flex mt-12 -mx-2 md:mt-15 lg:justify-center xl:mt-20">
          {benefits.map((item, index) => (
            <button
              className={`relative h-2.5 mx-2 rounded-full ${
                index === activeIndex ? "bg-main_color w-5" : "bg-white w-2.5"
              }`}
              onClick={() => handleClick(index)}
              key={item.id}
            ></button>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
