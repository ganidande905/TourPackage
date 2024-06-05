import React from 'react';
import './pack.css';


function App() {
    return (
        <div className="App">
            <header>
                <ul>
                    <li><a href="#">Tour</a></li>
                </ul>
                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">Packages</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#" target="_blank">LogIn</a></li>
                </ul>
            </header>
            <div className="Main">
                France
            </div>
            <div className="content">
                <h1>Explore More!</h1>
            </div>
            <div className="section1">
                <div className="items paris"><p>Paris</p></div>
                <div className="items provence"><p>Provence</p></div>
                <div className="items french-riviera"><p>French Riviera</p></div>
                <div className="items loire-valley"><p>Loire Valley</p></div>
                <div className="items mont-saint-michel"><p>Mont Saint-Michel</p></div>
                <div className="items bordeaux"><p>Bordeaux</p></div>
            </div>
            <div className="section">
                <h1>To Add</h1>
            </div>
            <div className="section">
                <h2>To Add</h2>
                <p>To Add</p>
            </div>
        </div>
    );
}

export default App;
