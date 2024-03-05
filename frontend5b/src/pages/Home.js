import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import Hero from './LandingPage/Hero/Hero';
import Allgenre from './LandingPage/Allgenre/Allgenre'

function Home() {
    return ( 
        <div>
            <NavBar>
                
            </NavBar>
            <Hero></Hero>
            <Allgenre></Allgenre>
            <ProductList></ProductList>
            
            <Footer></Footer>
        </div>
     );
}

export default Home;