import React from "react";
import "./Story.css";
const Story = () => {
  return (
    <div>
      <div className="storyimg1">
        <img className="strimg1"
          src="https://img.mytheresa.com/media/static/raw/cms/l/STORIES_2022/GIAMBATTISTAVALLI_EXCLUSIVE/LPStories-Giambattista_Big_DSK_2x_20220602152453.jpg?imwidth=1180&imdensity=1"
          alt=""
        />
        <div className="storypara">
          <p>GIAMBATTISTA VALLI X MYTHERESA</p>
          <button className="btnstory">Discover..</button>
        </div>
      </div>
      <div className="storygrid">
        <div>
          <img
            className="imgstory"
            src="https://img.mytheresa.com/media/static/raw/cms/l/STORIES_2022/DOLCEGABBANA_LEMON/2x/LPStories-D_G_DSK_2x_20220516170253.jpg?imwidth=1180&imdensity=1"
            alt=""
          />
          <div className="storypara">
            <p>DRIES VAN NOTEN X MYTHERESA</p>
            <button className="btnstory">Discover..</button>
          </div>
        </div>
        <div>
          <img
            className="imgstory"
            src="https://img.mytheresa.com/media/static/raw/cms/l/STORIES_2022/BEACHWEAR_EXCLUSIVES/2x/LPStories-Beachwear_DSK_2x_20220516170539.jpg?imwidth=1180&imdensity=1"
            alt=""
          />
          <div className="storypara">
            <p>BEACHWEAR EXCLUSIVES</p>
            <button className="btnstory">Discover..</button>
          </div>
        </div>
        <div>
          <img
            className="imgstory"
            src="https://img.mytheresa.com/media/static/raw/cms/l/STORIES_2022/LANDINGPAGE_MAY22/2x/LPStories-May22_small_desktop_01_x2_20220504175555.jpg?imwidth=1180&imdensity=1"
            alt=""
          />
          <div className="storypara">
            <p>DOLCE&GABBANA X MYTHERESA</p>
            <button className="btnstory">Discover..</button>
          </div>
        </div>
        <div>
          <img
            className="imgstory"
            src="https://img.mytheresa.com/media/static/raw/cms/l/STORIES_2022/DG_CASA/LP_NEW/LP_Stories_D_G_Casa_desktop_2x_20220607152530.jpg?imwidth=1180&imdensity=1"
            alt=""
          />
          <div className="storypara">
            <p>DOLCE&GABBANA CASA</p>
            <button className="btnstory">Discover..</button>
          </div>
        </div>


      </div>
      
      <div className="storybuttomdiv">
            <div><img className="storybtmimg" src="https://img.mytheresa.com/media/static/raw/cms/l/STORIES_2022/SISLEY/2x/Carousel_update_desk_2x_20220413130614.jpg?imwidth=1180&imdensity=1" alt=""/>
            <p>BRAND COLLABORATIONS</p></div>
            <div><img className="storybtmimg" src="https://img.mytheresa.com/media/static/raw/cms/l/STORIES_2022/LOROPIANA_EVENT/Carousel_LoroPiana_Event_DSK_2x_20220531170450.jpg?imwidth=1180&imdensity=1" alt=""/>
            <p>EXPERIENCES</p></div>
            <div><img className="storybtmimg" src="https://img.mytheresa.com/media/static/raw/cms/l/STORIES_2022/LANDINGPAGE_JAN21/LPStories_Carousel_Desktop_3_2x_20220117135526.jpg?imwidth=1180&imdensity=1" alt=""/>
            <p>MUSIC & PODCASTS</p></div>
            <div><img className="storybtmimg" src="https://img.mytheresa.com/media/static/raw/cms/l/STORIES_2022/LANDINGPAGE_MAY22/2x/LPStories-May22_Carousel_Desktop_04_x2_20220504175550.jpg?imwidth=1180&imdensity=1" alt=""/>
            <p>MYTHERESA CAMPAIGNS</p></div>

        </div>
    </div>
  );
};

export default Story;
