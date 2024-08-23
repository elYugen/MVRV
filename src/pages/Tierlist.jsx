import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Caramel from "../components/TierList/Tier";

function Home() {
    document.title = "MVRV Database - Tierlist";

    return(
        <>
        <Navbar />
        <Caramel/>
        <Footer />
        </>
    );
}

export default Home