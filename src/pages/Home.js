import Hero from "../component/Hero";
import Cards1 from "../component/Cards1";
import Body1 from "../component/Body1";
import Body2 from "../component/Body2";
import Footer from "../component/Footer";


const Home = () => {
    return ( 
        <div className="container">
            <Hero></Hero>
            <div class="space-10"></div>
            <div class="space-10"></div>
            <Body2></Body2>
            <div class="space-10"></div>
            <div class="space-10"></div>
            <Cards1></Cards1>
            <div class="space-10"></div>
            <div class="space-10"></div>
            <Body1></Body1>
            <Footer></Footer>
            
        </div>
     );
}
 
export default Home;