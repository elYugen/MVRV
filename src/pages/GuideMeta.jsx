import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BootstrapCarousel from "../components/Guide/Guide";


function Guide() {
    return(
        <>
        <Navbar />
        <section>
        <BootstrapCarousel></BootstrapCarousel>   
        </section>
        
        <Footer />
        </>
    );
}

export default Guide