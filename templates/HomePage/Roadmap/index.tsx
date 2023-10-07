import Section from "@/components/Section";
import Tagline from "@/components/Tagline";
import Image from "@/components/Image";

import { roadmap } from "@/mocks/roadmap";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Link from "next/link";

type RoadmapProps = {};

const Roadmap = ({}: RoadmapProps) => (
  <Section className="overflow-hidden">
    <div className="container md:pb-10" id="our-roadmap">
      <Heading title="Our Roadmap for Success" />
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item, index) => (
          <div
            className={`md:flex ${
              index % 2 !== 0 ? "md:translate-y-[7rem]" : ""
            } p-0.25 rounded-[2.5rem] ${
              item.colorful ? "bg-conic-gradient" : "bg-n-6"
            }`}
            key={item.id}
          >
            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
              <div className="absolute top-0 left-0 max-w-full">
                <Image
                  className="w-full"
                  src="/images/grid.png"
                  width={550}
                  height={550}
                  alt="Grid"
                />
              </div>
              <div className="relative z-1">
                <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                  {item.date}
                  <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                    <Image
                      className="mr-2.5"
                      src={
                        item.status === "done"
                          ? "/images/icons/check.svg"
                          : "/images/icons/loading-01.svg"
                      }
                      width={16}
                      height={16}
                      alt={item.status === "done" ? "Done" : "In progress"}
                    />
                    <div className="tagline">
                      {item.status === "done" ? "Done" : "In progress"}
                    </div>
                  </div>
                </div>
                <div className="mb-8 md:mb-20">
                  <div className="flex justify-center -my-10 -mx-15">
                    <Image
                      className="w-1/2 mx-auto py-10 md:py-0"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                </div>
                <h4 className="h4 mb-4">{item.title}</h4>
                <p className="body-2 text-n-4">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
            <Image
              className="w-full"
              src="/images/gradient.png"
              width={942}
              height={942}
              alt="Gradient"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Link
          href="https://docs.poply.xyz/Roadmap"
          target="_blank"
          className="hidden relative p-0.5 lg:inline-flex items-center justify-center font-semibold overflow-hidden group rounded-lg"
        >
          <span className="w-full h-full bg-gradient-to-br from-[#BDEE60] via-[#A6FF96] to-[#CFFF65] group-hover:from-[#CFFF65] group-hover:via-[#A6FF96] group-hover:to-[#BDEE60] absolute"></span>
          <span className="relative px-4 py-2 transition-all ease-out bg-n-8 rounded-lg group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white group-hover:text-slate-900 text-sm">
              Our Roadmap
            </span>
          </span>
        </Link>
      </div>
    </div>
  </Section>
);

export default Roadmap;
