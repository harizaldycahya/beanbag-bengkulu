import square from '../assets/img/square.jpg'
import blob1 from '../assets/img/blob (1).svg'

const Hero = () => {
    return ( 
        <div className="container">
            <section className="hero1">
                <div className="text">
                    <h1>Bean<span>Bag</span><br/> Bengkulu<br/><span>Home</span> Decor
                    </h1>
                    <hr/>
                    <button>Visit Our Instagram</button>
                    
                </div>
                <div className="image">
                    <img src={square} alt=""/>
                </div>
                <img className='background' src={blob1} alt=""/> 
            </section>
        </div>
    );
}
 
export default Hero;