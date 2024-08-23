import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Home() {
    document.title = "MVRV Database - Tierlist";

    return(
        <>
        <Navbar />
        <Footer />
        </>
    );
}

export default Home