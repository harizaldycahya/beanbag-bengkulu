import landscape from '../assets/img/home1.jfif'
import circle_small from '../assets/img/circle.png'

import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Body2 = () => {
    // Scroll Animation
    const {ref, inView} = useInView({
        threshold : 0.3
    });
    const animate = useAnimation();
    useEffect(() => {
        if(inView){
            animate.start({
                x:0,
                transition: {
                    type: 'spring', 
                    duration: 2,
                    bounce: 0.3
                }
            });
        }
        if(!inView){
            animate.start({
                x:'100vw'
            });
        }
    },[inView])
    // Scroll Animation End
    return ( 
        <div className="container">
            <section ref={ref} className="body-2">
                <div className="image">
                    <img src={landscape} alt=""/>
                </div>
                <div className="text">
                    <h1>Lorem <span>ipsum</span>.
                        <motion.img animate={animate} className='circle_small' src={circle_small} alt=""/>
                    </h1>
                    <span><hr /></span>
                    <h3>Recognizing the need is the primary condition for design.</h3>
                    <div class="space-2"></div>
                    <motion.button whileHover={{rotateX:30}}>Visit Our Instagram</motion.button>
                </div>
            </section>
        </div>
     );
}
 
export default Body2;