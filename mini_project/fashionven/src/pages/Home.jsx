import Navbar from '../components/home/navbar';
import Hero from '../components/home/hero';
import About from '../components/home/about';
import Footer from '../components/home/footer';
import Services from '../components/home/services';
import Price from '../components/home/pricing';
import Contact from '../components/home/contact';

export default function Home() {
    return (

        <>
            <Navbar/>
            <Hero/>
            <Contact/>
            <About/>
            <Services/>
            <Price/>
            <Footer/>
        </>
    )
}