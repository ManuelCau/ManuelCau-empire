import { Link } from "react-router-dom";
import { Onda } from "./Onda";

export function Navbar() {
  return (
    <div className="head">
      <div className="nav-wave">
      <Onda/>
      </div>
      <div>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About me</Link>
            </li>
            <li>
              <Link to="/">Graphics</Link>
            </li>
            <li>
              <Link to="/">Coding</Link>
            </li>
            <li>
              <Link to="/">Contacts</Link>
            </li>
          </ul>
          <div className="nav-line"></div>
        </div>
      </div>
    </div>
  );
}
