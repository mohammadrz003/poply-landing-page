import { BsCheckCircleFill } from "react-icons/bs";
import Section from "@/components/Section";
import Button from "@/components/Button";

import { text, content, apps } from "@/mocks/collaboration";
import Image from "next/image";
import Link from "next/link";

type CollaborationProps = {};

const Collaboration = ({}: CollaborationProps) => {
  return (
    <Section>
      <div className="container">
        <div className="flex md:justify-center text-[28px] lg:text-5xl font-bold">
          <h3 className="leading-normal">
            <span className="text-stroke text-[#0E0C15] tracking-wider">
              Realize
            </span>{" "}
            Your Idea Easily
          </h3>
        </div>
        <div className="flex flex-col-reverse mt-5 md:flex-row 2xl:mt-10">
          <div className="w-full mt-5 2xl:mt-0 md:w-1/2 flex justify-center items-center relative">
            <div className="w-[100%] md:w-[100%] lg:w-[75%] relative aspect-square">
              <Image
                src="/images/collaboration/nft-chain.png"
                alt="nft chain"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="-rotate-[10deg]"
              />
            </div>
            <Image
              src="/images/collaboration/up-arrow.png"
              alt=""
              width={256}
              height={256}
              className="-scale-x-100 w-[21%] md:w-16 md:rotate-[25deg] left-0 -top-[3%] rotate-[32deg] 2xl:w-32 h-auto 2xl:rotate-[25deg] absolute md:scale-x-100 md:left-auto md:top-auto md:hidden md:bottom-[3%] md:-right-[5%] 2xl:bottom-[12%] 2xl:-right-[3%]"
            />
          </div>
          <div className="flex flex-col justify-center items-start w-full md:w-1/2">
            <h3 className="text-main_color mt-3 2xl:mt-10 text-base md:text-sm lg:text-lg">
              With just a simple prompt, our native AI API transforms ideas into
              stunning visual NFTs.
            </h3>
            <p className="text-sm mt-5 md:text-xs lg:text-base 2xl:mt-9 leading-relaxed">
              Being an artist is not easy! but what if you are a good prompt
              writer :)
              <br />
              our AIFT (AI-Generated Image-to-NFT Feature) is here to help you
              with generating eye-chatching arts in not time. this is
              Poply&apos;s cutting-edge innovation that empowers users to
              effortlessly create and mint AI-crafted art.
            </p>
            <Link
              href="https://docs.poply.xyz/AIFT"
              target="_blank"
              className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg group hover:scale-105 transition-all duration-500 mt-6 md:text-xs lg:text-base"
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#BDEE60] rounded-lg blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#A6FF96] rounded-lg blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#CFFF65] rounded-lg blur-md"></span>
              </span>
              <span className="relative flex items-center">
                <span className="text-slate-900">Explore More</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
