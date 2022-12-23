import square from '../assets/img/logo.png'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
const Navbar = () => {
    return ( 
        <div className="container">
            <section className="navbar-1">
                <div className="image">
                    <img src={square} alt=""/>
                </div>
                <div className="links">
                    <Link to="/"><motion.h3 whileHover={{y:-10}}>Home</motion.h3></Link>
                    <Link to="/about"><motion.h3 whileHover={{y:-10}}>About</motion.h3></Link>
                    <Link to="/contact"><motion.h3 whileHover={{y:-10}}>Contact</motion.h3></Link>
                    <a href="https://www.instagram.com/beanbag_bengkulu/"><motion.h3 whileHover={{y:-10}}>Instagram</motion.h3></a>
                </div>
                
            </section>
        </div>
     );
}
 
export default Navbar;