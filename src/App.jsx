import Topbar from "./components/topbar/Topbar";
 import Intro from "./components/intro/Intro"
 import Portfolio from "./components/portfolio/Portfolio"
 import Copyright from "./components/copyright/Copyright"
 import Contact from "./components/contact/Contact"
import { useState } from "react";
import Menu from "./components/menu/Menu";



function App() {
  
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">

     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
     
       <Intro/>
       <Portfolio/>
       <Contact/>
       <Copyright/>
     </div>
    </div>
  );
}

export default App;
