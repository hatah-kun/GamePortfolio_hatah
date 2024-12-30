import { ProfileCard } from "./ui/ProfileCard";

const InfoSection = () => {
  return (
    <div
      id="skills_sec"
      className={`h-screen w-full flex flex-col justify-center items-center
        border-white-2`}
    >
      <div className="flex w-fit border-2 p-6">
        <ProfileCard />
        <p className="max-w-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          assumenda veritatis aliquid accusantium laborum corrupti eveniet,
          voluptatum voluptas quo id consequuntur doloribus excepturi! Quod
          culpa ab hic asperiores. Cum, amet.
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
