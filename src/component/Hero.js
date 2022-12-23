import header from '../assets/img/header.png'
import circle_up from '../assets/img/circle.png'
import {motion} from 'framer-motion';
const Hero = () => {
  
    return ( 
        <div className="container">
            <section className="hero1">
                <div className="text">
                    <b>
                        <h1>Bean<span>bag</span> Bengkulu
                        </h1>
                    </b>
                    <span><hr /></span>
                    <h3>Recognizing the need is the primary condition for design.</h3>
                    <div class="space-2"></div>
                    <a href="https://www.instagram.com/beanbag_bengkulu/"><motion.button whileHover={{rotateX:30}}>Visit Our Instagram</motion.button></a>
                </div>
                <div className="image">
                    <img src={header} alt=""/>
                </div>
                <motion.img className='circle_up' src={circle_up} alt=""
                initial={{x:'-100vw'}}
                animate={{
                    x:0,
                    transition: {
                        type: 'spring', 
                        duration: 2,
                        bounce: 0.3
                    }
                }}
                /> 
            </section>
        </div>
    );
}
 
export default Hero;