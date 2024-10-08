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

    if (signupbtn) {
      signupbtn.onclick = function () {
        app_desc.classList.add("active");
        body.classList.add("active");
        circle1.classList.add("active");
        circle2.classList.add("active");
        signform.classList.add("active");
        document.querySelector(".signUpForm form").style.visibility = "visible";
        document.querySelector('.inLoginForm form').style.visibility = "hidden";
      };
    }

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



  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value
    };
    if (formData.username !== 'admin' || formData.password !== 'admin') {
      alert('Invalid username or password. Please try again.');
      return;
    }
    fetch('http://localhost:7000/api/loginsubmit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data here
        console.log(data);
        // Example: Redirect to homepage if login successful
        if (data.success) {
          window.location.href = '/homecheck';
        } else {
          alert('Login failed. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
        window.location.href = '/homecheck';

        // alert('An error occnurred. Please try again later.');
      });
  };

  return (
    <div className="App">
    <style>
        {`.login-signup {
    width: 365px;
    z-index: 1;
    color: #000000;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    border-radius: 25px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.167);
    backdrop-filter: blur(10px);
    left: 78%;
    bottom: 92%;
    border: none;
  }

  .login-signup::before {
    content: "";
    top: 0%;
    left: -100%;
    z-index: -1;
    width: 100%;
    height: 100%;
    color: #ffffff;
    border-radius: 25px;
    position: absolute;
    transition: left 0.4s, color 0.4s;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
  }

  .login-signup:hover {
    color: #ffffff;
  }

  .login-signup:hover::before {
    left: 0%;
  }

  .para {
    position: absolute;
    left: 15%;
    bottom: 16%;
  }

.slide-wrapper {
    position: absolute;
    margin: 0 auto;
  }

  .slider {
    display: flex;
    overflow: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    width: 60%;
    height: 31.57rem;
    margin-left: 22%;
  }

  .slider img {
    flex: 1 0 100%;
    scroll-snap-align: start;
    padding-top: 15%;
    display: none;
  }
  .slider img.active {
    display: block;
  }

  .slider-nav {
    display: flex;
    column-gap: 1rem;
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: 0.7s;
    z-index: 1;
  }

  .slider-nav a {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.75;
    transition: opacity ease 2s;
  }

  .slider-nav:hover {
    opacity: 1;
  }
    
.doodle {
    position: absolute;
    bottom: 77%;
    right: 75%;
    z-index: -1;
  }

  .doodle:nth-child(2) {
    position: absolute;
    top: 74%;
    left:82%;
  }

  .doodle:nth-child(3), .doodle:nth-child(4) {
    position: absolute;
    top: 21%;
    right: 81%;
  }

  .doodle:nth-child(5), .doodle:nth-child(6), .doodle:nth-child(7) {
    position: absolute;
    bottom: 24%;
    left:81%;
  }

  .doodle:nth-child(8) {
    position: absolute;
    rotate: 20deg;
    top: 79%;
    right: 83%;
    z-index: 0;
  }

  .doodle:nth-child(9) {
    position: absolute;
    right: 68%;
    top: 83%;
  }

  .app-desc {
    background-color: rgba(0, 0, 0, 0.7);
    background-size: contain;
    width: 36rem;
    height: 31.57rem;
    position: fixed;
    bottom: 19.5%;
    left: 45.5%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    z-index: 1;
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    border-bottom-right-radius: 15%;
    transition: 0.15s;
  }

  .app-desc:hover {
    background-color: rgba(0, 0, 0, 0.78);
  }

  .app-desc.active {
    left: 21%;
    border-top-left-radius: 15%;
    border-bottom-right-radius: 10px;
    width: 35.5rem;
  }
  body.active {
    background-image: linear-gradient(225deg, #218248 0%, #1c8eab 50%, #7817a5 100%);
  }

  .describe {
    margin: 10px;
    height: 50%;
    width: 50%;
    background-image: url(../../../public/assets/plane.gif);
    background-size: contain;
    border-radius: 20%;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    position: relative;
    left: 22.5%;
    top: 10%;
  }

  .flex {
    display: flex;
    align-items: center;
    position: absolute;
    z-index: -1;
  }

  .flex > div {
    transform: rotate(0deg);
    width: 80px;
    height: 550px;
    backdrop-filter: blur(5px);
    border-radius: 50px;
    box-shadow: 2px 2px 3px rgb(203, 203, 203);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    margin: 10px;
    margin-top: 75px;
    z-index: 0;
    overflow: hidden;
  }

  .wave {
    animation: slantingAnimation, mymove;
    animation-duration: 2.2s, 2.2s;
    animation-timing-function: ease-in-out, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-direction: alternate, alternate;
  }

  .wave:nth-child(2) {
    animation-delay: 0.3s;
  }
  .wave:nth-child(3) {
    animation-delay: 0.6s;
  }
  .wave:nth-child(4) {
    animation-delay: 0.9s;
  }
  .wave:nth-child(5) {
    animation-delay: 1.2s;
  }
  .wave:nth-child(6) {
    animation-delay: 1.5s;
  }
  .wave:nth-child(7) {
    animation-delay: 1.8s;
  }
  .wave:nth-child(8) {
    animation-delay: 2.1s;
  }
  .wave:nth-child(9) {
    animation-delay: 2.4s;
  }
  .wave:nth-child(10) {
    animation-delay: 2.7s;
  }
  .wave:nth-child(11) {
    animation-delay: 3s;
  }
  .wave:nth-child(12) {
    animation-delay: 3.3s;
  }

  @keyframes slantingAnimation {
    0% {
      transform: translate(0px, -100px) (-50%);
    }
    50% {
      transform: translate(0px, -100px);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes mymove {
    from {
      background-color: none;
    }
    to {
      background-color: rgba(69, 44, 255, 0.301);
    }
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0px;
    padding: 0px;
    height: 100vh;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
      43deg,
      #112494 0%,
      #b01ca6 46%,
      #cf9e34 100%
    );
  }

  .inLoginForm {
    top: 19.4%;
    right: 55.8%;
    width: 25rem;
    height: 31.6rem;
    max-width: 378px;
    position: absolute;
    visibility: visible;
  }

  .inLoginForm form {
    width: 19rem;
    height: 25rem;
    max-width: 320px;
    position: absolute;
    padding: 50px 35px;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    border: 2px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.167);
    border-top-left-radius: 15%;
    visibility: visible;
  }

  .signUpForm {
    left: 56%;
    top: 8.4%;
    width: 25rem;
    height: 42.5rem;
    max-width: 320px;
    position: absolute;
  }

  .signUpForm h3 {
    margin-top: 35px;
  }

  .signUpForm form {
  width: 19rem;
  height: 42.5rem;
  max-width: 320px;
  position: absolute;
  padding: 5px 35px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.167);
  border-bottom-right-radius: 50px;
  visibility: hidden;
}


  form * {
    border: none;
    outline: none;
    color: #ffffff;
    font-family: "Poppins", sans-serif;
  }

  .circle {
    width: 10rem;
    height: 10rem;
    position: absolute;
    border-radius: 50%;
    animation-name: spin;
    animation-duration: 6000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .circle:first-child {
    background: linear-gradient(#ff00df, #500000);
    top: 13.7%;
    right: 72.7%;
    z-index: 0;
  }

  .circle:nth-child(2) {
    left: 72.5%;
    top: 68%;
    background: linear-gradient(#ff999c, #460b50);
    z-index: 0;
  }

  .circle:first-child.active {
    background: linear-gradient(#c1096f, #081383);
  }

  .circle:nth-child(2).active {
    background: linear-gradient(#2d0e84, #26c2df);
    left: 72.5%;
    top: 78%;
  }

  .title {
    font-size: 32px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
  }

  .inputGroup label {
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
  }

  .inputGroup input {
    width: 92%;
    height: 50px;
    display: block;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.27);
  }

  ::placeholder {
    color: #e5e5e5;
  }

  .submitForm {
    width: 100%;
    z-index: 1;
    margin-top: 30px;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    border-radius: 5px;
    position: relative;
    background: #fff;
  }

  .submitForm::before {
    content: "";
    top: 0%;
    left: -100%;
    z-index: -1;
    width: 100%;
    height: 100%;
    color: #fff;
    border-radius: 5px;
    position: absolute;
    transition: left 0.4s, color 0.4s;
    background-color: #202020;
  }

  .submitForm:hover {
    color: #fff;
  }

  .submitForm:hover::before {
    left: 0%;
  }

  .social {
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: space-evenly;
  }

  .social div {
    width: 3rem;
    height: 3rem;
    display: flex;
    cursor: pointer;
    color: #eaf0fb;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.27);
  }
  .social .go:hover {
    background-color: rgba(255, 0, 0, 0.616);
    transition: 0.15s;
  }
  .social .in {
    transition: 0.15s;
  }
  .social .in:hover {
    background-color: rgb(255, 0, 230);
  }
  .social .fb {
    transition: 0.15s;
  }
  .social .fb:hover {
    background-color: rgba(0, 81, 255, 0.642);
  }

  .social .tw {
    transition: 0.15s;
  }
  .social .tw:hover {
    background-color: rgba(0, 0, 0, 0.763);
  }`}
      </style>
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
        <form className="sign-form" onSubmit={handleSubmit}>
          <div className="title" >
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
          <button className="submitForm"  type="submit">Login</button>
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

        </form>
      </div>
    </div>
  );
}

export default App;
