import landscape from '../assets/img/home2.jfif'
import circle_small from '../assets/img/circle.png'

import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Body1 = () => {

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
                x:'-100vw'
            });
        }
    },[inView])
    // Scroll Animation End

    return ( 
        <div className="container">
            <section ref={ref} className="body-1">
                <div className="text">
                        <h1>Kenapa <span>Beanbag</span> ?
                            <motion.img animate={animate}  className='circle_small' src={circle_small} alt=""/>
                        </h1>
                        <span><hr /></span>
                        <h3>Beanbag cocok sekali digunakan menjadi kursi santai di cafe/resto anda. Karena dapat membuat suasana menjadi lebih berwarna dan lebih asik.</h3>
                        <div class="space-2"></div>
                        <a href="https://wa.me/628977554188">
                            <motion.button whileHover={{rotateX:30}}>Chat Via Whatsapp</motion.button>
                        </a>
                    </div>
                <div className="image">
                    <img src={landscape} alt=""/>
                </div>
            </section>
        </div>
     );
}
 
export default Body1;