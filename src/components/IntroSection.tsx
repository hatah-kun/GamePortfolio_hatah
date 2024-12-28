import HyperText from "./ui/hyper-text";
import RetroGrid from "./ui/retro-grid";

const IntroSection = () => {
  return (
    <div
      id="home_sec"
      className={`h-screen w-full flex justify-center items-center
        bg-gradient-to-t from-customColor-dark to-customColor-primary p-12`}
    >
      <RetroGrid opacity={0.12} />
      <div className="h-full w-full grid grid-cols-3 grid-rows-3 gap-4">
        <div className="row-start-2 row-end-3 col-start-1 col-end-3 w-60 flex flex-col gap-2">
          <HyperText
            as={"p"}
            className="font-Gemsbuck_regular text-sm text-center text-customColor-dark  bg-white p-4 v-clip-v1"
            animateOnHover={false}
            startOnView={true}
          >
            about
          </HyperText>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            dolores iusto explicabo beatae, possimus quam veritatis sit esse,
            sint commodi itaque voluptatem! Qui commodi blanditiis, aut nam ab
            quos. Quas?
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
