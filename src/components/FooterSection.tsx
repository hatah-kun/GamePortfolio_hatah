const FooterSection = () => {
  return (
    <footer className="bg-white/10 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-4">
              <img
                src="https://res.cloudinary.com/dwxnjoocx/image/upload/v1735530211/RedCraft_icon_losi65.png"
                alt="RedCraft Icon"
                className="h-24 w-auto"
              />
              <div>
                <h2 className="text-2xl font-StylishBold font-bold text-customColor-primary">
                  RedCraft
                </h2>
                <p className="text-sm mt-2 max-w-xs text-center md:text-left">
                  This portfolio showcases projects created from scratch by John
                  Abiel Nicolas. These games, developed in a short period, are
                  made with passion and dedication. They may be simple, but they
                  embody a wealth of knowledge and experience and will continue
                  to grow.
                </p>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 font-Gemsbuck_regular">
            <a href="#home_sec" className="hover:underline">
              Home
            </a>
            <a href="#showcase_sec" className="hover:underline">
              Projects
            </a>
            <a href="#skills_sec" className="hover:underline">
              About
            </a>
            <a href="#contact_sec" className="hover:underline">
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
