import { BigdivKid } from "./Homeposter1/BigdivKid";
import { BigdivMW } from "./Homeposter1/BigdivMW";
import { MykidSlider } from "./KnewArrival/Kid";
import { MymenSlider } from "./MnewArrival/Men";
// import { Navbar } from "./HomePage/Navbar/Navbar"
import { Stickydiv } from "./Sticky wraper/Stickydiv";
import { MywomenSlider } from "./WnewArrival/Women";
import { Hrline } from "./Navbar/Hrline";

import "./Home.css";

export const Home = () => {
  return (
    <div>
      <Hrline />
      <br />
      <Stickydiv />
      <BigdivMW />
      <BigdivKid />
      <div className="sliddivhome">
        {" "}
        <MywomenSlider />
      </div>
      <div className="sliddivhome">
        <MymenSlider />
      </div>
      <div className="sliddivhome">
        <MykidSlider />
      </div>
    </div>
  );
};
