// import { ProfileCard } from "./ui/ProfileCard";
import ImageAssets from "./AssetContainer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import TypingAnimation from "./ui/typing-animation";
import IconCloud from "./ui/icon-cloud";
import { HiOutlineDownload } from "react-icons/hi";

const InfoSection = () => {
  return (
    <div
      id="skills_sec"
      className={`min-h-screen py-20 w-full flex justify-center items-center relative bg-black/10`}
    >
      <div
        className={`h-fit w-fit max-w-full flex flex-col md:flex-row justify-end  relative `}
      >
        <div className="md:w-fit max-w-full min-h-full flex flex-col justify-end gap-4  p-6 bg-customColor-primary relative">
          <div
            className="bg-customColor-primary w-14 h-80 absolute top-0 -left-[40px] hidden md:block"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)" }}
          ></div>

          <div
            className="bg-customColor-primary w-80 h-14 absolute -top-[40px] left-0 block md:hidden"
            style={{ clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)" }}
          ></div>
          <div className="border-b-4 border-black text-black p-4">
            <p className="bg-white text-black font-bold font-Gemsbuck_regular v-clip-v1 w-fit px-5 py-3">
              Programmer
            </p>
            <h1 className="text-5xl md:text-8xl font-StylishBold mt-6">
              JOHN ABIEL <br /> NICOLAS
            </h1>
            <p>
              A developer dedicated to crafting immersive and interactive game
              experiences, built on a foundation of creativity and technical
              proficiency.
            </p>
          </div>

          <TabContainer />
          <button
            className="bg-black w-fit button-Style font-Gemsbuck_regular mt-3 hover:bg-white hover:text-black flex gap-2"
            onClick={DownloadResume}
          >
            <HiOutlineDownload className="text-xl" />
            Download Resume
          </button>
        </div>

        <div className="min-h-full md:w-4/12 flex items-end justify-center bg-customColor-primary overflow-hidden">
          <img
            src={ImageAssets.Other.profile}
            alt="profile picture"
            className="max-h-full"
            style={{ filter: "drop-shadow(10px 10px 0px rgba(0, 0, 0, 0.5))" }}
          />
        </div>
      </div>
    </div>
  );
};

const TabContainer = () => {
  const tabBtnStyle: string =
    "rounded-none text-lg font-Gemsbuck_regular h-full md:px-10  hover:bg-black/20 border-x border-black active:bg-black active:text-customColor-primary";

  const tabContainerStyle: string =
    "rounded-none mt-3 overflow-y-scroll max-h-96 h-[770px] min-w-full p-5 flex flex-col gap-5";

  return (
    <Tabs defaultValue="Skills" className="max-w-6xl min-h-fit">
      <TabsList className="rounded-none h-10 bg-transparent text-black">
        <TabsTrigger value="Skills" className={`${tabBtnStyle}`}>
          Skills
        </TabsTrigger>
        <TabsTrigger value="Stacks" className={`${tabBtnStyle}`}>
          Stacks
        </TabsTrigger>
        {/* <TabsTrigger value="Achievements" className={`${tabBtnStyle}`}>
          Achievements
        </TabsTrigger> */}
        <TabsTrigger value="Experience" className={`${tabBtnStyle}`}>
          Experience
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Skills">
        <div className={`${tabContainerStyle}`}>
          <TypingAnimation startOnView={true} className="font-Gemsbuck_regular">
            Acquired Skills
          </TypingAnimation>
          <p>
            As I take my journey to become a game developer, I have acquired a
            set of skills that I believe are essential to create engaging and
            immersive game experiences. Here are some of the skills that I have
            developed over the years:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <li>
              <ContentCard
                title="Game Design & Development"
                content="Crafting gameplay mechanics and engaging user experiences."
              />
            </li>
            <li>
              <ContentCard
                title="Unity"
                content="Proficient in developing 2D and 3D games."
              />
            </li>
            <li>
              <ContentCard
                title="C# / C++"
                content="Skilled in programming and scripting."
              />
            </li>
            <li>
              <ContentCard
                title="AI Implementation"
                content="Designing NPC behavior and pathfinding systems."
              />
            </li>
            <li>
              <ContentCard
                title="Level Design"
                content="Developing immersive and balanced game environments."
              />
            </li>
            <li>
              <ContentCard
                title="Problem Solving"
                content="Debugging, optimizing, and enhancing game performance."
              />
            </li>
            <li>
              <ContentCard
                title="Team Collaboration"
                content="Working with artists, designers, and other developers."
              />
            </li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="Stacks">
        <div className={`${tabContainerStyle}`}>
          <TypingAnimation startOnView={true} className="font-Gemsbuck_regular">
            Tools & Technologies
          </TypingAnimation>
          <p>
            The tools and technologies that I use to create and develop games
            are:
          </p>

          <div className="flex flex-col md:flex-row gap-3">
            <div className="sticky flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent px-20 pb-20 pt-8 ">
              <IconCloud iconSlugs={slugs} />
            </div>
            <ul className="grid grid-cols-1 gap-3">
              <li>
                <ContentCard
                  title="Unity"
                  content="A powerful game engine for creating 2D and 3D games."
                />
              </li>

              <li>
                <ContentCard
                  title="Autodesk Maya"
                  content="A versatile tool for 3D modeling, animation, and rendering."
                />
              </li>
              <li>
                <ContentCard
                  title="Photoshop"
                  content="An essential tool for creating and editing game assets."
                />
              </li>
              <li>
                <ContentCard
                  title="Visual Studio / Code"
                  content="A powerful IDE for coding and debugging."
                />
              </li>
              <li>
                <ContentCard
                  title="Github"
                  content="A version control system for tracking changes and collaborating with others."
                />
              </li>
            </ul>
          </div>
          <div className="bg-black/10 p-3 border-l-4 border-black">
            <p>
              In addition, I also have a foundational background in web
              development, working with HTML, JavaScript, CSS, PHP, SQL, React,
              TypeScript, and Tailwind.
            </p>
          </div>
        </div>
      </TabsContent>
      {/* <TabsContent value="Achievements">
        <div className={`${tabContainerStyle}`}>
          <TypingAnimation startOnView={true} className="font-Gemsbuck_regular">
            Achievements
          </TypingAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <ContentCard
              title="Game Development Competition"
              content="1st Place in the 2024 Unity Game Jam."
            />

            <ContentCard
              title="Hackathon"
              content="Winner of the 2023 Global Game Jam."
            />

            <ContentCard
              title="Certifications"
              content="Unity Certified Developer and Unreal Engine Certified Associate."
            />
          </div>
        </div>
      </TabsContent> */}
      <TabsContent value="Experience">
        <div className={`${tabContainerStyle}`}>
          <TypingAnimation startOnView={true} className="font-Gemsbuck_regular">
            Experiences
          </TypingAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <ContentCard
              title="Sigma"
              content="In November 2024, I joined Sigma an indie game company as a game developer."
            />

            <ContentCard
              title="Umbra"
              content="In September 2023, I joined Umbra an indie company as a game developer."
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

const ContentCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="bg-white p-3 text-black v-clip-v1">
      <h3 className="text-xl font-bold ">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const DownloadResume = () => {
  const link = document.createElement("a");
  link.href = ImageAssets.Other.resume;
  link.download = "JohnAbielNicolas_Resume.pdf";
  link.click();
};

const slugs = [
  "unity",
  "photoshop",
  "autodeskmaya",
  "sharp",
  "cplusplus",
  "visualstudio",
  "github",
  "visualstudiocode",
];

export default InfoSection;
