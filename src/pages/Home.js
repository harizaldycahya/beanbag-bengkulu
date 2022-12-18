import Hero from "../component/Hero";
import Body1 from "../component/Body1";
import Body2 from "../component/Body2";
import Footer from "../component/Footer";


const Home = () => {
    return ( 
        <div className="container">
            <div class="space-10"></div>
            <Hero></Hero>
            <div class="space-10"></div>
            <div class="space-10"></div>
            <div class="space-10"></div>
            <Body1></Body1>
            <div class="space-10"></div>
            <div class="space-10"></div>
            <Body2></Body2>
            <div class="space-10"></div>
            <div class="space-10"></div>
            <Footer></Footer>
            
        </div>
     );
}
 
export default Home;