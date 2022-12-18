import square from '../assets/img/square.jpg';
import {motion} from 'framer-motion';
import blob4 from '../assets/img/blob (4).svg'
const Body1 = () => {
    return ( 
        <div className="container">
        <section className="body-1">
            <div className="text">
                <h1>Lorem ipsum <span>dolor</span> sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa veritatis officia quisquam voluptatibus. Suscipit.</p>
            </div>
            <div className="cards">
                <motion.div whileHover={{rotateX:20}} className="card">
                    <img src={square} alt=""/>
                    <h3><span>Lorem ipsum dolor sit.</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus!</p>
                </motion.div>
                <motion.div whileHover={{rotateX:20}} className="card">
                    <img src={square} alt=""/>
                    <h3><span>Lorem ipsum dolor sit.</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus!</p>
                </motion.div>
                <motion.div whileHover={{rotateX:20}} className="card">
                    <img src={square} alt=""/>
                    <h3><span>Lorem ipsum dolor sit.</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus!</p>
                </motion.div>
                <motion.div whileHover={{rotateX:20}} className="card">
                    <img src={square} alt=""/>
                    <h3><span>Lorem ipsum dolor sit.</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus!</p>
                </motion.div>
                <motion.div whileHover={{rotateX:20}} className="card">
                    <img src={square} alt=""/>
                    <h3><span>Lorem ipsum dolor sit.</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus!</p>
                </motion.div>
                <motion.div whileHover={{rotateX:20}} className="card">
                    <img src={square} alt=""/>
                    <h3><span>Lorem ipsum dolor sit.</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus!</p>
                </motion.div>
            </div>
            <img className='background' src={blob4} alt=""/> 
        </section>
    </div>
     );
}
 
export default Body1;