import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './MiddleNavbar.css'
export const MiddleNavbar = () => {
    const cart = useSelector((store) => store.cart)
    return (
        <div className='MiddleNavbar'>
            <div className="MiddleNavbarLogo">
                <Link to="/">
                    <img src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220420T172422" />
                </Link>
            </div>
            <div className='Cart'>
                <Link to="/cart">
                    <span>SHOPPING BAG</span>
                    <span className='CartIcon'>{cart.length}</span>
                </Link>

            </div>
        </div>
    )
}