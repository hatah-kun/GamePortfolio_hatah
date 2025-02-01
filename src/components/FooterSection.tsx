const FooterSection = () => {
  return (
    <footer className="w-full bg-white/10 text-white py-8 border-t-4 border-customColor-primary relative">
      <div className="container mx-auto px-4">
        <div className="w-full flex flex-col md:flex-row justify-between items-center ">
          <div
            className="bg-customColor-primary w-80 h-14 absolute top-0 left-0"
            style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
          ></div>
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-4">
              <img
                src="https://res.cloudinary.com/dwxnjoocx/image/upload/v1735530211/RedCraft_icon_losi65.png"
                alt="RedCraft Icon"
                className="h-24 w-auto"
              />
              <div className="text-right md:text-left">
                <h2 className="text-2xl font-StylishBold font-bold text-customColor-primary">
                  RedCraft
                </h2>
                <p className="text-sm mt-2 max-w-xs md:text-left">
                  This portfolio showcases projects created from scratch by John
                  Abiel Nicolas. These games, developed in a short period, are
                  made with passion and dedication. They may be simple, but they
                  embody a wealth of knowledge and experience and will continue
                  to grow.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md: justify-end font-Gemsbuck_regular w-full">
            <a
              href="#home_sec"
              className="hover:underline hover:bg-customColor-primary p-4 v-clip-v1 "
            >
              Home
            </a>
            <a
              href="#showcase_sec"
              className="hover:underline hover:bg-customColor-primary p-4 v-clip-v1 "
            >
              Projects
            </a>
            <a
              href="#skills_sec"
              className="hover:underline hover:bg-customColor-primary p-4 v-clip-v1 "
            >
              About
            </a>
            <a
              href="#contact_sec"
              className="hover:underline hover:bg-customColor-primary p-4 v-clip-v1 "
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
