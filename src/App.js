import About from "./components/About/About";
import C2A from "./components/C2A/C2A";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      {/* themes */}
      <Pricing />
      <C2A />
      <Footer />
      {/* mobile responsiveness - navbar, hero */}
    </div>
  );
}

export default App;
