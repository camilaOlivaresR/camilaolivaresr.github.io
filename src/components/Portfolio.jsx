import React from 'react'

const Portfolio = () => {
  return (
    <div class="container mb-5">
      <div class="d-flex justify-content-center">
        <h2 >Portafolio</h2>
      </div>
      <div class="d-flex flex-wrap justify-content-evenly mt-4 mb-4 ">
        <div class="p-2 " >
          <div class="card mx-auto" style={{ width: "20rem", height: "20rem",height: "20rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class=" p-2" >
          <div class="card mx-auto" style={{ width: "20rem",height: "20rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="p-2 " >
          <div class="card mx-auto" style={{ width: "20rem",height: "20rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="  p-2 " >
          <div class="card mx-auto" style={{ width: "20rem",height: "20rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="  p-2 " >
          <div class="card mx-auto" style={{ width: "20rem" ,height: "20rem"}}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="p-2 " >
          <div class="card mx-auto" style={{ width: "20rem",height: "20rem" }} >
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="p-2 " >
          <div class="card mx-auto" style={{ width: "20rem",height: "20rem" }} >
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Web Responsiva
              <a
                  data-mdb-ripple-init
                  class="btn btn-link btn-floating btn-lg text-body m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  target="_blank"
                ><i class="fab fa-wordpress"></i>
                </a>
              </h5>
              <p class="card-text">Web responsiva desarrollada en WordPress.</p>
              <a href="https://anis88.com/" class="btn btn border">WEb responsiva</a>
            </div>
          </div>
        </div>
        <div class="p-2 " >
          <div class="card mx-auto" style={{ width: "20rem",height: "20rem" }} >
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Red Social Deporte
              <a
                  data-mdb-ripple-init
                  class="btn btn-link btn-floating btn-lg text-body m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  target="_blank"
                ><i class="fab fa-js"></i>
                </a>
              </h5>
              <p class="card-text">Sport Fem es una red social diseñada para mujeres que realizan deportes al aire libre y les gustaría conectar con otras mujeres para realizar estas actividades en conjunto y crear comunidad .</p>
              <a href="https://github.com/camilaOlivaresR/SCL018-social-network/tree/cami" target="_blank" class="btn btn border">Github</a>
            </div>
          </div>
        </div>
        <div class="p-2 " >
          <div class="card mx-auto" style={{ width: "20rem",height: "20rem" }} >
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body" >
              <h5 class="card-title">Vegan Queen
                <a
                  data-mdb-ripple-init
                  class="btn btn-link btn-floating btn-lg text-body m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  target="_blank"
                ><i class="fab fa-js"></i>
                </a>
              </h5>
              <p class="card-text">
                aplicación web para un restaurante con necesidad de poder agilizar la toma, gestión y entrega de pedidos, esta diseñada para usarse en dispositivos tipo tablet.
              </p>
              <a href="https://github.com/camilaOlivaresR/SCL018-burger-queen" target="_blank" class="btn btn border">Github</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio