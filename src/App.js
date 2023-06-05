import Footer from "./component/Footer";
import Hero from "./component/Hero";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Tours from "./component/Tours";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
