import "./App.scss";
import { Homepage } from "./components/Homepage";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
function App() {
  return <>
  <Navbar/>
  <Routes>
<Route path="/" element={<Homepage/>}/>
  </Routes>
  </>;
}

export default App;
