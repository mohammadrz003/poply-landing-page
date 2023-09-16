import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => (
  <Link
    className={`block relative w-10 aspect-square ${className || ""}`}
    href="/"
  >
    <Image
      src="/images/logo.png"
      fill
      sizes="100vw"
      priority={true}
      alt="Poply"
    />
  </Link>
);

export default Logo;
