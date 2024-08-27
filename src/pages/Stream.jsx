import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Embed from "../components/Embed/Embed";

function Stream() {
    document.title = `MVRV Database - Stream`;

    return(
        <>
        <Navbar />
        <section>
            <Embed />
        </section>      
        <Footer />
        </>
    );
}

export default Stream