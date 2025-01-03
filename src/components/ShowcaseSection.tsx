import UnderLineLabel from "./ui/UnderLineLabel";
import { VscUnmute, VscMute } from "react-icons/vsc";

const ShowcaseSection = () => {
  return (
    <div
      id="showcase_sec"
      className={`h-screen w-full flex flex-col justify-center items-center `}
    >
      <div className="h-[350px] w-3/4 flex flex-col items-center justify-center gap-4">
        <div className=" w-full bg-customColor-primary v-clip-v1 p-4">
          <UnderLineLabel
            content="ARCHIVE GAMES"
            class="text-4xl text-black font-Gemsbuck_regular"
          />
          <p className="text-black">
            The products of my passion and dedication to learn the craft of game
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 flex-grow ">
          <div className=" col-span-4 bg-white/10 w-full relative flex flex-col items-center justify-center gap-4 overflow-hidden">
            <img
              id="gameBG"
              alt="Game Background"
              className="w-full absolute top-0 left-0"
            />

            <video
              id="videoBg"
              src=""
              autoPlay={true}
              loop={true}
              muted={true}
              className="w-full absolute top-0 left-0 "
            ></video>

            <div className="z-10 bg-gradient-to-tr from-black/70 via-transparent to-transparent p-4 absolute top-0 left-0 w-full h-full flex flex-col justify-center">
              <h1 id="gameTitle" className="text-4xl">
                Game Title
              </h1>
              <span>
                Description: <br /> <p id="gameDescription"></p>
              </span>

              <button
                id="muteBtn"
                onClick={() => {
                  const video = document.getElementById(
                    "videoBg"
                  ) as HTMLVideoElement;
                  video.muted = !video.muted;
                }}
                className="absolute top-4 right-4 bg-black/30 text-white text-lg p-2"
              >
                {(document.getElementById("videoBg") as HTMLVideoElement)
                  ?.muted ? (
                  <VscMute />
                ) : (
                  <VscUnmute />
                )}
              </button>
            </div>
          </div>

          <div className="col-span-2">
            <h1 className="text-7xl font-Gemsbuck_regular">Made with UNITY</h1>
            <ul className=" flex-grow flex flex-col gap-4 p-4 border-t-2 border-customColor-primary bg-black/10 overflow-y-scroll">
              <DisplayGameList />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const GameListBtn = ({
  title,
  genre: platform,
  cover,
  code,
}: {
  title: string;
  genre: string;
  cover: string;
  code: number;
}) => {
  return (
    <button
      className="flex flex-row justify-between h-36 w-full bg-transparent relative group p-1 "
      onClick={() => ShowGame({ code })}
    >
      <div className="absolute top-0 left-0 w-0 h-full group-hover:w-full group-active:w-full bg-customColor-primary -z-10 transition-all duration-300" />
      <div className="w-1/3 h-full   overflow-hidden flex items-start ">
        <img
          src={cover}
          alt={`${title} cover`}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="w-4/6 h-full flex flex-col items-start justify-center pl-3">
        <h1 className="text-gray-300 text-xl group-hover:text-black group-active:text-black">
          {title}
        </h1>
        <p className="text-gray-400">{platform}</p>
      </div>
    </button>
  );
};

const DisplayGameList = () => {
  return (
    <li>
      {games.map((game, index) => (
        <GameListBtn
          title={game.title}
          genre={game.genre}
          cover={game.poster}
          code={index}
        />
      ))}
    </li>
  );
};

const ShowGame = ({ code }: { code: number }) => {
  const bgHolder = document.getElementById("gameBG") as HTMLImageElement;
  const videoHolder = document.getElementById("videoBg") as HTMLVideoElement;
  const muteBtn = document.getElementById("muteBtn") as HTMLButtonElement;
  const titleHolder = document.getElementById(
    "gameTitle"
  ) as HTMLHeadingElement;
  const descriptionHolder = document.getElementById(
    "gameDescription"
  ) as HTMLParagraphElement;

  if (games[code].background.includes(".mp4")) {
    bgHolder.style.display = "none";
    videoHolder.style.display = "block";
    videoHolder.src = games[code].background;
    muteBtn.style.display = "block";
  } else {
    bgHolder.src = games[code].background;
    bgHolder.style.display = "block";
    videoHolder.style.display = "none";
    muteBtn.style.display = "none";
  }

  titleHolder.innerText = games[code].title;
  descriptionHolder.innerText = games[code].description;
};

const games = [
  {
    title: "Prototype Defender",
    genre: "2d Scoller Shooter",
    description: "A 2d scrolling shooter game.",
    duration: "1 week",
    poster:
      "/src/assets/GamePoster/GAME DEVELOPMENT_JOHN ABIEL NICOLAS_COVER ART FILE (portrait).jpg",
    background:
      "https://res.cloudinary.com/dwxnjoocx/video/upload/v1735907076/GAME_DEVELOPMENT_JOHN_ABIEL_NICOLAS_GAME_DEMO_VIDEO_FILE_oc64oa.mp4",
    screenshots: ["", "", ""],
    role: "Developer",
  },
  {
    title: "U-ran",
    genre: "2d Side Scoll",
    description:
      "A 2d sidescrolling game where the player must avoid obstacles.",
    duration: "1 month",
    poster:
      "/src/assets/GamePoster/GAME DEVELOPMENT_Patrick Eugene Nolasco_COVER ART FILE (portrait).jpg",
    background:
      "/src/assets/GamePoster/GAME DEVELOPMENT_Patrick Eugene Nolasco_COVER ART FILE (portrait).jpg",
    screenshots: ["", "", ""],
    role: "Developer",
  },
  {
    title: "Guardian",
    genre: "2d Top down shooter",
    description: "Fight off waves of monster while protecting your baby",
    duration: "1 week",
    poster: "/src/assets/GamePoster/Guadian_Poster(portrait).jpg",
    background: "/src/assets/GamePoster/Guadian_Poster(portrait).jpg",
    screenshots: ["", "", ""],
    role: "Developer",
  },
];

export default ShowcaseSection;
