import HyperText from "./ui/hyper-text";
import RetroGrid from "./ui/retro-grid";

const IntroSection = () => {
  return (
    <div
      id="home_sec"
      className={`h-screen w-full  flex justify-center items-center
        bg-gradient-to-t from-customColor-dark to-customColor-primary p-12`}
    >
      <RetroGrid opacity={0.12} />

      <div className="h-full w-full flex flex-col items-center justify-center gap-4 relative">
        <div className="flex justify-between w-full  ">
          <HyperText as={"h1"} className="text-6xl font-Gemsbuck_regular">
            JOHN ABIEL
          </HyperText>
          <HyperText as={"h1"} className="text-6xl font-Gemsbuck_regular">
            Nicolas
          </HyperText>
        </div>

        {/* <img
          src="src\assets\NICOLAS_VectorArt.png"
          alt="dp"
          className="h-5/6 absolute bottom-0 filter grayscale opacity-5"
        /> */}

        <div className="w-full flex justify-between absolute bottom-0">
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </div>
  );
};

const InfoCard = () => {
  return (
    <div className="w-72 flex flex-col gap-2">
      <HyperText
        as={"p"}
        className="w-full font-Gemsbuck_regular text-sm text-center text-customColor-dark  bg-white p-4 v-clip-v1"
        animateOnHover={false}
        startOnView={true}
      >
        about
      </HyperText>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
        dolores iusto explicabo beatae, possimus quam veritatis sit esse, sint
        commodi itaque voluptatem! Qui commodi blanditiis, aut nam ab quos.
        Quas?
      </p>
    </div>
  );
};

export default IntroSection;
