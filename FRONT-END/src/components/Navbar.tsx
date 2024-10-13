import { Link } from "react-router-dom";
import { Onda } from "./Onda";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="head">
      <div className="nav-wave">
        <Onda />
      </div>

      {/*  Hamburger menù */}
      <div className="hamburger-menu">
        <button onClick={handleToggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="white"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </button>
        {isOpen && (
          <ul
            style={{
              transition:"width 2s, height 2s",
              position: "absolute",
              top: "180px",
              right: "10px",
              backgroundColor: "rgba(9, 21, 51, 0.747)",
              padding: "20px",
              borderRadius: "10px",
              
            }}
          >
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
        )}
      </div>

      {/* Nav desktop */}
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
