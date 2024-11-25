import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import About from "./components/About";
import Search from "./components/Search";

function App() {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top" >
        <div class="container-fluid">
          <NavLink to="/"><a class="navbar-brand" >Camila O Rivera</a></NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto me-2">
              <li class="nav-item">
                <NavLink to="/about"> <a class="nav-link ">Acerca de</a></NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/portfolio"><a class="nav-link">Portafolio</a></NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/blog"><a class="nav-link">Blog</a></NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/search"><a class="nav-link"><i class="fa fa-search" ></i></a></NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </main>
      <footer class="mt-auto  bg-body-tertiary ">
        <div class="container  d-flex justify-content-center ">

          <ul class="list-inline ">
            <li class="list-inline-item">
              <span>© 2024 Copyright: Make love CamiDev <i class="fab fa-react fa-2x"></i> </span>
            </li>
            <li class="list-inline-item">
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body "
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
              ><i class="fa fa-envelope"></i
              ></a>
            </li>

            <li class="list-inline-item">
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body "
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
              ><i class="fab fa-linkedin"></i
              >
              </a>
            </li>

            <li class="list-inline-item">
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body "
                href="https://github.com/camilaOlivaresR"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
              ><i class="fab fa-github"></i
              ></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>

  );
}

export default App;
