import Image, { ImageProps } from "next/image";

type LogoProps = Omit<ImageProps, "src" | "alt">;

export const Logo: React.FC<LogoProps> = (props) => (
  <Image
    src="/assets/full-logo.svg"
    alt="logo acheiConsulta"
    loading="eager"
    width={117}
    height={59}
    {...props}
  />
);
