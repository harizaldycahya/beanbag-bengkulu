import square from '../assets/img/square.jpg'
const Hero = () => {
    return ( 
        <div className="container">
            <section className="hero1">
            <   div className="text">
                    <h1>Bean<span>Bag</span><br/> Bengkulu<br/><span>Home</span> Decor</h1>
                    <hr/>
                    <button>Visit Our Instagram</button>
                </div>
                <div className="image">
                    <img src={square} alt=""/>
                </div>
            </section>
        </div>
    );
}
 
export default Hero;