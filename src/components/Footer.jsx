import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer class="mx-auto" id="footer">
        <div class="d-flex justify-content-center ">

          <ul class="list-inline ">
          <span>© 2024 HandMade CamiDev </span>
            <li class="list-inline-item">
                <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body "
                href="https://es.react.dev/"
                role="button"
                target="_blank"
                ><i class="fa-footer fab fa-react"></i> 

                </a>
            </li>
            {/* <li class="list-inline-item">
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body "
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
              ><i class="fa fa-envelope"></i
              ></a>
            </li> */}

            <li class="list-inline-item">
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body "
                href="https://www.linkedin.com/in/898921229/"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
              ><i class="fa-footer fab fa-linkedin"></i
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
              ><i class="fa-footer fab fa-github"></i
              ></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer