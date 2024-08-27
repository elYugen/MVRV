import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import News from "../components/News/News";

function Stream() {
    document.title = `MVRV Database - Stream`;

    return(
        <>
        <Navbar />
        <section>
            <div className="container">
                <News />
            </div>
        </section>      
        <Footer />
        </>
    );
}

export default Stream