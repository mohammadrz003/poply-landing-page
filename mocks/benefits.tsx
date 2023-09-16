import { MdStoreMallDirectory } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { BsFillPeopleFill } from "react-icons/bs";

export const benefits = [
  {
    id: "0",
    title: "Marketplace",
    text: "Users can participate in auctions or list NFTs with a fixed price and Buyers can place bids or purchase NFTs directly from the marketplace and Enable users to purchase NFTs listed for sale.",
    backgroundUrl: "/images/benefits/card-1.svg",
    icon: (
      <MdStoreMallDirectory
        style={{ color: "#000000", width: "20px", height: "20px" }}
      />
    ),
    background: "#40F8FF",
    light: true,
  },
  {
    id: "1",
    title: "AI-ART",
    text: "provide consulting services, offering assistance in selecting, implementing, and customizing AI models for specific use cases.",
    backgroundUrl: "/images/benefits/card-2.svg",
    icon: (
      <FaRobot style={{ color: "#000000", width: "20px", height: "20px" }} />
    ),
    background: "#FFC436",
  },
  {
    id: "2",
    title: "LaunchPad",
    text: "It provides a range of services and features to support the creation, promotion, and sale of NFT projects.",
    backgroundUrl: "/images/benefits/card-3.svg",
    icon: (
      <HiMiniRocketLaunch
        style={{ color: "#000000", width: "20px", height: "20px" }}
      />
    ),
    background: "#D2DE32",
  },
  {
    id: "3",
    title: "Community engagement",
    text: "provide tools and resources to engage with the project's community",
    backgroundUrl: "/images/benefits/card-4.svg",
    icon: (
      <BsFillPeopleFill
        style={{ color: "#000000", width: "20px", height: "20px" }}
      />
    ),
    background: "#B980F0",
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
