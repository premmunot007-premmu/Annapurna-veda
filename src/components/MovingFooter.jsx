import LogoLoop from './LogoLoop';
import a1  from '../assets/movingFooter/Example-1.png' 
import  a2 from '../assets/movingFooter/Example-2.png' 
import  a3 from '../assets/movingFooter/Example-3.png' 
import a4  from '../assets/movingFooter/ABDM.png' 
import  a5 from '../assets/movingFooter/E-sanjeevani.png' 
import a6  from '../assets/movingFooter/GOI.png' 
import a7  from '../assets/movingFooter/imageedit_14_5941579586.png' 
import a8  from '../assets/movingFooter/NMC.png' 
import  a9 from '../assets/movingFooter/PM-JAY.png' 






const techLogos = [
  { type: "img", src:`${a1}`, alt: "My Logo" },
  { type: "img", src:`${a2}`, alt: "My Logo" },
  { type: "img", src:`${a3}`, alt: "My Logo" },
  { type: "img", src:`${a4}`, alt: "My Logo" },
  { type: "img", src:`${a5}`, alt: "My Logo" },
  { type: "img", src:`${a6}`, alt: "My Logo" },
  { type: "img", src:`${a7}`, alt: "My Logo" },
  { type: "img", src:`${a8}`, alt: "My Logo" },
  { type: "img", src:`${a9}`, alt: "My Logo" }
];


// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "src/assets/movingFooter/Example-1.png" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

function MovingFooter() {
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

export default MovingFooter;