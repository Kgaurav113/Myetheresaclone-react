import React from "react";
import "./Kid.css";
import { Link } from "react-router-dom";
import { BottomNavbar } from "../../components/Navbar/BottomNavbar";
import { Kids } from "../../components/Navbar/NavData"
const Kid = () => {
  const data = Kids;
  return (
    <div>
  <BottomNavbar data={data} />
      <Link to="/menproducts">
        <div className="kiddiv1">
          <div className="kidflex">
            <div className="kidpicdiv1">
              <img
                src="https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_June/Kids_Homepage_KidsSS2_A_Desktop_2x_20220602102257.jpg?imwidth=1180&imdensity=1"
                alt=""
              />
              <div className="kid1para">  <h1>Girl</h1>
              <button>Shop Now</button></div>
            
            </div>
            <div className="kidpicdiv1">
              <img
                src="https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_June/Kids_Homepage_B_KidsSS2_Desktop_2x_20220602102256.jpg?imwidth=1180&imdensity=1"
                alt=""
              />
              <div  className="kid1para"><h1>Boy</h1>
              <button>Shop Now</button></div>
              
            </div>
          </div>
        </div>
      </Link>
      <Link to="/menproducts">   <div className="kiddiv2"><img src="https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_June/Homepage_Kids_BabyBanner_desktop_2x_20220602092439.jpg?imwidth=1180&imdensity=1" alt="" />
      <div className="div21"><p>Baby</p>
      <button className="div21btn">Shop Now</button></div></div></Link>
   <div><img src="https://github.com/Kgaurav113/photo/blob/main/15.06.2022_11.41.30_REC.png?raw=true" alt="" /></div>
    </div>
  );
};

export default Kid;
