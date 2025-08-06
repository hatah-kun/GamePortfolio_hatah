import HyperText from "./ui/hyper-text";
import RetroGrid from "./ui/retro-grid";
import TypingAnimation from "./ui/typing-animation";

const IntroSection = () => {
  return (
    <div
      id="home_sec"
      className={`h-screen w-full  flex justify-center items-center
        bg-gradient-to-t from-customColor-dark to-customColor-primary p-12`}
    >
      <RetroGrid opacity={0.12} />

        <div className="h-full w-full flex flex-col-reverse items-center justify-center gap-16 md:gap-40 relative">
            <div className="flex items-center justify-center w-full">
                <InfoCard title="Status" content="Ready to comply" />
                {/* <InfoCard ... /> */}
            </div>

            <div className="w-full flex flex-col md:flex-row justify-start md:justify-evenly items-start md:items-center m-4 md:m-9 gap-4 md:gap-0">
                <HyperText as={"h1"} className="text-5xl sm:text-4xl md:text-6xl font-Gemsbuck_regular text-left ">
                    JOHN ABIEL
                </HyperText>
                <HyperText as={"h1"} className="text-5xl sm:text-4xl md:text-6xl font-Gemsbuck_regular text-left ">
                    Nicolas
                </HyperText>
                <HyperText as={"h1"} className="text-5xl sm:text-4xl md:text-6xl font-Gemsbuck_regular text-left ">
                    PORTFOLIO
                </HyperText>
            </div>

        </div>

    </div>
  );
};

const InfoCard = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="w-72 flex flex-col gap-2">
      <HyperText
        as={"p"}
        className="w-full font-Gemsbuck_regular text-sm text-center text-customColor-dark  bg-white p-4 v-clip-v1"
        animateOnHover={false}
        startOnView={true}
      >
        {title}
      </HyperText>
      <TypingAnimation
        startOnView={true}
        className="text-lg font-Gemsbuck_thin text-center"
      >
        {content}
      </TypingAnimation>
    </div>
  );
};

export default IntroSection;
