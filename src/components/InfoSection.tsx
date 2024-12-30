import { ProfileCard } from "./ui/ProfileCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const InfoSection = () => {
  return (
    <div
      id="skills_sec"
      className={`h-screen w-full flex flex-col justify-between items-center
      `}
    >
      {/* <div className="relative w-full">
        <div className="h-32 w-full bg-customColor-primary "></div>
        <div
          className="bg-customColor-primary h-32 w-96"
          style={{ clipPath: "polygon(100% 0, 73% 100%, 0 100%, 0 0)" }}
        ></div>
      </div> */}

      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:w-4/6 m-4 p-3">
        <div className="md:col-span-1">
          <ProfileCard />
        </div>

        <div className=" md:col-span-2 md:grid md:grid-rows-6 justify-center gap-4 ">
          <div className="row-span-2 border-b-2">
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
          <div className="row-span-4">
            <TabContainer />
          </div>
        </div>
      </div>

      {/*<div
        className="relative w-full flex flex-col-reverse items-end
      "
      >
         <div className="h-32 w-full bg-customColor-primary m-0 "></div>
        <div
          className="bg-customColor-primary h-32 w-96 m-0"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 27% 0)" }}
        ></div>
      </div> */}
    </div>
  );
};

const TabContainer = () => {
  const tabBtnStyle: string =
    "rounded-none  text-lg font-Gemsbuck_regular h-full md:px-10";

  const tabContainerStyle: string = "rounded-none overflow-y-scroll";

  return (
    <>
      <Tabs defaultValue="account" className=" w-full h-full ">
        <TabsList className=" bg-white/10 rounded-none h-10">
          <TabsTrigger value="Skills" className={`${tabBtnStyle} `}>
            Skills
          </TabsTrigger>
          <TabsTrigger value="Education" className={`${tabBtnStyle} `}>
            Education
          </TabsTrigger>
          <TabsTrigger value="Achievements" className={`${tabBtnStyle} `}>
            Achievements
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="Skills"
          className={`${tabContainerStyle} p-3 min-w-full`}
        >
          <h2 className="">Skills</h2>
          <ul>
            <li>
              <h3>Game Design & Development</h3>
              <p>Crafting gameplay mechanics and engaging user experiences.</p>
            </li>
            <li>
              <h3>Unity</h3>
              <p> Proficient in developing 2D and 3D games.</p>
            </li>
            <li>
              <h3>C# / C++ </h3>
              <p> Skilled in programming and scripting.</p>
            </li>
            <li>
              <h3>AI Implementation</h3>
              <p> Designing NPC behavior and pathfinding systems.</p>
            </li>
            <li>
              <h3>Level Design</h3>
              <p> Developing immersive and balanced game environments.</p>
            </li>
            <li>
              <h3>Problem Solving</h3>
              <p> Debugging, optimizing, and enhancing game performance.</p>
            </li>
            <li>
              <h3>Team Collaboration</h3>
              <p> Working with artists, designers, and other developers.</p>
            </li>
          </ul>
        </TabsContent>
        <TabsContent
          value="Education"
          className={`${tabContainerStyle} p-3 min-w-full`}
        >
          <h3>Education</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            eaque corrupti libero laudantium obcaecati harum est excepturi quae
            temporibus natus animi, dolor, voluptas consectetur velit nostrum,
            ab non quia possimus.
          </p>
        </TabsContent>
        <TabsContent
          value="Achievements"
          className={`${tabContainerStyle} p-3 min-w-full`}
        >
          <h3>Achievements</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            eaque corrupti libero laudantium obcaecati harum est excepturi quae
            temporibus natus animi, dolor, voluptas consectetur velit nostrum,
            ab non quia possimus.
          </p>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default InfoSection;
