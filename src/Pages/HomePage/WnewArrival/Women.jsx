import "./Women.css";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const MywomenSlider=()=>{
  

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
<div style={{height:"500px"}}>
<p className="headingof">Women's New Arrivals</p>
<div className="carousal" style={{height:"200px",marginBottom:"50px"}}><Carousel responsive={responsive}>
    
   
  <div className="crdiv"><img src="https://img.mytheresa.com/560/560/33/jpeg/catalog/product/24/P00680598_b1.jpg" alt=""/>
  <p>GUCCI</p>
  <p><b>€ 749</b></p></div>
 
  <div className="crdiv"><img src="https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2d/P00709954_b1.jpg" alt=""/>
  <p>GUCCI</p>
  <p><b>€ 1749</b></p></div>
  <div className="crdiv"><img src="https://img.mytheresa.com/560/560/33/jpeg/catalog/product/90/P00687511_b1.jpg" alt=""/>
  <p>VALENTINO GARAVANI</p>
  <p><b>€ 149</b></p></div>
  <div className="crdiv"><img src="https://img.mytheresa.com/560/560/33/jpeg/catalog/product/69/P00692653_b1.jpg" alt=""/>
  <p>VALENTINO</p>
  <p><b>€ 759</b></p></div>
  <div className="crdiv"><img src="https://img.mytheresa.com/560/560/33/jpeg/catalog/product/7e/P00676029_b1.jpg" alt=""/>
  <p>GUCCI PARCO</p>
  <p><b>€ 78</b></p></div>
  <div className="crdiv"><img src="https://img.mytheresa.com/560/560/33/jpeg/catalog/product/05/P00695994_b1.jpg" alt=""/>
  <p>VALECREMA</p>
  <p><b>€ 749</b></p></div>
</Carousel>
 <Link to="/women">
          <p className="viewallof">VIEW All</p></Link> 
          </div>
</div>

)
}





