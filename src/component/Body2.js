import landscape from '../assets/img/landscape.jpg'
const Body2 = () => {
    return ( 
        <div className="container">
        <section className="body-2">
            <div className="image">
                <img src={landscape} alt=""/>
            </div>
            <div className="text">
                <h1>Lorem ipsum <span>dolor</span> sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa veritatis officia quisquam voluptatibus. Suscipit.</p>
            </div>
        </section>
    </div>
     );
}
 
export default Body2;