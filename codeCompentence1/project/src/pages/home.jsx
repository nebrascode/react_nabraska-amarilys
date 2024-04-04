import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Footer from '../components/footer';
import Services from '../components/services';
import Price from '../components/pricing';
import Contact from '../components/contact';

export default function Home() {
    return (

        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Services></Services>
            <Price></Price>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}