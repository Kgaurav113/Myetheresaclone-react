import { Footer } from "./components/Footer/Footer"
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./Pages/HomePage/Home"
import { LoginAndRegister } from "./Pages/LogIn/LoginAndRegister"
import { WomenPage } from "./Pages/women/WomenPage"
import { WomenProducts } from "./Pages/women/WomenProducts"
import { MenProducts } from "./Pages/MenPage/MenProducts"
import { MenPage } from "./Pages/MenPage/MenPage"
import Story from "./Pages/story/Story"
import Card from "./Pages/CartPage/components/Card"
import './App.css'
import MainCart from "./Pages/cart/MainCart"
import { Payment } from "./Pages/PaymentPage/Payment"
import Life from "./Pages/Life/Life"
import Kid from "./Pages/Kid/Kid"
// import { Test } from "./Pages/Test"


function App() {

  return (
    <div>
      {process.env.REACT_APP_BASE_URL}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/women" element={<WomenPage />}></Route>
        <Route path="/womenproducts" element={<WomenProducts />}></Route>
        <Route path="/men" element={<MenPage />}></Route>
        <Route path="/menproducts" element={<MenProducts />}></Route>
        <Route path="/login" element={<LoginAndRegister />}></Route>
        <Route path="/product/women/:id" element={<Card link={"womensdata"} />}></Route>
        <Route path="/product/men/:id" element={<Card link={"mendata"} />}></Route>
        <Route path="/cart" element={<MainCart />}></Route>
        <Route path="/Paymentgateway" element={<Payment />}></Route>
         <Route path="/story" element={<Story />}></Route> 
         <Route path="/life" element={<Life />}></Route> 
         <Route path="/kid" element={<Kid />}></Route> 
      </Routes>
      <Footer />
    </div >
  )
}

export default App
