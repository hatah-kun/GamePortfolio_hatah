import UnderLineLabel from "./ui/UnderLineLabel";
import { VscUnmute, VscMute } from "react-icons/vsc";
import { useState } from "react";

const ShowcaseSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [screenShotLink, setScreenShotLink] = useState("");
  const handleOpenModal = (imgSrc: string) => {
    setScreenShotLink(imgSrc);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div
      id="showcase_sec"
      className={`h-screen w-full flex flex-col justify-center items-center `}
    >
      <ImageModal
        imgSrc={screenShotLink}
        altText="Descriptive text for your image"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <div className="h-3/4 w-3/4 flex flex-col items-center justify-center gap-4">
        <div className=" w-full bg-customColor-primary v-clip-v1 p-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <UnderLineLabel
              content="ARCHIVE GAMES"
              class="text-4xl text-black font-Gemsbuck_regular"
            />
            <p className="text-black">
              The products of my passion and dedication to learn the craft of
              game development.
            </p>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col justify-center items-center font-Gemsbuck_regular text-black">
              <p>PROJECTS</p>
              <h1 className="text-7xl">10</h1>
            </div>
            <div className="flex flex-col justify-center items-center font-Gemsbuck_regular text-black">
              <p>CLIENTS</p>
              <h1 className="text-7xl">2</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 flex-grow w-full">
          <div className=" col-span-4 bg-white/10 w-full relative flex flex-col items-center justify-center gap-4  group ">
            <div
              className="bg-customColor-primary w-80 h-14 absolute bottom-0 right-0 "
              style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
            ></div>
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center  z-0 bg-black border-b-4 border-customColor-primary overflow-hidden">
              <img id="gameBG" alt="Game Background" className="w-full" />

              <video
                id="videoBg"
                src=""
                autoPlay={true}
                loop={true}
                muted={true}
                className="w-full  "
              ></video>
            </div>

            <div
              className="z-10 bg-gradient-to-tr from-black/70 via-transparent to-transparent p-4 absolute top-0 left-0 w-full h-full 
            flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-300"
            >
              <div className="w-1/2 flex flex-col gap-4">
                <h1 id="gameTitle" className="text-5xl">
                  Game Title
                </h1>

                <p id="gameDescription"></p>

                <div>
                  <span className="flex flex-row items-center gap-4 text-sm">
                    Platform:{" "}
                    <p id="gamePlatform" className="text-lg">
                      platform
                    </p>
                  </span>
                  <span className="flex flex-row items-center gap-4 text-sm">
                    Project Duration:{" "}
                    <p id="gameDuration" className="text-lg">
                      duaration
                    </p>
                  </span>
                  <span className="flex flex-row items-center gap-4 text-sm">
                    Project Type:{" "}
                    <p id="gameProjectType" className="text-lg">
                      solo
                    </p>
                  </span>
                  <span className="flex flex-row items-center gap-4 text-sm">
                    Role:{" "}
                    <p id="gameRole" className="text-lg">
                      role
                    </p>
                  </span>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center gap-3  self-end ">
                <img
                  src=""
                  alt="game screen shot"
                  id="gameSS1"
                  className="w-[150px] h-[80px] hover:-translate-y-2 transition-all duration-300"
                  onClick={(event) =>
                    handleOpenModal((event.target as HTMLImageElement).src)
                  }
                />
                <img
                  src=""
                  alt="game screen shot"
                  id="gameSS2"
                  className="w-[150px] h-[80px] hover:-translate-y-2 transition-all duration-300"
                  onClick={(event) =>
                    handleOpenModal((event.target as HTMLImageElement).src)
                  }
                />
                <img
                  src=""
                  alt="game screen shot"
                  id="gameSS3"
                  className="w-[150px] h-[80px] hover:-translate-y-2 transition-all duration-300"
                  onClick={(event) =>
                    handleOpenModal((event.target as HTMLImageElement).src)
                  }
                />
              </div>

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

          <div className="col-span-2 flex flex-col h-full ">
            <h1 className="text-5xl font-Gemsbuck_regular bg-white text-black p-6 v-clip-v1">
              Made with UNITY
            </h1>
            <ul className=" flex-grow flex flex-col gap-4 p-4 border-t-2 border-customColor-primary bg-black/10 overflow-y-scroll mt-4">
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

const ImageModal = ({
  imgSrc,
  altText,
  isOpen,
  onClose,
}: {
  imgSrc: string;
  altText: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white/10 p-4 h-2/3"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={imgSrc} alt={altText} className="h-full " />
      </div>
    </div>
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
  const platformHolder = document.getElementById(
    "gamePlatform"
  ) as HTMLParagraphElement;
  const durationHolder = document.getElementById(
    "gameDuration"
  ) as HTMLParagraphElement;
  const projectTypeHolder = document.getElementById(
    "gameProjectType"
  ) as HTMLParagraphElement;
  const roleHolder = document.getElementById(
    "gameRole"
  ) as HTMLParagraphElement;
  const ss1Holder = document.getElementById("gameSS1") as HTMLImageElement;
  const ss2Holder = document.getElementById("gameSS2") as HTMLImageElement;
  const ss3Holder = document.getElementById("gameSS3") as HTMLImageElement;

  // background
  if (games[code].background.includes(".mp4")) {
    bgHolder.style.display = "none";
    videoHolder.style.display = "block";
    muteBtn.style.display = "block";

    if (videoHolder.src !== games[code].background) {
      videoHolder.src = games[code].background;
      videoHolder.poster = games[code].poster;
    }

    videoHolder.play();
  } else {
    bgHolder.src = games[code].background;
    bgHolder.style.display = "block";
    videoHolder.style.display = "none";
    videoHolder.pause();
    muteBtn.style.display = "none";
  }

  // details
  titleHolder.innerText = games[code].title;
  descriptionHolder.innerText = games[code].description;
  platformHolder.innerText = games[code].platform;
  durationHolder.innerText = games[code].duration;
  roleHolder.innerText = games[code].role;
  projectTypeHolder.innerText = games[code].projectType;

  // screenshots
  const screenshots = games[code].screenshots;
  const ssHolders = [ss1Holder, ss2Holder, ss3Holder];
  ssHolders.map((imageHolder, index) => {
    if (screenshots[index] !== "") {
      imageHolder.src = screenshots[index];
      imageHolder.style.display = "block";
    } else {
      imageHolder.style.display = "none";
    }
  });
};

const games = [
  {
    title: "Prototype Defender",
    genre: "2d Vertical Scoller Shooter",
    description:
      "A 2D vertical scrolling shooting game inspired by the retro classic, 'Tween Bee'. Defend the Earth by shooting alien ships that are conquering our world.",
    duration: "1 week",
    poster:
      "../src/assets/GamePoster/GAME DEVELOPMENT_JOHN ABIEL NICOLAS_COVER ART FILE (portrait).jpg",
    background:
      "https://res.cloudinary.com/dwxnjoocx/video/upload/v1735907076/GAME_DEVELOPMENT_JOHN_ABIEL_NICOLAS_GAME_DEMO_VIDEO_FILE_oc64oa.mp4",
    screenshots: [
      "https://res.cloudinary.com/dwxnjoocx/image/upload/v1735964179/PrototypeDefenderSS-1_eeyofm.png",
      "https://res.cloudinary.com/dwxnjoocx/image/upload/v1735964179/PrototypeDefenderSS-3_svw2ig.png",
      "https://res.cloudinary.com/dwxnjoocx/image/upload/v1735964179/PrototypeDefenderSS-2_whxbv0.png",
    ],
    role: "Developer, Level Designer, Asset Creator",
    platform: "PC",
    projectType: "Solo",
  },
  {
    title: "U-ran",
    genre: "2d Sidescroller/Platform",
    description:
      "2D side-scrolling adventure game where you will take on the journey of Raina to find his way back home.",
    duration: "1 month",
    poster:
      "../src/assets/GamePoster/GAME DEVELOPMENT_Patrick Eugene Nolasco_COVER ART FILE (portrait).jpg",
    background:
      "../src/assets/GamePoster/GAME DEVELOPMENT_Patrick Eugene Nolasco_COVER ART FILE (portrait).jpg",
    screenshots: ["", "", ""],
    role: "Developer, Level Designer, Asset Creator",
    platform: "PC",
    projectType: "Group",
  },
  {
    title: "Guardian",
    genre: "2d Top down shooter",
    description:
      "A 2D top-down shooter where you will fight off waves of dark creatures while protecting your fidgety baby.",
    duration: "1 week",
    poster: "../src/assets/GamePoster/Guadian_Poster(portrait).jpg",
    background: "../src/assets/GamePoster/Guadian_Poster(portrait).jpg",
    screenshots: ["", "", ""],
    role: "Developer, Level Designer, Asset Creator",
    platform: "PC",
    projectType: "Solo",
  },
];

export default ShowcaseSection;
