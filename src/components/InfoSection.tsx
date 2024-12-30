import { ProfileCard } from "./ui/ProfileCard";

const InfoSection = () => {
  return (
    <div
      id="skills_sec"
      className={`h-screen w-full flex flex-col justify-center items-center
        border-white-2`}
    >
      <div className="grid grid-cols-3 gap-4 w-4/6 border-2 p-6 border-white/15">
        <div className="bg-white/10 col-span-1">
          <ProfileCard />
        </div>

        <div className="bg-white/10 col-span-2 flex flex-col justify-center gap-4">
          <div className="bg-white/10">
            <p className="bg-white text-black font-bold font-Gemsbuck_regular v-clip-v1 w-fit px-5 py-3">
              Player
            </p>
            <h1 className="text-6xl font-StylishBold mt-6">
              JOHN ABIEL NICOLAS
            </h1>
            <p>
              A developer dedicated to crafting immersive and interactive game
              experiences, built on a foundation of creativity and technical
              proficiency.
            </p>
          </div>
          <div className="bg-white/10">
            <h3>Info:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              assumenda veritatis aliquid accusantium laborum corrupti eveniet,
              voluptatum voluptas quo id consequuntur doloribus excepturi! Quod
              culpa ab hic asperiores. Cum, amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
