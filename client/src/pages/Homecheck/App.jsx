import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './App.css';

function MyForm() {
  return (
    <form action="" method="post">
      <input type="email" className="input" placeholder="Your Email" />
      <input type="text" className="input" placeholder="Your Phone" />
      <textarea rows="6" className="input" placeholder="Your Message"></textarea>
      <button className="btn-contact">send a message ! </button>
    </form>
  );
}

function App() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');

    if (navbar) {
      window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          navbar.classList.add('active');
        } else {
          navbar.classList.remove('active');
        }
      };
    }

    const scrollrevealOption = {
      distance: '50px',
      origin: 'bottom',
      duration: 1500,
    };

    ScrollReveal().reveal('.home h1', scrollrevealOption);
    ScrollReveal().reveal('.home h4', {
      ...scrollrevealOption,
      delay: 800,
    });
    ScrollReveal().reveal('.home .btn-explore', {
      ...scrollrevealOption,
      delay: 1200,
    });

    ScrollReveal().reveal('.about .about-title', scrollrevealOption);
    ScrollReveal().reveal('.about .about-desc', {
      ...scrollrevealOption,
      delay: 600,
    });
    ScrollReveal().reveal('.about .item-data', {
      ...scrollrevealOption,
      delay: 1200,
    });
    ScrollReveal().reveal('.btn-explore', {
      ...scrollrevealOption,
      delay: 2000,
    });
    ScrollReveal().reveal('.btn-more', {
      ...scrollrevealOption,
      delay: 2000,
    });
    ScrollReveal().reveal('.card', scrollrevealOption);

    ScrollReveal().reveal('.card .image', {
      ...scrollrevealOption,
      delay: 600,
    });
    ScrollReveal().reveal('.card .content-card h4', {
      ...scrollrevealOption,
      delay: 1600,
    });
    ScrollReveal().reveal('.next .card .content-card p', {
      ...scrollrevealOption,
      delay: 2000,
    });

    ScrollReveal().reveal('form .input', scrollrevealOption);
    ScrollReveal().reveal('.row .card', scrollrevealOption);
  }, []);
  

  return (
    <div>
      <input type="checkbox" id="bars" />
      <nav className="nav-bar" id="navbar">
        <div className="content">
          <div className="site-logo">
            <img src="roamify-side.png" className="logo-link" alt="Roamify Logo" />
          </div>
          <ul className="navigation">
            <li className="link"><a href="#home">home</a></li>
            <li className="link"><a href="#about">about us</a></li>
            <li className="link"><a href="#package">Package</a></li>
            <li className="link"><a href="#gallery">gallery</a></li>
            <li className="link"><a href="#contact">contact</a></li>
          </ul>
          <label htmlFor='bars' className="icon-bars"><i className="ri-bar-chart-2-fill"></i></label>
        </div>
      </nav>

      <header className="home" id="home">
        <div className="content">
          <h1>Your <strong>ultimate</strong> guide to <strong>seamless</strong> adventures</h1>
          <h4>Roam Freely , Roam Boldly</h4>
          <button className="btn-explore">Explore More<i className="ri-arrow-right-line"></i></button>
        </div>
      </header>

      <section className="package" id="package">
        <div className="heading">
          <h1 className="title">Explore the Most Captivating Destinations</h1>
          <p className="subtitle">Let us join you to see the world!</p>
        </div>
        <div className="content">
          <div className="items">
            <div className="card">
              <div className="image">
                <img src="delhi.jpg" alt="Delhi" />
              </div>
              <div className="content-card">
                <h4>Delhi</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam blanditiis odit culpa?</p>
                <button className="btn-read">Explore Package</button>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="munnar.jpg" alt="Munnar" />
              </div>
              <div className="content-card">
                <h4>Munnar</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam blanditiis odit culpa?</p>
                <button className="btn-read">Explore Package</button>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="France.jpg" alt="France" />
              </div>
              <div className="content-card">
                <h4>France</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam blanditiis odit culpa?</p>
                <button className="btn-read">Explore Package</button>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="kanyakumari.jpg" alt="Kanyakumari" />
              </div>
              <div className="content-card">
                <h4>Kanyakumari</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam blanditiis odit culpa?</p>
                <button className="btn-read">Explore Package</button>
              </div>
            </div>
            <div className="varnasi">
              <div className="image">
                <img src="varanasi.jpg" alt="varanasi" />
              </div>
              <div className="content-card">
                <h4>Varnasi</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam blanditiis odit culpa?</p>
                <button className="btn-read">Explore Package</button>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="ladakh.jpg" alt="Ladhak" />
              </div>
              <div className="content-card">
                <h4>Ladhak</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam blanditiis odit culpa?</p>
                <button className="btn-read">Explore Package</button>
                
              </div>
            </div>
            
          </div>
          
        </div>
      </section>

      <section className="about" id="about">
        <div className="content">
          <div className="items">
            <div className="image">
              <img src="roamify-side.png" alt="Roamify" />
            </div>
            <div className="item">
              <div className="item-content">
                <h2 className="about-title">About Us</h2>
                <div className="about-desc">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laudantium maxime sunt ex quia, nulla qui officia modi provident consequatur!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis in vitae laudantium!</p>
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
              <button className="btn-explore">Explore more <i className="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </div>
      </section>

      <div className="site-banner">
        <div className="content">
          <div className="row">
            <p>Roam <small>&</small> ify</p>
          </div>
        </div>
      </div>

      <section className="gallery" id="gallery">
        <div className="heading">
          <h1 className="title">Our Album</h1>
          <p className="subtitle">We have best Photographers wait you for take your personnel pictures!</p>
        </div>
        <div className="items">
          <div className="card">
            <img src="" alt="Gallery Image 1" />
          </div>
          <div className="card">
            <img src="" alt="Gallery Image 2" />
          </div>
          <div className="card">
            <img src="" alt="Gallery Image 3" />
          </div>
          <div className="card">
            <img src="" alt="Gallery Image 4" />
          </div>
          <div className="card">
            <img src="" alt="Gallery Image 5" />
          </div>
          <div className="card">
            <img src="" alt="Gallery Image 6" />
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="content">
          <div className="items">
            <div className="item">
              <div className="heading">
                <h1 className="title">Contact our travel agency</h1>
                <div className="subtitle">We are able to reply within 24 hours. We work on weekends also.</div>
              </div>
              <div className="row">
                <div className="card">
                  <div className="line">
                    <span><i className="ri-phone-line"></i></span>
                    <h4>Call us</h4>
                  </div>
                  <p>9392162823</p>
                </div>
                <div className="card">
                  <div className="line">
                    <span><i className="ri-mail-line"></i></span>
                    <h4>Mail us</h4>
                  </div>
                  <p>ganidande9@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="item">
              <MyForm />
            </div>

          </div>
        </div>
      </section>

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reiciendis at ullam beatae temporibus officia quibusdam facilis dolorum non quo earum omnis soluta quas
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
          Copyrights &#169; <a href="http://" target="_blank" rel="noopener noreferrer">itcode</a>. all rights reserved
        </div>
      </footer>
    </div>
  );
}

export default App;

