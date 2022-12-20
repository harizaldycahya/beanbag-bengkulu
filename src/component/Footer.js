import square from '../assets/img/square.jpg';
import {Link} from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className="container">
            <section className="footer-1">
                <div className="image">
                    <img src={square} alt=""/>
                </div>
                <div className="links">
                <h3>Lorem.</h3>
                    <Link href="">Lorem.</Link>
                    <Link href="">Lorem.</Link>
                    <Link href="">Lorem.</Link>
                </div>
                <div className="links">
                <h3>Lorem.</h3>
                    <Link href="">Lorem.</Link>
                    <Link href="">Lorem.</Link>
                    <Link href="">Lorem.</Link>
                </div>
                <div className="links">
                <h3>Lorem.</h3>
                    <Link href="">Lorem.</Link>
                    <Link href="">Lorem.</Link>
                    <Link href="">Lorem.</Link>
                </div>
            </section>
            <hr/>
            <p>&copy; Harizaldy Cahya Pratama</p>
            
        </div>
     );
}
 
export default Footer;