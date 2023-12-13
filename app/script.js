import "../src/sass/styles.scss";
import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home";

////////////////////////////////////////
// 🔖 Navigation Menu
////////////////////////////////////////
const btnHamburger = document.querySelector("#btnHamburger");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const navigationMobile = document.querySelector(".nav__mobile");
const body = document.querySelector("body");

btnHamburger.addEventListener("click", () => {
   nav.classList.toggle("open");

   if (nav.classList.contains("open")) {
      navigationMobile.classList.remove("hide");
      overlay.classList.add("fade-in");
      overlay.classList.remove("fade-out");
      // body.style.overflow = "hidden";
   } else {
      overlay.classList.remove("fade-in");
      overlay.classList.add("fade-out");
      navigationMobile.classList.add("hide");
      // body.style.overflow = "";
   }
});

////////////////////////////////////////
// 🔖 Testimonials
////////////////////////////////////////
const previousButton = document.getElementById("btn-previous");
const nextButton = document.getElementById("btn-next");
const cardSlide = document.getElementById("card-slide");

let currentPosition = 0;
previousButton.addEventListener("click", () => {
   if (currentPosition < 0) {
      currentPosition += 23;
      cardSlide.style.transform = `translateX(${currentPosition}rem)`;
   }
});

nextButton.addEventListener("click", () => {
   const maxPosition = -((cardSlide.children.length - 1) * 23);
   if (currentPosition > maxPosition) {
      currentPosition -= 23;
      cardSlide.style.transform = `translateX(${currentPosition}rem)`;
   }
});

class App {
   constructor() {
      // It's common to set the initial opacity explicitly in JavaScript to avoid a flicker effect during page load.
      // document.body.style.opacity = "1";
      // "_" convention means it's a private method, and it should not be called outside this method

      // Lenis
      this._createLenis();
      this._createHome();
      this._render();
   }

   _createHome() {
      this.home = new Home();
   }

   _createLenis() {
      this.lenis = new Lenis({
         lerp: 0.1,
      });
   }

   _render(time) {
      // request animation frame
      this.lenis.raf(time);

      requestAnimationFrame(this._render.bind(this));
   }
}

new App();
