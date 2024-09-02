import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Stream from "../components/Stream/Stream"

function Streaming() {
    return(
        <>
        <Navbar/>
        <section>
            <div className="container">
                <Stream/>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Streaming