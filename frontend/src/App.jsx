import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Contact />
    </div>
  );
}

export default App;
