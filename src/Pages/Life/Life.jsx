import React from 'react'

import "./Life.css"
import { Link } from 'react-router-dom'
import { Men } from "../../components/Navbar/NavData"
import { BottomNavbar } from "../../components/Navbar/BottomNavbar";
const Life = () => {
  const data=Men;
  return (
    <div>
       <BottomNavbar data={data} />
        <Link to="/"><div className='lifediv1'>
    
    <img className='lifeimg1' src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW22/BIG_EN/Big_Week3_LIFE_desktop_1_2x_20220530121415.jpg?imwidth=1180&imdensity=1" alt="" />
    </div>
    </Link>


<Link to="/life">

<div><img style={{width:"100%"}} src="https://github.com/Kgaurav113/photo/blob/main/15.06.2022_11.26.02_REC.png?raw=true" alt="" /></div>
</Link>
<div><img src="https://github.com/Kgaurav113/photo/blob/main/15.06.2022_11.29.41_REC.png?raw=true" alt="" /></div>
    </div>
  )
}

export default Life