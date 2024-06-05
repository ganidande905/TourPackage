import React, { useEffect } from 'react';
// import './login.css';

function App() {
  useEffect(() => {
    const signupbtn = document.querySelector(".login-signup");
    const app_desc = document.querySelector(".app-desc");
    const body = document.querySelector("body");
    const circle1 = document.querySelector(".circle:first-child");
    const circle2 = document.querySelector(".circle:nth-child(2)");
    const signform = document.querySelector(".sign-form");

    signupbtn.onclick = function () {
      app_desc.classList.add("active");
      body.classList.add("active");
      circle1.classList.add("active");
      circle2.classList.add("active");
      signform.classList.add("active");
      document.querySelector(".signUpForm form").style.visibility = "visible";
      document.querySelector('.inLoginForm form').style.visibility = "hidden";
    };

    let currentSlide = 1;
    const slideCount = document.querySelectorAll('.slider img').length;

    function nextSlide() {
      document.getElementById('slide-' + currentSlide).classList.remove('active');
      currentSlide = currentSlide % slideCount + 1;
      document.getElementById('slide-' + currentSlide).classList.add('active');
    }

    const intervalId = setInterval(nextSlide, 2000); // Change slide every 2 seconds

    return () => {
      clearInterval(intervalId); // Clear interval on component unmount
    };
  }, []);

  return (
    <div className="App">
      <button className="login-signup" style={{ fontFamily: 'Poppins, sans-serif' }}>Don't have an account? Signup Here!</button>
      <div className="flex">
        {[...Array(11)].map((_, index) => (
          <div key={index} className="wave"></div>
        ))}
      </div>
      <div className="circle-parent">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="app-desc">
        <section className="container">
          <div className="slider-wrapper">
            <div className="slider">
              <img id="slide-1" src="../../../public/assets/plane.gif" alt="plane" style={{ height: '50%', width: '100%', borderRadius: '2em' }} />
              <img id="slide-2" src="../../../public/assets/car.gif" alt="car" style={{ height: '50%', width: '100%', borderRadius: '2em' }} />
              <img id="slide-3" src="../../../public/assets/ship.gif" alt="ship" style={{ height: '50%', width: '100%', borderRadius: '2em' }} />
            </div>
            <div className="para">
              <span style={{ fontSize: '28px', fontFamily: 'Poppins, sans-serif', color: 'white' }}>Your one-stop platform to travel the World!</span>
            </div>
            <div className="slider-nav">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
            </div>
          </div>
        </section>
      </div>
      <div className="inLoginForm">
        <form action="/loginsubmit" method="post" className="sign-form">
          <div className="title">
            <h3 style={{ fontFamily: 'Poppins, sans-serif' }}>LOGIN</h3>
          </div>
          <div className="inputGroup">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter Username" id="username" name="username" />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              name="password"
            />
            <a href="https://www.wikipedia.org/" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '13px' }}>Forgot Password?</span>
            </a>
          </div>
          <button className="submitForm" type="submit">Login</button>
          <div className="social">
            <div className="go"><i className="fab fa-google"></i></div>
            <div className="fb"><i className="fab fa-facebook" style={{ fontSize: '22px' }}></i></div>
            <div className="in"><i className="fab fa-instagram" style={{ fontSize: '22px' }}></i></div>
            <div className="tw">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
      <div className="doodle-class">
        <div className="doodle"><img src="../../../public/assets/lol.png" alt="lol" /></div>
        <div className="doodle"><img src="../../../public/assets/air doodle 4 - png (2).png" alt="air" /></div>
        <div className="doodle"><img src="../../../public/assets/image-removebg-preview (1).png" alt="image1" /></div>
        <div className="doodle"><img src="../../../public/assets/image-removebg-preview (1).png" alt="image2" /></div>
        <div className="doodle"><img src="../../../public/assets/ok (1).png" alt="ok1" /></div>
        <div className="doodle"><img src="../../../public/assets/ok (1).png" alt="ok2" /></div>
        <div className="doodle"><img src="../../../public/assets/ok (1).png" alt="ok3" /></div>
      </div>
      <div className="signUpForm">
        <form action="/register" method="post" className="sign-form active">
          <div className="title">
            <h3 style={{ fontFamily: 'Poppins, sans-serif' }}>SIGNUP</h3>
          </div>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter Email" id="email" name="email" />
          </div>
          <div className="inputGroup">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter Password" id="username" name="username" />
          </div>
          <div className="inputGroup">
            <label htmlFor="password1">Password</label>
            <input type="password" placeholder="Enter Password" id="password1" name="password1" />
          </div>
          <div className="inputGroup">
            <label htmlFor="password2">Re-enter Password</label>
            <input type="password" placeholder="Enter Password" id="password2" name="password2" />
          </div>
          <button className="submitForm">Signup</button>
          <div className="social">
            <div className="go"><i className="fab fa-google"></i></div>
            <div className="fb"><i className="fab fa-facebook" style={{ fontSize: '22px' }}></i></div>
            <div className="in"><i className="fab fa-instagram" style={{ fontSize: '22px' }}></i></div>
            <div className="tw">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
