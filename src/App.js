import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";

import Experience from "./components/experience/Experience";
import Temoignage from "./components/temoignage/Temoignage";

function App() {
  return (
    <div className="">
      <Header />
      <Nav />
      <About />
      <Experience />
     
      <Portfolio />
      <Temoignage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
