import Link from "next/link";
import { svgs } from "./svgs";

type ButtonProps = {
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: "_self" | "_blank" | "_parent" | "_top";
  children: React.ReactNode;
  px?: string;
  white?: boolean;
};

const Button = ({
  className,
  href,
  onClick,
  children,
  target = "_self",
  px,
  white,
}: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center h-11 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} transition-colors hover:text-lime-500 ${
    className || ""
  }`;

  const spanClasses = `relative z-10`;

  return href ? (
    href.startsWith("mailto:") ? (
      <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {svgs(white)}
      </a>
    ) : (
      <Link href={href} className={classes} target={target}>
        <span className={spanClasses}>{children}</span>
        {svgs(white)}
      </Link>
    )
  ) : (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {svgs(white)}
    </button>
  );
};

export default Button;
