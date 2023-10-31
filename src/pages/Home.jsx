import Category from "../components/Category"
import Coupon from "../components/Coupon"
import Deals from "../components/Deals"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Membership from "../components/Membership"
import NewsLetter from "../components/NewsLetter"
import Working from "../components/Working"

const Home = () => {
  return (
    <>
        <Header/>
        <Hero />
        <Coupon />
        <Deals />
        <Category />
        <Membership />
        <NewsLetter />
        <Working />
        <Footer />
    </>
  )
}

export default Home
