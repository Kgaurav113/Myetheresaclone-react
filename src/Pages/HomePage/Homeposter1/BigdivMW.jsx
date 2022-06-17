import { Link } from 'react-router-dom'
import "./BigdivMW.css"

export const BigdivMW = () => {
    return (
       
        <div className="myimg">

            <div className="mwDiv"><Link to="women">Womens</Link></div>
            <div className="mwDiv"><Link to="men">Men</Link></div>
        </div>

    )

}