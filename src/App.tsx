import { useState } from "react";
import { Layout } from "./components/Layout";
import { HomeView } from "./components/HomeView";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {
  const [activeView, setActiveView] = useState("home");

  return (
    <Layout activeView={activeView} setActiveView={setActiveView}>
      {activeView === "home" && <HomeView setActiveView={setActiveView} />}
      {activeView === "about" && <About />}
      {activeView === "skills" && <Skills />}
      {activeView === "projects" && <Projects />}
    </Layout>
  );
}

export default App;
