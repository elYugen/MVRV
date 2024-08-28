import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card"

function Perso() {
    return(
        <>
        <Navbar />
        <section>
            <h1>Bienvenue sur MVRV Database</h1>
            <div className="container">
                <Card />
            </div>
        </section>    
        <Footer />
        </>
    );
}

export default Perso