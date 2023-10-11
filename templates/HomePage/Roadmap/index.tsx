import Section from "@/components/Section";
import Tagline from "@/components/Tagline";
import Image from "@/components/Image";

import { roadmap } from "@/mocks/roadmap";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Link from "next/link";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { BsRobot } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { ImFilePicture } from "react-icons/im";
import { PiHandCoinsFill } from "react-icons/pi";

type RoadmapProps = {};

const Roadmap = ({}: RoadmapProps) => (
  <Section className="overflow-hidden">
    <div className="container md:pb-10 relative" id="our-roadmap">
      <div className="absolute top-[10%] lg:top-0 left-0 lg:left-[20%] w-72 lg:w-80 aspect-square rounded-tl-xl rounded-tr-full rounded-br-3xl rounded-bl-2xl blur-[100px] opacity-20 lg:opacity-20 css-blurry-gradient" />
      <div className="absolute top-[35%] -right-[20%] lg:top-[30%] lg:right-0 w-80 aspect-square rounded-tl-xl rounded-tr-full rounded-br-3xl rounded-bl-2xl blur-[100px] opacity-20 lg:opacity-20 css-blurry-gradient" />
      <div className="absolute bottom-[23%] left-0 w-80 aspect-square rounded-tl-xl rounded-tr-full rounded-br-3xl rounded-bl-2xl blur-[100px] opacity-20 lg:opacity-20 css-blurry-gradient" />
      <Heading title="Our Roadmap for Success" />
      <div className="w-full flex justify-center lg:justify-end relative">
        <div className="relative transform lg:-translate-x-14 lg:w-1/2 flex flex-col lg:flex-row items-center lg:pb-10">
          <div className="relative z-2 w-28 aspect-square rounded-full bg-gradient-to-r from-transparent from-25% via-green-600 via-65% to-lime-500 flex justify-center items-center">
            <div className="flex justify-center items-center w-[90px] aspect-square rounded-full bg-n-8">
              <div className="flex justify-center items-center w-[72px] aspect-square rounded-full bg-gradient-to-l from-transparent from-25% via-green-600 via-65% to-lime-500">
                <div className="flex flex-col items-center text-xs justify-center w-[70px] aspect-square rounded-full bg-n-8 transform translate-x-[1px]">
                  <span>Q4</span>
                  <span>2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1px] h-6 border-r-2 lg:w-15 lg:h-[1px] lg:border-r-0 lg:border-b-2 border-lime-500 border-dashed" />
          <div className="flex-1 flex flex-col items-start bg-gray-700 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-700 p-5">
            <div className="p-3 rounded-lg bg-gradient-to-b from-gray-700/40 to-transparent">
              <TbWorld className="text-main_color text-2xl" />
            </div>
            <h4 className="font-semibold mt-5">MVP product</h4>
            <p className="mt-3 text-sm text-slate-200 font-thin">
              While this MVP product represents an initial version of our NFT
              marketplace, it provides a solid foundation for us to gather
              valuable user feedback and refine our offering.
            </p>
          </div>
          <div className="w-[1px] h-15 lg:h-auto border-r-2 border-lime-500 border-dashed lg:absolute lg:left-14 lg:top-[calc(50%+36px)] lg:bottom-0" />
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-start relative">
        <div className="relative transform lg:translate-x-[58px] lg:w-1/2 flex flex-col lg:flex-row-reverse items-center lg:pb-10">
          <div className="-scale-x-100 relative z-2 w-28 aspect-square rounded-full bg-gradient-to-r from-transparent from-25% via-green-600 via-65% to-lime-500 flex justify-center items-center">
            <div className="flex justify-center items-center w-[90px] aspect-square rounded-full bg-n-8">
              <div className="flex justify-center items-center w-[72px] aspect-square rounded-full bg-gradient-to-l from-transparent from-25% via-green-600 via-65% to-lime-500">
                <div className="-scale-x-100 flex flex-col items-center text-xs justify-center w-[70px] aspect-square rounded-full bg-n-8 transform translate-x-[1px]">
                  <span>Q4</span>
                  <span>2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1px] h-6 border-r-2 lg:w-15 lg:h-[1px] lg:border-r-0 lg:border-b-2 border-lime-500 border-dashed" />
          <div className="flex-1 flex flex-col items-start lg:items-end bg-gray-700 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-700 p-5">
            <div className="p-3 rounded-lg bg-gradient-to-b from-gray-700/40 to-transparent">
              <BsRobot className="text-main_color text-2xl" />
            </div>
            <h4 className="font-semibold mt-5">AIFT</h4>
            <p className="mt-3 text-sm text-left lg:text-right text-slate-200 font-thin">
              By using AI generative art and a user-friendly interface, we make
              our platform more attractive for people interested in unique NFTs.
            </p>
          </div>
          <div className="hidden lg:block absolute right-14 bottom-[calc(50%+76px)] top-0 w-[1px] border-r-2 border-lime-500 border-dashed" />
          <div className="w-[1px] h-15 lg:h-auto border-r-2 border-lime-500 border-dashed lg:absolute lg:right-14 lg:top-[calc(50%+36px)] lg:bottom-0" />
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-end relative">
        <div className="relative transform lg:-translate-x-14 lg:w-1/2 flex flex-col lg:flex-row items-center lg:pb-10">
          <div className="relative z-2 w-28 aspect-square rounded-full bg-gradient-to-r from-transparent from-25% via-green-600 via-65% to-lime-500 flex justify-center items-center">
            <div className="flex justify-center items-center w-[90px] aspect-square rounded-full bg-n-8">
              <div className="flex justify-center items-center w-[72px] aspect-square rounded-full bg-gradient-to-l from-transparent from-25% via-green-600 via-65% to-lime-500">
                <div className="flex flex-col items-center text-xs justify-center w-[70px] aspect-square rounded-full bg-n-8 transform translate-x-[1px]">
                  <span>Q4</span>
                  <span>2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1px] h-6 border-r-2 lg:w-15 lg:h-[1px] lg:border-r-0 lg:border-b-2 border-lime-500 border-dashed" />
          <div className="flex-1 flex flex-col items-start bg-gray-700 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-700 p-5">
            <div className="p-3 rounded-lg bg-gradient-to-b from-gray-700/40 to-transparent">
              <ImFilePicture className="text-main_color text-2xl" />
            </div>
            <h4 className="font-semibold mt-5">Poply Native Collection</h4>
            <p className="mt-3 text-sm text-slate-200 font-thin">
              Our Native Collection is carefully curated to showcase the
              creativity, artistry, and innovation taking place within our
              vibrant community. These native NFTs capture the essence of our
              platform.
            </p>
          </div>
          <div className="hidden lg:block absolute left-14 bottom-[calc(50%+76px)] top-0 w-[1px] border-r-2 border-lime-500 border-dashed" />
          <div className="w-[1px] h-15 border-r-2 lg:h-auto border-lime-500 border-dashed lg:absolute lg:left-14 lg:top-[calc(50%+36px)] lg:bottom-0" />
        </div>
      </div>
      <div className="w-full flex just-center lg:justify-start relative">
        <div className="relative transform lg:translate-x-[58px] lg:w-1/2 flex flex-col lg:flex-row-reverse items-center pb-10">
          <div className="-scale-x-100 relative z-2 w-28 aspect-square rounded-full bg-gradient-to-r from-transparent from-25% via-green-600 via-65% to-lime-500 flex justify-center items-center">
            <div className="flex justify-center items-center w-[90px] aspect-square rounded-full bg-n-8">
              <div className="flex justify-center items-center w-[72px] aspect-square rounded-full bg-gradient-to-l from-transparent from-25% via-green-600 via-65% to-lime-500">
                <div className="-scale-x-100 flex flex-col items-center text-xs justify-center w-[70px] aspect-square rounded-full bg-n-8 transform translate-x-[1px]">
                  <span>Q4</span>
                  <span>2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1px] h-6 border-r-2 lg:border-r-2 lg:w-15 lg:h-[1px] lg:border-b-2 border-lime-500 border-dashed" />
          <div className="flex-1 flex flex-col items-start lg:items-end bg-gray-700 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-700 p-5">
            <div className="p-3 rounded-lg bg-gradient-to-b from-gray-700/40 to-transparent">
              <PiHandCoinsFill className="text-main_color text-2xl" />
            </div>
            <h4 className="font-semibold mt-5">NFT Distribution</h4>
            <p className="mt-3 text-sm text-left lg:text-right text-slate-200 font-thin">
              The launchpad feature facilitates fair and efficient NFT
              distribution, ensuring equitable access to newly launched
              collections for all users.
            </p>
          </div>
          <div className="hidden lg:block absolute right-14 bottom-[calc(50%+76px)] top-0 w-[1px] border-r-2 border-lime-500 border-dashed" />
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
