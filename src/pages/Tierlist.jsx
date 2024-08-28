import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Tierlist from "../components/Tierlist/Tierlist.jsx"

function Home() {
    document.title = "MVRV Database - Tierlist";

    return(
        <>
        <Navbar />
        <section>
            <div className="container">
                <Tierlist />
            </div>
        </section>    
        <Footer />
        </>
    );
}

export default Home