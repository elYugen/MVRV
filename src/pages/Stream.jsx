import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TwitchEmbed from "../components/Embed/Embed";
import Logo from "../components/Embed/Logo";


function Stream() {
    document.title = `MVRV Database - Stream`;

    return(
        <>
        <Navbar />
        <section>
            <TwitchEmbed />
        </section>      
        <Logo/>
        <Footer />
        </>
    );
}

export default Stream