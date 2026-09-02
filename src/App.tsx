import { useState } from "react";
import { Layout } from "./components/Layout";
import { HomeView } from "./components/HomeView";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Feats } from "./components/Feats";
import { Contact } from "./components/Contact";

function App() {
  const [activeView, setActiveView] = useState("home");

  return (
    <Layout activeView={activeView} setActiveView={setActiveView}>
      {activeView === "home" && <HomeView setActiveView={setActiveView} />}
      {activeView === "about" && <About />}
      {activeView === "skills" && <Skills />}
      {activeView === "projects" && <Projects />}
      {activeView === "experience" && <Experience />}
      {activeView === "feats" && <Feats />}
      {activeView === "contact" && <Contact />}
    </Layout>
  );
}

export default App;
