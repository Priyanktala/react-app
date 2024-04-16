import React from "react";
import Navbar from "./components/Navbar";
import Service_card from "./components/Service_card";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Port from "./components/Port";



const App = () => {
  return (
    <>
      <Navbar />

      <header>
        <div class="container">
          <div class="intro-text">
            <div class="intro-lead-in">Hello Errbody</div>
            <div class="intro-heading">
              Yes Mel, Ajmal, Chien, Junne maybe and Syok.
            </div>
            <a href="#services" class="page-scroll btn btn-xl">
              Aku Bukan Sempit
            </a>
          </div>
        </div>
      </header>

      <Service_card />

      <Port/>
      <About />

      <Team />

      <Contact />

      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <span class="copyright">Copyright © Your Website 2014</span>
            </div>
            <div class="col-md-4">
              <ul class="list-inline social-buttons">
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="list-inline quicklinks">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
