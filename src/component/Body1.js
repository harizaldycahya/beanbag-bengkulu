import square from '../assets/img/square.jpg'

const Body1 = () => {
    return ( 
        <div className="container">
        <section className="body-1">
            <div className="text">
                <h1>Lorem ipsum <span>dolor</span> sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa veritatis officia quisquam voluptatibus. Suscipit.</p>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={square} alt=""/>
                    <h3><span>Lorem ipsum dolor sit.</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus!</p>
                </div>
                <div className="card">
                    <img src={square} alt=""/>
                    <h3><span>Lorem ipsum dolor sit.</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus!</p>
                </div>
                <div className="card">
                    <img src={square} alt=""/>
                    <h3><span>Lorem ipsum dolor sit.</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus!</p>
                </div>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={square} alt=""/>
                    <h3><span>Lorem ipsum dolor sit.</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus!</p>
                </div>
                <div className="card">
                    <img src={square} alt=""/>
                    <h3><span>Lorem ipsum dolor sit.</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus!</p>
                </div>
                <div className="card">
                    <img src={square} alt=""/>
                    <h3><span>Lorem ipsum dolor sit.</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus!</p>
                </div>
            </div>
        </section>
    </div>
     );
}
 
export default Body1;