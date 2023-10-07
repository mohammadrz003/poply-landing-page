import { useRef, useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Section from "@/components/Section";
import Image from "@/components/Image";
import Button from "@/components/Button";
import Tagline from "@/components/Tagline";
import Arrows from "@/components/Arrows";

import { howItWorks } from "@/mocks/how-it-works";
import Heading from "@/components/Heading";

type HowItWorksProps = {};

const HowItWorks = ({}: HowItWorksProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const ref = useRef<any>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    ref.current?.go(index);
  };

  return (
    <Section className="lg:-mb-16">
      <div className="container">
        <Heading title="What Features AIFT Has?" />
        <Splide
          className="splide-custom"
          options={{
            type: "fade",
            rewind: true,
            pagination: false,
          }}
          hasTrack={false}
          ref={ref}
        >
          <SplideTrack>
            {howItWorks.map((item, index) => (
              <SplideSlide key={item.id}>
                <div className="lg:flex lg:flex-row-reverse lg:items-center">
                  <div className="">
                    <h2 className="h2 mb-4 lg:mb-6">{item.title}</h2>
                    <p className="body-2 mb-10 text-n-3">{item.text}</p>
                    <Arrows
                      className="my-10 lg:hidden"
                      prevClassName="mr-3"
                      onPrev={() => ref.current?.go("<")}
                      onNext={() => ref.current?.go(">")}
                    />
                  </div>
                  <div className="relative lg:w-[29.375rem] lg:flex-shrink-0 lg:mr-[7.125rem] xl:w-[34.375rem] xl:mr-40">
                    <div className="pt-0.25 pl-0.25 overflow-hidden bg-gradient-to-tl from-n-1/0 via-n-1/0 to-n-1/15 rounded-3xl">
                      <div className="flex justify-center items-center h-[30.5rem] bg-n-7 rounded-[1.4375rem] xl:h-[35.625rem]">
                        <Image
                          className="w-3/4 h-3/4 object-contain"
                          src={item.image}
                          width={550}
                          height={570}
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <div className="absolute -right-6 top-8 bottom-8 w-6 bg-[#1B1B2E] rounded-r-3xl"></div>
                    <div className="absolute -right-12 top-16 bottom-16 w-6 bg-[#1B1B2E]/50 rounded-r-3xl"></div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          <Arrows
            className="hidden justify-center mt-12 lg:flex lg:mt-15 xl:hidden"
            prevClassName="mr-3"
            onPrev={() => ref.current?.go("<")}
            onNext={() => ref.current?.go(">")}
          />
          <div className="hidden grid-cols-4 gap-6 mt-20 xl:grid">
            {howItWorks.map((item, index) => (
              <div
                className="group cursor-pointer"
                onClick={() => handleClick(index)}
                key={item.id}
              >
                <div
                  className={`h-[0.125rem] mb-10 transition-colors ${
                    index === activeIndex
                      ? "bg-[#D3F56E]"
                      : "bg-[#D9D9D9]/10 group-hover:bg-[#D9D9D9]/50"
                  }`}
                ></div>
                <div className="tagline mb-1 text-n-3">0{index + 1}.</div>
                <h2 className="mb-[0.625rem] text-2xl leading-8">
                  {item.title}
                </h2>
                <p
                  className={`body-2 text-n-3 line-clamp-3 transition-opacity ${
                    index !== activeIndex && "opacity-0"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Splide>
      </div>
    </Section>
  );
};

export default HowItWorks;
