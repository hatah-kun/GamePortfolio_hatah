//Others

import ProfilePicture from "../assets/NICOLAS_VectorArt.png";
import Resume from "../assets/NicolasJohnAbiel_GameDev - Resume.pdf";

// posters

import PrototypeDefender_poster from "../assets/GamePoster/GAME DEVELOPMENT_JOHN ABIEL NICOLAS_COVER ART FILE (portrait).jpg";
import URan_poster from "../assets/GamePoster/GAME DEVELOPMENT_Patrick Eugene Nolasco_COVER ART FILE (portrait).jpg";
import Guardian_poster from "../assets/GamePoster/Guadian_Poster(portrait).jpg";
import TwoBalls_poster from "../assets/GamePoster/TwoBalls_Poster(portrait).jpg";
import KeysCreeps_poster from "../assets/GamePoster/kcGAMEPOSTR.png";

// trailers

const PrototypeDefender_trailer =
  "https://res.cloudinary.com/dwxnjoocx/video/upload/v1735907076/GAME_DEVELOPMENT_JOHN_ABIEL_NICOLAS_GAME_DEMO_VIDEO_FILE_oc64oa.mp4";
const KeysAndCreeps_trailer =
  "https://res.cloudinary.com/dwxnjoocx/video/upload/v1736085328/KeysAndCreepsTrailer_1_momcqq.mp4";
const Guardian_trailer =
  "https://res.cloudinary.com/dwxnjoocx/video/upload/v1736166484/Guardian_trailer_ex59hg.mp4";

// screenshots
const PrototypeDefender_ss1 =
  "https://res.cloudinary.com/dwxnjoocx/image/upload/v1735964179/PrototypeDefenderSS-1_eeyofm.png";
const PrototypeDefender_ss2 =
  "https://res.cloudinary.com/dwxnjoocx/image/upload/v1735964179/PrototypeDefenderSS-3_svw2ig.png";
const PrototypeDefender_ss3 =
  "https://res.cloudinary.com/dwxnjoocx/image/upload/v1735964179/PrototypeDefenderSS-2_whxbv0.png";

const ImageAssets = {
  Other: {
    profile: ProfilePicture,
    resume: Resume,
  },
  PrototypeDefender: {
    poster: PrototypeDefender_poster,
    trailer: PrototypeDefender_trailer,
    screenShot1: PrototypeDefender_ss1,
    screenShot2: PrototypeDefender_ss2,
    screenShot3: PrototypeDefender_ss3,
  },
  URan: {
    poster: URan_poster,
  },
  Guardian: {
    poster: Guardian_poster,
    trailer: Guardian_trailer,
  },
  TwoBalls: {
    poster: TwoBalls_poster,
  },
  KeysCreeps: {
    poster: KeysCreeps_poster,
    trailer: KeysAndCreeps_trailer,
  },
};

export default ImageAssets;
