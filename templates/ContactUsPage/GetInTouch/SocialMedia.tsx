import { socials } from "@/constants/socials";

type Props = {};

const SocialMedia = (props: Props) => {
  return (
    <div className="col-span-11 lg:col-span-5 rounded-lg w-full bg-gradient-to-br from-main_color to-[#89F9E8] p-5 text-slate-950 space-y-7">
      <h2 className="font-semibold text-xl">Get in touch</h2>
      <p className="text-base">
        Reach Out to Us: We&apos;re Here to Listen and Assist You
      </p>
      <div>
        <h5 className="font-semibold">Email to us</h5>
        <p className="text-sm">Instant Support at Your Fingertips</p>
        <a href="mailto:contact@poply.xyz">contact@poply.xyz</a>
      </div>
      <div>
        <h5 className="font-semibold">Social media</h5>
        <div className="flex justify-start gap-x-3.5 flex-wrap mt-2">
          {socials.map((item) => (
            <a
              className="flex items-center justify-center rounded-full transition-colors"
              href={item.url}
              target="_blank"
              key={item.id}
            >
              <item.Icon className="w-5 h-auto text-slate-900" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
