import NavBar from "./components/NavBar";
import IntroSection from "./components/IntroSection";
import ShowcaseSection from "./components/ShowcaseSection";
import InfoSection from "./components/InfoSection";
import MessageForm from "./components/MessageForm";
import FooterSection from "./components/FooterSection";
import { Route, Routes } from "react-router-dom";
import Game from "./pages/Game"; // Updated import path

function AppBody() {
  return (
    <>
      <IntroSection />
      <ShowcaseSection />
      <InfoSection />
      <MessageForm />
    </>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AppBody />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
      <FooterSection />
    </>
  );
}

export default App;
