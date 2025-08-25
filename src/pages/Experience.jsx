import Navbar from "../components/Navbar";
import ExpCard from '../components/ExpCard';
import ExpCards from '../components/ExpCards';
import Footer from "../components/Footer";
// import LogoTransparent from "../assets/LogoTransparent.png";

const Experience = () => {
    return(
        <div>
            {/* <header>
                <img src={LogoTransparent} alt="asdf" />
            </header> */}
            <Navbar></Navbar>
            <ExpCards></ExpCards>
            <Footer></Footer>
        </div>


    );
}

export default Experience