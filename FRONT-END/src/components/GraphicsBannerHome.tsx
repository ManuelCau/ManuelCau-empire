import graphicsImage from "../assets/IMG/LIQUIDO never meant.jpg";
import { Link } from "react-router-dom";

export function GraphicBannerHome() {
  return (
    <div className="graphic-banner-home">
      <img src={graphicsImage} alt="img banner graphics" />
      <button className="g-button"><Link to="/">Show more</Link> </button>
    </div>
  );
}
