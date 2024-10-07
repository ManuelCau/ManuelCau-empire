import ondaF from "../assets/SVG/OndaF.svg";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="footer-box">
      <img src={ondaF} alt="Onda Footer" /> 
      <div className="footer">
        <div className="explore">
          <p>Explore</p>
          <ul>
            <li>
              <Link to="/">About me</Link>
            </li>
            <li>
              <Link to="/">Graphics</Link>
            </li>
            <li>
              <Link to="/">Coding</Link>
            </li>
          </ul>
        </div>

        <div className="contacts">
          <p>Contacts</p>
          <ul>
            <li>
              <Link to="/">Linkedin</Link>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li>
              <Link to="/">Github</Link>
            </li>
            <li>
              <Link to="/">Youtube</Link>
            </li>
            <li>
              <Link to="/">PaypalMe!</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
