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
import UnderLineLabel from "@/components/ui/UnderLineLabel.tsx";
import {TbBrandGithub} from "react-icons/tb";

const InfoSection = () => {
    return (
        <div
            id="skills_sec"
            className= 'section-format bg-black/10'
        >
            <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                <div className="flex flex-col justify-end gap-4 p-4 sm:p-6 bg-customColor-primary relative rounded-lg">
                    {/* Decorative shapes */}
                    <div
                        className="bg-customColor-primary w-10 sm:w-14 h-40 sm:h-80 absolute top-0 -left-4 sm:-left-[40px] hidden md:block"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)" }}
                    ></div>
                    <div
                        className="bg-customColor-primary w-40 sm:w-80 h-10 sm:h-14 absolute -top-4 sm:-top-[40px] left-0 block md:hidden"
                        style={{ clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)" }}
                    ></div>
                    {/* Main content */}
                    <div className="flex flex-col overflow-hidden md:p-8 relative">
                      <img
                            src={ImageAssets.Other.profile}
                            alt="profile picture"
                            className="max-w-full h-auto object-contain rounded-full aspect-square"
                        />
                    </div>
                    <div className="border-b-4 border-black text-black p-2 sm:p-4">
                        <p className="bg-white text-black font-bold font-Gemsbuck_regular v-clip-v1 w-fit px-3 sm:px-5 py-2 sm:py-3 text-sm sm:text-base">
                            Programmer
                        </p>
                        <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-StylishBold mt-4 sm:mt-6 break-words flex flex-row md:flex-col gap-2">
                            <h1>
                                JOHN ABIEL
                            </h1>
                            <h1 >
                                NICOLAS
                            </h1>
                        </div>
                    </div>
                    <div className={"flex flex-row justify-between items-center gap-2 self-end"}>
                      {/*  <button
                            className="flex items-center bg-black w-fit button-shape font-Gemsbuck_regular mt-3 hover:bg-white hover:text-black flex gap-2 px-4 py-2 text-sm sm:text-base"
                            onClick={DownloadResume}
                        >
                            <HiOutlineDownload className="text-3xl" />
                            Download Resume
                        </button>*/}
                        <button
                            className="flex items-center gap-1 bg-black w-fit button-shape font-Gemsbuck_regular mt-3 hover:bg-white hover:text-black px-4 py-2 text-3xl"
                            onClick={() => window.open("https://github.com/hatah-kun", "_blank", "noopener,noreferrer")}
                        >
                            <TbBrandGithub />
                            <span className={"text-base"}>Github</span>
                        </button>
                    </div>

                </div>

                <div className="w-full h-full flex flex-col gap-4 bg-white/10 p-10 relative">
                    <div
                        className="bg-white/10 w-8/12 h-10 sm:h-14 absolute -bottom-10 sm:-bottom-[42px] right-0 block"
                        style={{ clipPath: "polygon(0 0, 100% 0,100% 100%, 40px 100%)" }}
                    ></div>

                    <div className="border-black/20 pb-4">
                        <UnderLineLabel
                            content={"About Me"}
                            class="font-Gemsbuck_regular text-5xl"
                        />
                     {/*   <TypingAnimation startOnView={true} className="font-Gemsbuck_regular">
                            About Me
                        </TypingAnimation>*/}
                        <p className="text-customColor-light mt-2 sm:text-base">
                            Passionate game developer with hands-on experience acquired through academic projects, internships, and personal ventures.
                            Proficient in implementing interactive game features and programming AI behaviors that enhance player engagement.
                            Dedicated to meticulous debugging and performance optimization to ensure smooth, flawless and responsive gameplay.
                            Committed to continuous learning and staying current with emerging development technologies.
                            Excels in collaborative team environments, contributing effectively to the creative development process from concept to implementation.
                        </p>
                    </div>

                    <TabContainer />
                    <button
                        className="flex items-center bg-black w-fit button-shape font-Gemsbuck_regular mt-3 hover:bg-white hover:text-black flex gap-2 px-4 py-2 text-sm sm:text-base self-end"
                        onClick={DownloadResume}
                    >
                        <HiOutlineDownload className="text-3xl" />
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

    const TabContainer = () => {
      const tabBtnStyle =
        "rounded-none text-base sm:text-lg font-Gemsbuck_regular h-full md:px-6 lg:px-10 hover:bg-white/40 border-x border-white/30 bg-white/0 ";
      const tabContainerStyle =
        "rounded-none mt-3 overflow-y-auto h-[450px] md:h-[450px] min-w-full flex flex-col gap-5";

      return (
        <Tabs defaultValue="Skills" className="w-full min-h-fit bg-black/20 md:p-10 p-5 rounded-xl">
          <TabsList className="rounded-none h-10 bg-transparent text-white/50">
            <TabsTrigger value="Skills" className={tabBtnStyle}>
              Skills
            </TabsTrigger>
            <TabsTrigger value="Stacks" className={tabBtnStyle}>
              Technologies
            </TabsTrigger>
            <TabsTrigger value="Experience" className={tabBtnStyle}>
              Experience
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Skills">
            <div className={tabContainerStyle}>
              <TypingAnimation startOnView={true} className="font-Gemsbuck_regular">
                Acquired Skills
              </TypingAnimation>

              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
                    content="Designing NPC and enemy behavior, as well as pathfinding systems."
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
            <div className={tabContainerStyle}>
              <TypingAnimation startOnView={true} className="font-Gemsbuck_regular">
                Tools & Technologies
              </TypingAnimation>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent px-6 sm:px-20 pb-10 sm:pb-20 pt-4 sm:pt-8">
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
                      title="Autodesk Maya & Blender"
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
                      title="Visual Studio / Code & JetBrains Rider"
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
              <div className="bg-white/10 p-3 border-l-4 border-customColor-primary mt-2">
                <p>
                  In addition, I also have a foundational background in web
                  development, working with HTML, JavaScript, CSS, PHP, SQL, React,
                  TypeScript, and Tailwind.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Experience">
            <div className={tabContainerStyle}>
              <TypingAnimation startOnView={true} className="font-Gemsbuck_regular">
                Experiences
              </TypingAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ContentCard
                  title="Sigma"
                  content="In November 2024, I became a member of Sigma, a group of students dedicated to providing services for game development. "
                />
                <ContentCard
                  title="8 Hour Game Jam"
                  content="Participated in the 8 Hour Game Jam. Lead the team of 3 and has successfully created the prototype within the time limit."
                />
                  <ContentCard
                      title="YC2 Season 2 Finalist"
                      content="Participated in Young Creative Challenge Season 2, a national competition showcasing the creative talents of young Filipinos. Has been able to reach the semi-finalist in the game development category."
                  />
                  <ContentCard
                      title="Game Development Intern"
                      content="Worked as a game development intern at a local game studio, where contributed to develop a 2D platformer game and was responsible for implementing gameplay mechanics, enemy AI and systems."
                  />
                  <ContentCard
                      title="Exhibit in PGDX"
                      content="Displayed a game project in the Philippine Game Developers Expo (PGDX) 2025, showcasing the game to the public and receiving feedback from players."
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
        <div className="bg-white/60 border-t-4 p-3 text-black v-clip-v1">
          <h3 className="text-xl sm:text-xl font-bold">{title}</h3>
          <p className="text-lg sm:text-base">{content}</p>
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
      "photoShop",
      "autodeskmaya",
      "sharp",
      "cplusplus",
      "visualstudio",
      "github",
      "visualstudiocode",
        "blender",
        "rider",
    ];

    export default InfoSection;