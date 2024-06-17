import "./Hero.css";


const Herosections= ()=>{
    return(
        <main className="hero container">
            <div className="hero"></div>
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                  <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/src/assets/amazon.png" alt="amazon-icon" />
                        <img src="/src/assets/flipkart.png" alt="flipkart-icon" />
                    </div>
                  </div>
            </div> 
            <div className="hero-img">
            <img src="/src/assets/hero-image.png" alt="hero-img" />

            </div>
        </main>
    )
};
export default Herosections