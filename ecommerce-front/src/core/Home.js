import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
import './Home.css'; // Import the CSS file

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return (
        <Layout
            title="SPECTRUM"
            description="Discover, Shop, and Enjoy - YourBrand's Ultimate Online Marketplace."
            className="home-container"
        >
            <Search />
            <h2 className="section-title" style={{fontFamily: 'Impact'}}>NEW ARRIVALS</h2>
            <div className="products-grid">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="product-card">
                        <Card product={product} />
                    </div>
                ))}
            </div>

            <h2 className="section-title">Best Sellers</h2>
            <div className="products-grid">
                {productsBySell.map((product, i) => (
                    <div key={i} className="product-card">
                        <Card product={product} />
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Home;
