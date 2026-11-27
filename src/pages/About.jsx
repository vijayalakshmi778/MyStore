
import './About.css';

function About() {
    return (
        <div className="about-container">

            <div className="about-content">

                <h1>About MyStore</h1>

                <p>
                    Welcome to MyStore! We are an online shopping
                    destination offering quality electronics,
                    smart gadgets and accessories at affordable prices.
                </p>

                <p>
                    Our mission is to provide customers with
                    quality products, excellent service and
                    a convenient shopping experience.
                </p>

            </div>

            <div className="about-image">

                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
                    alt="Our store"
                />

            </div>

        </div>
    );
}

export default About;
