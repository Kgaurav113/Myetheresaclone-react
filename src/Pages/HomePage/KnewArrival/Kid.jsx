

import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const MykidSlider=()=>{
  

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
return(
<div >
<p className="headingof">Kid's New Arrivals</p>
<div className="carousal" style={{height:"200px",marginBottom:"50px"}}><Carousel responsive={responsive}>
    
   
  <div className="crdiv"><img src="https://img.mytheresa.com/560/560/33/jpeg/catalog/product/70/P00657931.jpg" alt=""/>
  <p>GUCCI</p>
  <p><b>€ 749</b></p></div>
 
  <div className="crdiv"><img src="https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b2/P00661234_b1.jpg" alt=""/>
  <p>GUCCI</p>
  <p><b>€ 1749</b></p></div>
  <div className="crdiv"><img src="https://img.mytheresa.com/560/560/33/jpeg/catalog/product/90/P00687511_b1.jpg" alt=""/>
  <p>VALENTINO GARAVANI</p>
  <p><b>€ 149</b></p></div>
  <div className="crdiv"><img src="https://img.mytheresa.com/560/560/33/jpeg/catalog/product/62/P00652017_d2.jpg" alt=""/>
  <p>VALENTINO</p>
  <p><b>€ 759</b></p></div>
  <div className="crdiv"><img src="https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a9/P00684773_b1.jpg" alt=""/>
  <p>GUCCI PARCO</p>
  <p><b>€ 78</b></p></div>
  <div className="crdiv"><img src="https://img.mytheresa.com/560/560/33/jpeg/catalog/product/77/P00650824_b1.jpg" alt=""/>
  <p>VALECREMA</p>
  <p><b>€ 749</b></p></div>
</Carousel>
 <Link to="/kid">
          <p className="viewallof">VIEW All</p></Link> 
          </div>
</div>

)
}





