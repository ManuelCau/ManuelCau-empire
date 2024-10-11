import ondaF from "../assets/SVG/OndaF.svg";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="footer-box">
      <img src={ondaF} alt="Onda Footer" className="ondaF"/> 
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
              <Link to="https://www.linkedin.com/in/manuelcau10/">Linkedin</Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/106m_graphix/">Instagram</Link>
            </li>
            <li>
              <Link to="https://github.com/ManuelCau">Github</Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/@manuelcau97">Youtube</Link>
            </li>
            <li>
              <Link to="https://www.paypal.com/paypalme/manuelcau97">PaypalMe!</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
