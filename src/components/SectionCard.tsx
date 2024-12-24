import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  screenHeight?: boolean;
  tag?: string;
  bgImage?: string;
  bgColor?: string;
}

const SectionCard = ({
  children,
  screenHeight,
  tag,
  bgImage,
  bgColor,
}: Props) => {
  const height = screenHeight ? "min-h-screen" : "h-min";
  const style = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        backgroundColor: bgColor || "transparent",
      };

  return (
    <div
      id={tag}
      className={`${height} w-full flex justify-center items-center`}
      style={style}
    >
      {children}
    </div>
  );
};

export default SectionCard;
