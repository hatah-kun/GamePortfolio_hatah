import ImageAssets from "./AssetContainer";

const FooterSection = () => {
  return (
    <footer className="w-full bg-customColor-dark text-white py-8 border-t-4 border-customColor-primary relative">
      <div
        className="bg-customColor-primary w-40 sm:w-80 h-10 sm:h-14 absolute top-0 left-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-8 relative">
          <div className="w-full md:w-auto z-10 flex flex-col items-center md:items-start">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 h-auto">
              <img
                src={ImageAssets.Other.logo}
                alt="RedCraft Icon"
                className="h-24 sm:h-24 md:h-48 w-auto"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-Gemsbuck_bold font-bold text-customColor-primary">
                  RedCraft
                </h2>
                <p className="text-base mt-2 max-w-md">
                    A portfolio by John Abiel Nicolas, showcasing projects from school, game jams, and personal development.
                    Driven by passion and creativity.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end font-Gemsbuck_regular w-full md:w-auto z-10 gap-2 sm:gap-0">
            <a
              href="#home_sec"
              className="hover:underline hover:bg-customColor-primary p-2 sm:p-4 v-clip-v1 text-center text-base"
            >
              Home
            </a>
            <a
              href="#showcase_sec"
              className="hover:underline hover:bg-customColor-primary p-2 sm:p-4 v-clip-v1 text-center text-base"
            >
              Projects
            </a>
            <a
              href="#skills_sec"
              className="hover:underline hover:bg-customColor-primary p-2 sm:p-4 v-clip-v1 text-center text-base"
            >
              About
            </a>
            <a
              href="#contact_sec"
              className="hover:underline hover:bg-customColor-primary p-2 sm:p-4 v-clip-v1 text-center text-base"
            >
              Contacts
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} RedCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;