import { useEffect, useState } from "react";
import Loader from "./components/common/Loader";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
    const [loading, setLoading] = useState(true);


useEffect(() => {

  const timer = setTimeout(() => {
 setLoading(false)
},2500);


  return () => clearTimeout(timer);

}, []);
  return (
    <div className="min-h-screen bg-[#06070B] text-white">
        {loading && <Loader />}

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />

    </div>
  );
}

export default App;