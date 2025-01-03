// const imgPreview = {
//   img1: "/src/assets/games/GAME DEVELOPMENT_JOHN ABIEL NICOLAS_COVER ART FILE (portrait).jpg",
//   img2: "/src/assets/games/GAME DEVELOPMENT_Patrick Eugene Nolasco_COVER ART FILE (portrait).jpg",
//   img3: "/src/assets/games/Guadian_Poster(portrait).jpg",
// };

const ShowcaseSection = () => {
  return (
    <div
      id="showcase_sec"
      className={`h-screen w-full flex flex-col justify-center items-center `}
    >
      <div>
        <h1>ARCHIEVE GAMES</h1>
        <p>
          As I learn how to built a game, I am already beginning to built a
          curated collection of games demonstrating creativity, innovation, and
          technical proficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-grow ">
        <div className=" col-span-3 bg-white/10"></div>

        <div className="col-span-1">
          <h1 className="text-7xl font-Gemsbuck_regular">Made with UNITY</h1>
          <ul className=" flex-grow flex flex-col gap-4 p-4 border-t-2 border-customColor-primary bg-black/10 overflow-y-scroll">
            <li>
              <GameListBtn
                title="Prototype Defender"
                genre="2d Scoll Shoot"
                cover="/src/assets/games/GAME DEVELOPMENT_JOHN ABIEL NICOLAS_COVER ART FILE (portrait).jpg"
                code={0}
              />
            </li>
            <li>
              <GameListBtn
                title="U-ran"
                genre="2d Sidescroller"
                cover="/src/assets/games/GAME DEVELOPMENT_Patrick Eugene Nolasco_COVER ART FILE (portrait).jpg"
                code={1}
              />
            </li>{" "}
            <li>
              <GameListBtn
                title="Guardian"
                genre="2d Top-down Shooting"
                cover="/src/assets/games/Guadian_Poster(portrait).jpg"
                code={2}
              />
            </li>
          </ul>
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
      className="flex flex-row justify-between h-36 w-[350px] bg-transparent relative group p-1 "
      onClick={() => ShowGame({ code })}
    >
      <div className="absolute top-0 left-0 w-0 h-full group-hover:w-full group-active:w-full bg-customColor-primary -z-10 transition-all duration-300" />
      <div className="w-1/3 h-full overflow-hidden flex items-start ">
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

const ShowGame = ({ code }: { code: number }) => {
  console.log(code);
};

export default ShowcaseSection;
