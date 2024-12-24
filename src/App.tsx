import NavBar from "./components/NavBar";
import SectionCard from "./components/SectionCard";

function App() {
  return (
    <>
      <NavBar />

      <SectionCard
        screenHeight={true}
        tag="home_sec"
        bgImage="src/assets/landing_bg.jpg"
        bgColor="#b80828"
      >
        {/* <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center bg-transparent -z-0">
          <h1 className="absolute font-Gemsbuck_bold text-[15rem] text-white/20">
            RedCraft
          </h1>
        </div>

        <div className=" text-right transform skew-y-6">
          <h3 className="font-bold text-2xl">Hi, I am Hatah!</h3>
          <h1 className="font-Gemsbuck_bold text-4xl">A Game Developer</h1>
        </div>

        <div className="z-30">
          <img src="src/assets/sukuna.png" alt="profile picture" />
        </div> */}
      </SectionCard>

      <SectionCard screenHeight={true} tag="showcase_sec">
        <h1>See my games here</h1>
      </SectionCard>

      <SectionCard screenHeight={true} tag="skills_sec">
        <h1>And here is my skills</h1>
      </SectionCard>

      <SectionCard screenHeight={true} tag="contact_sec">
        <h1>Message me by filling up this form</h1>
      </SectionCard>
    </>
  );
}

export default App;
