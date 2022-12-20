import square from '../assets/img/square.jpg'
// import products1 from '../assets/img/header.jfif'
// import products2 from '../assets/img/header.jfif'
// import products3 from '../assets/img/header.jfif'
// import products4 from '../assets/img/header.jfif'
// import products5 from '../assets/img/header.jfif'
import {motion} from 'framer-motion';
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
        </section>
    </div>
     );
}
 
export default Body1;