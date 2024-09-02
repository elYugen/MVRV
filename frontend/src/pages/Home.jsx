import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import News from "../components/News/News";

function Home() {
    document.title = `MVRV Database - Accueil`;

    return(
        <>
        <Navbar />
        <section>
            <h1>Bienvenue sur MVRV Database</h1>
            <div className="container">
                <News />
            </div>
        </section>      
        <Footer />
        </>
    );
}

export default Home