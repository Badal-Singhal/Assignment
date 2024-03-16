import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import BlockContent from "./Components/BlockContent";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="body">
        <HeroSection />
      </div>
      <div>
        <BlockContent />
      </div>
      <Footer/>
    </>
  );
}

export default App;
