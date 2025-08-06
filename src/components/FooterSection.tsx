import ImageAssets from "./AssetContainer";

              const FooterSection = () => {
                return (
                  <footer className="w-full bg-white/10 text-white py-8 border-t-4 border-customColor-primary relative">
                      <div
                          className="bg-customColor-primary w-40 sm:w-80 h-10 sm:h-14 absolute top-0 left-0"
                          style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
                      ></div>

                    <div className="container mx-auto px-4">

                      <div className="w-full flex flex-col md:flex-row justify-between items-center relative">



                        <div className="mb-4 md:mb-0 w-full md:w-auto z-10">

                          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                            <img
                              src={ImageAssets.Other.logo}
                              alt="RedCraft Icon"
                              className="h-16 sm:h-24 w-auto"
                            />
                            <div className="text-center sm:text-left">
                              <h2 className="text-2xl font-StylishBold font-bold text-customColor-primary">
                                RedCraft
                              </h2>
                              <p className="text-sm mt-2 max-w-xs">
                                This portfolio showcases projects created from scratch by John
                                Abiel Nicolas. These games, developed in a short period, are
                                made with passion and dedication. They may be simple, but they
                                embody a wealth of knowledge and experience and will continue
                                to grow.
                              </p>
                            </div>
                          </div>

                        </div>

                        <div className="flex flex-col sm:flex-row justify-end font-Gemsbuck_regular w-full md:w-auto z-10">
                          <a
                            href="#home_sec"
                            className="hover:underline hover:bg-customColor-primary p-2 sm:p-4 v-clip-v1 text-center"
                          >
                            Home
                          </a>
                          <a
                            href="#showcase_sec"
                            className="hover:underline hover:bg-customColor-primary p-2 sm:p-4 v-clip-v1 text-center"
                          >
                            Projects
                          </a>
                          <a
                            href="#skills_sec"
                            className="hover:underline hover:bg-customColor-primary p-2 sm:p-4 v-clip-v1 text-center"
                          >
                            About
                          </a>
                          <a
                            href="#contact_sec"
                            className="hover:underline hover:bg-customColor-primary p-2 sm:p-4 v-clip-v1 text-center"
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