
import "./MenPage.css"

import "../../components/Navbar/BottomNavbar.css"
import { BottomNavbar } from "../../components/Navbar/BottomNavbar"
import { Men } from "../../components/Navbar/NavData"
import { Mymen1Slider } from "./Men"

import { Link } from "react-router-dom"

export const MenPage = () => {

  const data = Men;
  return (<>
    <BottomNavbar data={data} />
    <div className="container">
      <Link to="/menproducts">
        <div className="mimage">
          {/* <img src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW23/BIG_1_DESKTOP_2x_20220602153104.jpg?imwidth=1180&imdensity=1" /> */}
     
        </div>
      </Link>
      <Mymen1Slider />
      <Link to="/menproducts">
        <div className="mimage1">
          <div className="first1div" ><h1>Pre Fall -2022</h1>
          <p>The new-session collections spotlight crisp cuts and restorative</p>
          <button>Shop Now</button></div>
          <div style={{width:"50%"}}><img style={{width:"100%"}} src="https://img.mytheresa.com/media/static/raw/cms/l/mw_hp_cw23_2022/PREFALL_BIG2_01_DESKTOP_2X_20220613145819.jpg?imwidth=1180&imdensity=1" alt="" /></div>
        </div>
      </Link>
      <Mymen1Slider />
      <Link to="/menproducts">
      <div className="mimage1">
          
          <div style={{width:"50%"}}><img style={{width:"100%"}} src="https://img.mytheresa.com/media/static/raw/cms/l/mw_hp_cw23_2022/PREFALL_BIG2_01_DESKTOP_2X_20220613145819.jpg?imwidth=1180&imdensity=1" alt="" /></div>
          <div className="first1div" ><h1>Pre Fall -2022</h1>
          <p>The new-session collections spotlight crisp cuts and restorative</p>
          <button>Shop Now</button></div> </div>
      </Link>
      {/* <Mymen1Slider/> */}
    </div>

  </>
  )
}