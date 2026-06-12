import LogoLoop from './LogoLoop';
import q from "../assets/MovingHeaderLogos/amla.jpeg"
import w  from "../assets/MovingHeaderLogos/ashwagandha.jpeg"
import e from "../assets/MovingHeaderLogos/boswellia.jpeg"
import r from "../assets/MovingHeaderLogos/brahmi.jpeg"
import t from "../assets/MovingHeaderLogos/mint.jpeg"
import y from  "../assets/MovingHeaderLogos/mulethi.jpeg"
import u  from  "../assets/MovingHeaderLogos/turmeric.jpeg"

const techLogos = [
  { type: "img", src: `${q}`, alt: "My Logo" },
  { type: "img", src:`${w}` , alt: "My Logo" },
  { type: "img", src:`${e}` , alt: "My Logo" },
  { type: "img", src:`${r}` , alt: "My Logo" },
  { type: "img", src:`${t}` , alt: "My Logo" },
  { type: "img", src:`${y}`, alt: "My Logo" },
  { type: "img", src:`${u}` , alt: "My Logo"}
];


// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "src/assets/movingFooter/Example-1.png" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

function MovingHeader() {
  return (
    <div style={{ height: '70px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default MovingHeader;