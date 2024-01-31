import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />;
    </div>
  );
}

export default App;
