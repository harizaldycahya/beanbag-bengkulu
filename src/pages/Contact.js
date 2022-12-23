import circle_small from '../assets/img/circle.png'

import {motion} from 'framer-motion';
import Footer from "../component/Footer";
const Contact = () => {
    
    return ( 
        <div className="container">
            <section className="body-2">
                <div className="image">
                    {/* <img src={landscape} alt=""/> */}
                    <iframe title='myframe' className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2170.6105924216527!2d102.29926627392359!3d-3.827893210827894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab1e21fbbc351ec8!2sBeanbag%20Bengkulu!5e0!3m2!1sid!2sid!4v1671786129088!5m2!1sid!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="text">
                    <h1>Cont<span>act</span>.
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
                    <h3>Nomor : 085156836786 <br />
                    <hr />
                        Email : beanbagbengkulu@gmail.com <br />
                        <hr />
                        Alamat : Jl. KS. Tubun No.37 <br />
                    </h3>
                    <div class="space-2"></div>
                    <a href="https://wa.me/628977554188">
                        <motion.button whileHover={{rotateX:30}}>Chat Via Whatsapp</motion.button>
                    </a>
                </div>
            </section>
            <Footer></Footer>
        </div>
     );
}
 
export default Contact;