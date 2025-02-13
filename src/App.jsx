import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Destination from "./components/Destination";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Wa from "./assets/img/app.png";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="features">
          <Features />
        </div>

        <div id="destination">
          <Destination />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>
      <span className="fabContainer">
        <a href={`https://wa.me/263783581617`}>
          <img src={Wa} alt="" className="fab" />
        </a>
      </span>
      <Footer />
    </div>
  );
};

export default App;
