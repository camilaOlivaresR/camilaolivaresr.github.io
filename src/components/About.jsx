import React from 'react'

const About = () => {
  return (
    <div class="container border  ">
      <div class="d-flex justify-content-center">
        <h2 >Habilidades</h2>
      </div>
      <div class="d-flex flex-wrap justify-content-evenly mt-4 mb-4 ">
        <div class="p-2 " >
          <div class="card align-items-center" style={{ width: "20rem" }}>
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fab fa-html5 fa-stack-1x "></i>
            </span>
            <h5 class="card-title">Front-end development</h5>
            <p class="card-text">HTML5, CSS3, Javascript.</p>
          </div>
        </div>
        <div class="p-2 " >
          <div class="card align-items-center" style={{ width: "20rem" }}>
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fa fa-cogs fa-stack-1x "></i>
            </span>
            <h5 class="card-title">Javascript Frameworks</h5>
            <p class="card-text">React, Angular.</p>
          </div>
        </div>
        <div class="p-2 " >
          <div class="card align-items-center" style={{ width: "20rem" }}>
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fab fa-wordpress fa-stack-1x "></i>
            </span>
            <h5 class="card-title">CMS</h5>
            <p class="card-text">WordPress.</p>
          </div>
        </div>
        <div class="p-2 " >
          <div class="card align-items-center" style={{ width: "20rem" }}>
            <span class="fa-stack fa-4x">
              <i class="fa fa fa-square fa-stack-2x "></i>
              <i class="fa fa-terminal fa-stack-1x fa-inverse"></i>
            </span>
            <h5 class="card-title">Terminal</h5>
            <p class="card-text">Bash.</p>
          </div>
        </div>
        <div class="p-2 " >
          <div class="card align-items-center" style={{ width: "20rem" }}>
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fab fa-git fa-stack-1x "></i>
            </span>
            <h5 class="card-title"> Control de versiones</h5>
            <p class="card-text">Git.</p>
          </div>
        </div>
        <div class="p-2 " >
          <div class="card align-items-center" style={{ width: "20rem" }}>
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fa fa-cube fa-stack-1x "></i>
            </span>
            <h5 class="card-title">Full-stack Development</h5>
            <p class="card-text">Ruby (Ruby on Rails)-Javascript.</p>
          </div>
        </div>
        <div class="p-2 " >
          <div class="card align-items-center" style={{ width: "20rem" }}>
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fa fa-cubes fa-stack-1x "></i>
            </span>
            <h5 class="card-title">Arquitectura MVC</h5>
            <p class="card-text">Ruby on Rails.</p>
          </div>
        </div>
        <div class="p-2 " >
          <div class="card align-items-center" style={{ width: "20rem" }}>
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fa fa-database fa-stack-1x "></i>
            </span>
            <h5 class="card-title">Databases</h5>
            <p class="card-text">PostgreSQL, SQLite and MongoDB.</p>
          </div>
        </div>
        <div class="p-2 " >
          <div class="card align-items-center" style={{ width: "20rem" }}>
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fa fa-cloud fa-stack-1x "></i>
            </span>
            <h5 class="card-title">Cloud Deployment</h5>
            <p class="card-text">Aws-Firebase-Render.</p>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default About