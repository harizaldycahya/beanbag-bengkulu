import square from '../assets/img/square.jpg'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="container">
            <section className="navbar-1">
                <div className="image">
                    <img src={square} alt=""/>
                </div>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/instagram">Instagram</Link>
                </div>
                
            </section>
        </div>
     );
}
 
export default Navbar;