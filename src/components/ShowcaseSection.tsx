import { useState, useEffect } from "react";
import UnderLineLabel from "./ui/UnderLineLabel";
import { VscUnmute, VscMute } from "react-icons/vsc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ImageAssets from "./AssetContainer";

const ShowcaseSection = () => {
  // modal variables
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [screenShotLink, setScreenShotLink] = useState("");
  const handleOpenModal = (imgSrc: string) => {
    setScreenShotLink(imgSrc);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  const [isInfoShow, setIsInfoShow] = useState(true);
  const [isVideoMute, setIsVideoMute] = useState(true);

  // Call ShowGame with default value 0 when the component loads
  useEffect(() => {
    ShowGame({ code: 0 });
  }, []);

  return (
    <div
      id="showcase_sec"
      className={`h-screen w-full flex flex-row justify-center items-center`}
    >
      <ImageModal
        imgSrc={screenShotLink}
        altText="Descriptive text for your image"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <div className="h-3/4 w-4/5 flex flex-col items-center justify-center gap-4">
        <div className=" w-full bg-customColor-primary v-clip-v1 p-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <UnderLineLabel
              content="ARCHIVE GAMES"
              class="text-5xl text-black font-Gemsbuck_regular"
            />
            <p className="text-black">
              These are some of the projects that I have crafted during my
              journey to learn Unity.
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

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 flex-grow w-full h-[250px]">
          <div className=" col-span-4 bg-white/10 w-full relative flex flex-col items-center justify-center  group ">
            <div className="absolute top-4 right-4 bg-black/30 text-white z-40 flex">
              <button
                id="muteBtn"
                onClick={() => {
                  setIsVideoMute(ControlVideoAudio());
                }}
                className="text-xl p-2"
              >
                {isVideoMute ? <VscMute /> : <VscUnmute />}
              </button>

              <button
                id="muteBtn"
                onClick={() => {
                  setIsInfoShow(ShowGameInfo());
                }}
                className="text-xl p-2"
              >
                {isInfoShow ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>

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
              id="gameInfoGroup"
              className="z-10 bg-gradient-to-r from-black/85 via-transparent to-transparent p-10 absolute top-0 left-0 w-full h-full 
            flex flex-col justify-between items-center transition-all duration-300"
            >
              <div className="self-start my-auto w-1/2 flex flex-col gap-4">
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

              <div className="flex flex-row justify-center items-center gap-4 self-start z-10">
                <img
                  src=""
                  alt="game screen shot"
                  id="gameSS1"
                  className="w-[180px] h-[100px] hover:-translate-y-2 transition-all duration-300"
                  onClick={(event) =>
                    handleOpenModal((event.target as HTMLImageElement).src)
                  }
                />
                <img
                  src=""
                  alt="game screen shot"
                  id="gameSS2"
                  className="w-[180px] h-[100px] hover:-translate-y-2 transition-all duration-300"
                  onClick={(event) =>
                    handleOpenModal((event.target as HTMLImageElement).src)
                  }
                />
                <img
                  src=""
                  alt="game screen shot"
                  id="gameSS3"
                  className="w-[180px] h-[100px] hover:-translate-y-2 transition-all duration-300"
                  onClick={(event) =>
                    handleOpenModal((event.target as HTMLImageElement).src)
                  }
                />
              </div>
            </div>
          </div>

          <div className="col-span-2 flex flex-col h-full overflow-y-scroll">
            <h1 className="text-5xl font-Gemsbuck_regular bg-white text-black p-6 v-clip-v1">
              Made with UNITY
            </h1>

            <DisplayGameList />
          </div>
        </div>
      </div>
    </div>
  );
};

function ControlVideoAudio() {
  const video = document.getElementById("videoBg") as HTMLVideoElement;
  video.muted = !video.muted;

  return video.muted;
}

function ShowGameInfo() {
  const infoGroup = document.getElementById("gameInfoGroup") as HTMLElement;
  let isShow = false;
  if (infoGroup.style.display === "none") {
    infoGroup.style.display = "flex";
    isShow = true;
  } else {
    infoGroup.style.display = "none";
    isShow = false;
  }

  return isShow;
}

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
    <ul className=" flex-grow flex flex-col gap-4 p-4 border-t-2 border-customColor-primary bg-black/10 overflow-y-scroll mt-4">
      {games.map((game, index) => (
        <li key={index}>
          <GameListBtn
            title={game.title}
            genre={game.genre}
            cover={game.poster}
            code={index}
          />
        </li>
      ))}
    </ul>
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
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white/10 p-4 h-2/3"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={imgSrc} alt={altText} className="h-full " />
      </div>

      <p className="mt-4 text-white/50">
        click anywhere outside the image to close
      </p>
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
    poster: ImageAssets.PrototypeDefender.poster,
    background: ImageAssets.PrototypeDefender.trailer,
    screenshots: [
      ImageAssets.PrototypeDefender.screenShot1,
      ImageAssets.PrototypeDefender.screenShot2,
      ImageAssets.PrototypeDefender.screenShot3,
    ],
    role: "Full-Stack",
    platform: "PC",
    projectType: "Solo",
  },
  {
    title: "U-ran",
    genre: "2d Sidescroller/Platform",
    description:
      "2D side-scrolling adventure game where you will take on the journey of Raina to find his way back home.",
    duration: "1 month",
    poster: ImageAssets.URan.poster,
    background: ImageAssets.URan.poster,
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
    poster: ImageAssets.Guardian.poster,
    background: ImageAssets.Guardian.trailer,
    screenshots: [
      ImageAssets.Guardian.screenShot1,
      ImageAssets.Guardian.screenShot2,
      ImageAssets.Guardian.screenShot3,
    ],
    role: "Full-Stack",
    platform: "PC",
    projectType: "Solo",
  },
  {
    title: "Keys And Creeps",
    genre: "2d Top down horror",
    description:
      "2d Top down horror game. Using only a flashlight, find the way out of this creepy room.",
    duration: "8 Hours (Game Jam Event)",
    poster: ImageAssets.KeysCreeps.poster,
    background: ImageAssets.KeysCreeps.trailer,
    screenshots: ["", "", ""],
    role: "Developer, Level Designer",
    platform: "PC",
    projectType: "Group",
  },
  {
    title: "Shinobi",
    genre: "2d Sidescroller RPG",
    description:
      "Play the role of a young shinobi who must save his village from the evil forces that threaten to destroy it.",
    duration: "1 week",
    poster: ImageAssets.Shinobi.poster,
    background: ImageAssets.Shinobi.trailer,
    screenshots: [
      ImageAssets.Shinobi.screenShot1,
      ImageAssets.Shinobi.screenShot2,
      ImageAssets.Shinobi.screenShot3,
    ],
    role: "Developer, Level Designer",
    platform: "PC",
    projectType: "Solo",
  },

  {
    title: "Two Balls",
    genre: "3d Rolling Game",
    description:
      "With the two balls ready, gain momentum and crash into the cube objects that try to push you off the platform.",
    duration: "1 week",
    poster: ImageAssets.TwoBalls.poster,
    background: ImageAssets.TwoBalls.trailer,
    screenshots: [
      ImageAssets.TwoBalls.screenShot1,
      ImageAssets.TwoBalls.screenShot2,
      ImageAssets.TwoBalls.screenShot3,
    ],
    role: "Developer, Level Designer",
    platform: "PC",
    projectType: "Solo",
  },
];

export default ShowcaseSection;
