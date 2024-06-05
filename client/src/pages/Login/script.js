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
  }
  let currentSlide = 1;
  const slideCount = document.querySelectorAll('.slider img').length;

  function nextSlide() {
    document.getElementById('slide-' + currentSlide).classList.remove('active');
    currentSlide = currentSlide % slideCount + 1;
    document.getElementById('slide-' + currentSlide).classList.add('active');
  }

  setInterval(nextSlide, 2000); // Change slide every 2 seconds
