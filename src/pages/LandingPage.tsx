import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import BestServices from "../components/BestServices";
import FeaturedPosts from "../components/FeaturedPosts";
import Testimonial from "../components/Testimonial";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

function LandingPage() {
    return (
        <>
        <TopBar />
        <NavBar />
        <Hero />
        <FeaturedProducts />
        <BestServices />
        <FeaturedPosts />
        <Testimonial />
        <CallToAction />
        <Footer />
        </>
    )
}

export default LandingPage