import { CodeBannerHome } from "./CodeBannerHome";
import { ContactForm } from "./ContactForm";
import { GraphicBannerHome } from "./GraphicsBannerHome";
import { HomeBanner } from "./HomeBanner";
import { Waves } from "./Waves";

export function Homepage() {
  return (
    <div className="back-home">
      <div>
        <HomeBanner />
        <Waves />
      </div>
      <div className="home-banners">
        <GraphicBannerHome />
        <CodeBannerHome />
      </div>
      <ContactForm/>
    </div>
  );
}
