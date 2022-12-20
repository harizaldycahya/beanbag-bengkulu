import header from '../assets/img/header.png'
import circle_up from '../assets/img/circle.png'
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer'
const Hero = () => {
    const {ref, inView} = useInView();
    return ( 
        <div className="container">
            <section ref={ref} className="hero1">
                <motion.div onScroll={{rotateX:20}} className="text">
                    <b>
                        <h1>Bean<span>bag</span> Bengkulu
                        </h1>
                    </b>
                    <span><hr /></span>
                    <h3>Recognizing the need is the primary condition for design.</h3>
                    <div class="space-2"></div>
                    <button>Visit Our Instagram</button>
                </motion.div>
                <div className="image">
                    <img src={header} alt=""/>
                </div>
                <img className='circle_up' src={circle_up} alt=""/> 
            </section>
        </div>
    );
}
 
export default Hero;