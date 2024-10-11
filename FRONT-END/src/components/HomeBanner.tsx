import bannerPic from "../assets/IMG/ManuelPic.png";
import { Link } from "react-router-dom";
export function HomeBanner() {
  return (
    <div className="banner">
      <div className="caption-banner">
        <p>
          Since 2016, I have built a solid experience in graphic design,
          developing creative and visually impactful solutions. Recently, I
          completed my journey as a FullStack Developer with DevelHope,
          expanding my technical skills to design and build dynamic and
          functional web applications. In addition to graphic design, I work on
          3D modeling and printing using tools like Blender and Fusion 360,
          offering innovative and customized solutions. My goal is to combine
          creativity and technology to develop complete projects, from concept
          to execution, with attention to detail and the client's needs.
        </p>

        <button>
          <Link to="/">Show more</Link>
        </button>
      </div>
      <img src={bannerPic} alt="profile photo Manuel" />
    </div>
  );
}
