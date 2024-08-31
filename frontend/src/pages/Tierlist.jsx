import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Tierlists from "../components/Tierlist/Tierlist";

function Tierlist() {
    document.title = "MVRV Database - Tierlist"
    return(
        <>
        <Navbar/>
        <section>
            <div className="container">
                <Tierlists/>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Tierlist