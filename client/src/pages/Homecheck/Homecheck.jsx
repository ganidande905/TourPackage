import React from 'react';

import { Link } from 'react-router-dom';
import './style.css';


function App() {
  return (
    <div className="App">
      <input type="checkbox" id="bars" />
      <nav className="nav-bar" id="navbar">
        <div className="content">
          <div className="site-logo">
            <img src="roamify-side.png" className="logo-link" alt="logo" />
          </div>

          <ul className="navigation">
            <li className="link"><a href="#home">home</a></li>
            <li className="link"><a href="#about">about us</a></li>
            <li className="link"><a href="#next">next</a></li>
            <li className="link"><a href="#blog">blog</a></li>
            <li className="link"><a href="#gallery">gallery</a></li>
            <li className="link"><a href="#contact">contact</a></li>
          </ul>

          <label htmlFor='bars' className="icon-bars"><i className="ri-bar-chart-2-fill"></i></label>
        </div>
      </nav>

      <header className="home" id="home">
        <div className="content">
          <h1>The <strong>best</strong> way to <strong>plan your next</strong> adventure </h1>
          <h4>Explore the colourful world like never seen</h4>
          <button className="btn-explore" >Explore more <i className="ri-arrow-right-line"></i> </button>
        </div>
      </header>

      <div className="image"></div>

      <section className="about" id="about">
        <div className="content">
          <div className="items">
            <div className="image">
              <img src="" alt="" srcset="" />
            </div>
            <div className="item">
              <div className="item-content">
                <h2 className="about-title">About Us</h2>
                <div className="about-desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laudantium maxime sunt ex quia,
                    nulla qui officia modi provident consequatur!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis in vitae laudantium!
                  </p>
                </div>
              </div>
              <div className="item-data">
                <div className="col">
                  <h1>387</h1>
                  <span>completed trips</span>
                </div>
                <div className="col">
                  <h1>71</h1>
                  <span>Tour Guides</span>
                </div>
                <div className="col">
                  <h1>46</h1>
                  <span>Destinations</span>
                </div>
              </div>
              <button className="btn-explore">Explore more <i className="ri-arrow-right-line"></i> </button>
              <li><Link to="/package/France">France</Link></li>
                <li><Link to="/package/Ladakh">Ladakh</Link></li>  {/*this code is used to link to package .. make a button with this*/}
                <li><Link to="/package/Munnar">Munnar</Link></li>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections and content */}

      <footer className="footer">
        <div className="content">
          <h4>Roamify</h4>
          <div className="social">
            <span>
              <a href="#f"><i className="ri-facebook-fill"></i></a>
            </span>
            <span>
              <a href="#f"><i className="ri-instagram-fill"></i></a>
            </span>
            <span>
              <a href="#f"><i className="ri-twitter-fill"></i></a>
            </span>
            <span>
              <a href="#f"><i className="ri-linkedin-fill"></i></a>
            </span>
            <span>
              <a href="#f"><i className="ri-youtube-fill"></i></a>
            </span>
          </div>
          <p>
            <i className="ri-double-quotes-l"></i>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reiciendis at ullam beatae temporibus officia
            quibusdam facilis dolorum non quo earum omnis soluta quas
            <i className="ri-double-quotes-r"></i>
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nulla soluta.</p>
          <ul className="navigation">
            <li className="link"><a href="#home">home</a></li>
            <li className="link"><a href="#about">about us</a></li>
            <li className="link"><a href="#next">next</a></li>
            <li className="link"><a href="#blog">blog</a></li>
            <li className="link"><a href="#gallery">gallery</a></li>
            <li className="link"><a href="#contact">contact</a></li>
          </ul>
        </div>
        <div className="rights">
          Copyrights &#169;
          <a href="http://" target="_blank" rel="noopener noreferrer">itcode</a>. all rights reserved
        </div>
      </footer>
      <script src="main.js"></script>
    </div>
  );
}

export default App;
