import square from '../assets/img/logo.png';
import background from '../assets/img/footer.svg'
import {Link} from 'react-router-dom';
import{motion} from 'framer-motion';
const Footer = () => {
    return ( 
        <div className="container" style={{backgroundImage: `url(${background})`}}>
            <div class="space-10"></div>
            <div class="space-10"></div>
            <section className="footer-1">
                <div className="image">
                    <img src={square} alt=""/>
                </div>
                <div className="links">
                    <h3>Menus.</h3>
                    <Link to="/"><motion.p whileHover={{x:-10}}>Home.</motion.p></Link>
                    <Link to="/about"><motion.p whileHover={{x:-10}}>About.</motion.p></Link>
                    <Link to="/contact"><motion.p whileHover={{x:-10}}>Contact.</motion.p></Link>
                </div>
                <div className="links">
                    <h3>Social Media.</h3>
                    <a href="https://www.instagram.com/beanbag_bengkulu/" target="_blank"><motion.p whileHover={{x:-10}}>Instagram.</motion.p></a>
                    <Link href=""><motion.p whileHover={{x:-10}}>Facebook.</motion.p></Link>
                    <Link href=""><motion.p whileHover={{x:-10}}>Twitter.</motion.p></Link>
                </div>
            </section>
            <b className='copyright'>
                <p>&copy; Beanbag Bengkulu </p>
            </b>
            
        </div>
     );
}
 
export default Footer;