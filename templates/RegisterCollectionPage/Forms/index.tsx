import Section from "@/components/Section";
import Fields from "./Fields";

type HeroProps = {};

const GetInTouch = ({}: HeroProps) => (
  <Section className="overflow-hidden md:-mb-10 xl:-mb-20">
    <div className="container relative z-2">
      <h1 className="text-2xl mb-10 lg:text-3xl font-semibold">
        Register Collection
      </h1>

      <Fields />
    </div>
  </Section>
);

export default GetInTouch;
