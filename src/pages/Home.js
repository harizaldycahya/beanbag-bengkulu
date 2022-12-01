import Hero from "../component/Hero";
import Body1 from "../component/Body1";
import Body2 from "../component/Body2";
import Footer from "../component/Footer";


const Home = () => {
    return ( 
        <div className="container">
            <div class="space-5"></div>
            <Hero></Hero>
            <div class="space-10"></div>
            <div class="space-10"></div>
            <Body1></Body1>
            <Body2></Body2>
            <Footer></Footer>
            
        </div>
     );
}
 
export default Home;