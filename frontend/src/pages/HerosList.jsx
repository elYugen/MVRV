import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroList from "../components/HeroList/HeroList"

function Perso() {
    return(
        <>
        <Navbar/>
        <section>
            <div className="container">
                <HeroList/>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Perso