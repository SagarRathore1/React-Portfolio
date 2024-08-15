import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./components/About"
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import { PROJECTS } from "./constants/content";
import Projects from "./components/Projects";





import Contact from "./components/contact";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-300  selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
      </div>
      </div>
      
      

      <div className="container mx-auto px-8 "></div>
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experience/>
      <Projects/>
      <Contact/>
   
    </div>
  )
}

export default App
