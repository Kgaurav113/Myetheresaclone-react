import { TopNav } from "./TopNav"
import './Navbar.css'
import { MiddleNavbar } from "./MiddleNavbar"
// import { BottomNavbar } from "./BottomNavbar"

export const Navbar = () => {
    return <div className="Navbar">
        <TopNav />
        <MiddleNavbar />
         {/* <BottomNavbar/>  */}
    </div>
}