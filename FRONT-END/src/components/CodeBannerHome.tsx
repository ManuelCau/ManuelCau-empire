import codeImage from "../assets/IMG/codeIMG.jpg";
import { Link } from "react-router-dom";

export function CodeBannerHome() {
  return (
    <div className="code-banner-home">
      <img src={codeImage} alt="img banner coding" />
      <button className="c-button">
        <Link to="/">Show more</Link>{" "}
      </button>
    </div>
  );
}
