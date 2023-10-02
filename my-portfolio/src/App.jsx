import styles from "./App.module.css";
import {Navbar}  from "./components/Navbar/Navbar";

import {About}  from "./components/About/About";
import {Experience}  from "./components/Experience/Experience";
import { Projects } from "./components/Project/Projects";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
function App() {


  return (
    <>
     <div className={styles.App}>
       <Navbar/>
       <Hero />
     
       <About id="About" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Contact id="contact" />
       
       </div>
    </>
  )
}

export default App