import landscape from '../assets/img/about.jfif'
import circle_small from '../assets/img/circle.png'
import {motion} from 'framer-motion';
import Footer from "../component/Footer";
const About = () => {
   
    return ( 
        <div className="container">
            <section className="body-2">
                <div className="image">
                    <img src={landscape} alt=""/>
                </div>
                <div className="text">
                    <h1>About <span>Us</span>.
                        <motion.img 
                        initial={{x:'100vw'}}
                        animate={{
                            x:0,
                            transition: {
                                type: 'spring', 
                                duration: 2,
                                bounce: 0.3
                            }
                        }}
                        className='circle_small' src={circle_small} alt=""/>
                    </h1>
                    <span><hr /></span>
                    <h3>Beanbag bengkulu adalah toko yang menjual berbagai macam beanbag dan home decor seperti macrame, rak dinding, bunga, rumput sintetis dan meja yg cocok utk pelengkap beanbag di rumah anda.</h3>
                    <div class="space-2"></div>
                    <a href="https://www.instagram.com/beanbag_bengkulu/" target="_blank"><motion.button whileHover={{rotateX:30}}>Visit Our Instagram</motion.button></a>
                    
                </div>
            </section>
            <div class="space-10"></div>
            <div class="space-10"></div>
            <Footer></Footer>
        </div>
     );
}
 
export default About;