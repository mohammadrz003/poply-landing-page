import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Section from "@/components/Section";
import Tagline from "@/components/Tagline";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "@/components/Image";

import { testimonials } from "@/mocks/testimonials";
import Arrows from "@/components/Arrows";
import Heading from "@/components/Heading";

type TestimonialsProps = {};

const Testimonials = ({}: TestimonialsProps) => (
  <Section className="overflow-hidden">
    <div className="container relative z-2">
      <Heading title="Meet our Team" />
      <Splide
        className="splide-custom splide-visible"
        options={{
          mediaQuery: "min",
          gap: "1.5rem",
          breakpoints: {
            1024: {
              autoWidth: true,
            },
          },
          rewind: true,
          pagination: false,
        }}
        hasTrack={false}
      >
        <SplideTrack>
          {testimonials.map((item) => (
            <SplideSlide key={item.id}>
              <div className="relative flex h-full p-4 rounded-t-xl overflow-hidden lg:w-[46.125rem]">
                <div className="absolute top-0 left-0 right-0 bottom-[3.25rem] border border-n-4/50 rounded-3xl"></div>
                <div className="absolute inset-px rounded-t-[1.4375rem] overflow-hidden">
                  <div className="absolute -inset-0.25">
                    <Image
                      className="w-full h-full object-cover"
                      src={item.imageUrl}
                      width={739}
                      height={472}
                      alt={item.name}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-n-8/50 to-n-8/0"></div>
                <div className="hidden relative z-1 md:flex flex-col flex-1 pt-12 px-4 pb-16">
                  <div className="relative w-14 aspect-square mb-auto">
                    <Image
                      className="w-full h-full object-cover rounded-full"
                      src={item.logoUrl}
                      fill
                      sizes="100vw"
                      quality={100}
                      alt={item.name}
                    />
                  </div>
                  <div className="h5">{item.name}</div>
                  <div className="h5 text-n-4">{item.role}</div>
                </div>
                <div className="relative flex z-1 bg-conic-gradient p-0.25 rounded-2xl md:ml-auto">
                  <div className="flex flex-col items-start p-8 bg-n-8 rounded-[0.9375rem] md:w-[21.75rem]">
                    <div className="flex items-center mb-4 md:hidden gap-x-3">
                      <div className="relative w-12 aspect-square mb-auto">
                        <Image
                          className="w-full h-full object-cover rounded-full"
                          src={item.logoUrl}
                          fill
                          sizes="100vw"
                          quality={100}
                          alt={item.name}
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="text-sm">{item.name}</div>
                        <div className="text-xs text-n-4">{item.role}</div>
                      </div>
                    </div>
                    <p className="text-sm md:quote mb-8">{item.text}</p>
                    <Link
                      href={item.link}
                      target="_blank"
                      className="relative p-0.5 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-lg"
                    >
                      <span className="w-full h-full bg-gradient-to-br from-[#BDEE60] via-[#A6FF96] to-[#CFFF65] group-hover:from-[#CFFF65] group-hover:via-[#A6FF96] group-hover:to-[#BDEE60] absolute"></span>
                      <span className="relative px-4 py-2 transition-all ease-out bg-n-8 rounded-lg group-hover:bg-opacity-0 duration-400">
                        <span className="relative text-white group-hover:text-slate-900 text-sm">
                          GitHub
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
        <Arrows
          className="justify-center mt-12 md:mt-15 xl:mt-20"
          prevClassName="mr-8"
        />
      </Splide>
    </div>
  </Section>
);

export default Testimonials;
