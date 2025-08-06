import React from 'react'
import ada from './img/ada.jpeg'


const Blog = () => {
  return (
    <div class="mb-5">
      <div class="d-flex justify-content-center">
        <h2>Blog</h2>
      </div>
      <div class="row">
        <div class="col-md-4 p-2" >
          <div class="card h-100">
            <div class="card" >
              <img src={ada} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              </div>

              <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 p-2" >
          <div class="card h-100">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            {/* <div class="card-body">
              <h5 class="card-title">Portafolio de Fotos
                <a
                  data-mdb-ripple-init
                  class="btn btn-link btn-floating btn-lg text-body m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  target="_blank"
                ><i class="fa fa-cube"></i>
                </a>
              </h5>
              <p class="card-text">Karina pide desarrollar una aplicación simple para que los usuarios puedan ver sus fotografías y comentarlas.</p>
              <a href="https://github.com/camilaOlivaresR/ProyectoPortafolioFotos" target="_blank" class="btn border">Github</a>
            </div> */}
          </div>
        </div>
        <div class="col-md-4 p-2" >
          <div class="card h-100">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            {/* <div class="card-body">
              <h5 class="card-title">The Rial News
                <a
                  data-mdb-ripple-init
                  class="btn btn-link btn-floating btn-lg text-body m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  target="_blank"
                ><i class="fa fa-cube"></i>
                </a>
              </h5>
              <p class="card-text">
                Nuestro cliente, busca lanzar su nuevo sitio de noticias llamado “TheRialNews” donde en forma satírica informa a sus usuarios de actualidad.</p>
              <a href="https://github.com/camilaOlivaresR/TheRialNews" target="_blank" class="btn border">Github</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>


  )
}

export default Blog