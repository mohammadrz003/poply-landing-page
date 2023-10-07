import Section from "@/components/Section";
import SocialMedia from "./SocialMedia";
import ContactForm from "./ContactForm";

type HeroProps = {};

const GetInTouch = ({}: HeroProps) => (
  <Section className="overflow-hidden md:-mb-10 xl:-mb-20">
    <div className="container w-full relative grid grid-cols-11 gap-y-14 lg:gap-y-0 lg:gap-x-10 xl:gap-x-20">
      <SocialMedia />
      <ContactForm />
    </div>
  </Section>
);

export default GetInTouch;
