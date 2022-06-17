import { useState,useEffect } from "react"
import { Link } from 'react-router-dom'
import "./Stickydiv.css"
export const Stickydiv=()=>{

    let [showtext,setshowtext]=useState(true)
   

    let text=setInterval(() => {

        setshowtext(!showtext)
        
        
        clearInterval(text)
    }, 1000);

    let dikhao=(
        <div>{showtext?"Sell:now upto 60% off":"Further reductions"}</div>
    )



    useEffect(()=>{

       dikhao

        
      },[showtext])

    return(

        <Link to="/">
                    <div className="mystickytext">{dikhao}</div>
                </Link>
        
    )
}
