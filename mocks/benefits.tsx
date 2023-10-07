import { MdStoreMallDirectory } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { BsFillPeopleFill } from "react-icons/bs";

export const benefits = [
  {
    id: "0",
    title: "Community-Centric",
    text: "Our platform will prioritize building a vibrant community of artists, collectors, and enthusiasts, fostering engagement and interaction within the marketplace.",
    backgroundUrl: "/images/benefits/grainy-1.png",
    icon: (
      <MdStoreMallDirectory
        style={{ color: "#000000", width: "20px", height: "20px" }}
      />
    ),
    color: "#000000",
    light: true,
  },
  {
    id: "1",
    title: "AI-ART",
    text: "allows users to easily create unique digital art using AI algorithms with just a prompt. These AI-generated artworks can be minted as an AI collection on Poply.",
    backgroundUrl: "/images/benefits/grainy-2.png",
    icon: (
      <FaRobot style={{ color: "#000000", width: "20px", height: "20px" }} />
    ),
    color: "#000000",
  },
  {
    id: "2",
    title: "Artist Collaboration",
    text: "We will actively collaborate with artists, ensuring that their creative expressions are respected while enhancing their exposure in the NFT space.",
    backgroundUrl: "/images/benefits/grainy-3.png",
    icon: (
      <HiMiniRocketLaunch
        style={{ color: "#000000", width: "20px", height: "20px" }}
      />
    ),
    color: "#ffffff",
  },
  {
    id: "3",
    title: "Collection-wide offers",
    text: "Extend offers to every item within a collection, offering an inclusive opportunity for collection holders to accept.",
    backgroundUrl: "/images/benefits/grainy-4.png",
    icon: (
      <BsFillPeopleFill
        style={{ color: "#000000", width: "20px", height: "20px" }}
      />
    ),
    color: "#000000",
    light: true,
  },
  //   {
  //     id: "4",
  //     title: "Ask anything",
  //     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //     backgroundUrl: "/images/benefits/card-5.svg",
  //     iconUrl: "/images/benefits/icon-1.svg",
  //     imageUrl: "/images/benefits/image-2.png",
  //   },
  //   {
  //     id: "5",
  //     title: "Improve everyday",
  //     text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //     backgroundUrl: "/images/benefits/card-6.svg",
  //     iconUrl: "/images/benefits/icon-2.svg",
  //     imageUrl: "/images/benefits/image-2.png",
  //   },
];
