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

      <div className="h-full w-full flex flex-col items-center justify-around md:justify-center gap-4 relative">
        <div className="flex flex-col m-9  md:flex-row md:justify-between w-full  ">
          <HyperText as={"h1"} className="text-6xl font-Gemsbuck_regular">
            JOHN ABIEL
          </HyperText>
          <HyperText as={"h1"} className="text-6xl font-Gemsbuck_regular">
            Nicolas
          </HyperText>

          <HyperText as={"h1"} className="text-6xl font-Gemsbuck_regular">
            PORTFOLIO
          </HyperText>
        </div>

        {/* <img
          src="src\assets\NICOLAS_VectorArt.png"
          alt="dp"
          className="h-5/6 absolute bottom-0 filter grayscale opacity-5"
        /> */}

        <div className="w-full flex flex-col md:flex-row md:justify-between items-center justify-between absolute bottom-0 gap-10">
          <InfoCard
            title="Info"
            content=" An evolving collection of memories and experiences from my journey as a
        game developer."
          />

          <InfoCard title="Status" content="Ready to comply..." />
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
        className="text-lg font-Gemsbuck_thin"
      >
        {content}
      </TypingAnimation>
    </div>
  );
};

export default IntroSection;
