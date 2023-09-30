import Section from "@/components/Section";
import SocialMedia from "./SocialMedia";
import ContactForm from "./ContactForm";

type HeroProps = {};

const GetInTouch = ({}: HeroProps) => (
  <Section className="overflow-hidden md:-mb-10 xl:-mb-20">
    <div className="container relative z-2 grid grid-cols-11 gap-x-24">
      <SocialMedia />
      <ContactForm />
    </div>
  </Section>
);

export default GetInTouch;
