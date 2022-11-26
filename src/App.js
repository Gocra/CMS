import About from "./components/About/About";
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
      <Footer />
    </div>
  );
}

export default App;
