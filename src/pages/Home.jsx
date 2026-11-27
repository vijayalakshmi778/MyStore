import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Welcome to MyStore</h1>
                <p>
                    Discover the latest electronics, smart gadgets
                    and accessories at affordable prices.
                    Quality products, great deals and a better
                    shopping experience.
                </p>
                <Link to="/products">
                    <button>Shop Now</button>
                </Link>
            </div>
            <div className="home-image">
                <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800"
                    alt="Shopping collection"
                />
            </div>
        </div>
    );
}

export default Home;
