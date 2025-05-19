import React from 'react'
import "./Project.css"

const Project = () => {
  return (
    <div className='container-fluid project'>
      <div className='container'>
        <h1 className="fw-bold mb-3 text-uppercase">Code. Create. Conquer.</h1>
        <p className="text-muted">
          A showcase of my work, where ideas transform into functional and impactful digital solutions.
        </p>
        <div className='row'>
          <h3 className="fw-bold text-uppercase">💻 Freelance Projects</h3>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4 h-100' style={{ height: "450px" }}>
            {/* card5 */}
            <div className='project-card bg-transparent'>
              <img src="/Logo lab technology.png" alt="" className='img-fluid img-top' />
              <div className='card-body'>
                <h5 className='fs-4 text-uppercase fw-bold'>Logo lab Technology</h5>
                <p className='card-info'>Here i have work for the startup company who sell intersting thing like logo, banner etc</p>
                <p><strong>Tech Stack: </strong>Html, css, Bootstrap, three.js</p>
                <div className="btn-group w-100 mt-3">
                  <a href="https://logolabtechnology.netlify.app/" target="_blank" className="btn btn-dark me-2 rounded">LIVE DEMO</a>
                  <a href="https://github.com/roshan773/logolabtechnology" target="_blank" className="btn btn-outline-dark ms-2 rounded">GITHUB</a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-6 col-lg-4 h-100' style={{ height: "450px" }}>
            {/* card6 */}
            <div className='project-card bg-transparent'>
              <img src="/wedgram designs.png" alt="" className='img-fluid img-top' />
              <div className='card-body'>
                <h5 className='fs-4 text-uppercase fw-bold'>Wedgram designs</h5>
                <p className='card-info'>Here i have work with the startup who sell very intersting things as short invitation of wedding stuff.</p>
                <p><strong>Tech Stack: </strong>Html, css, Bootstrap</p>
                <div className="btn-group w-100 mt-3">
                  <a href="https://wedgramdesigns.vercel.app/" target="_blank" className="btn btn-dark me-2 rounded">LIVE DEMO</a>
                  <a href="https://github.com/roshan773/Wedgramdesigns" target="_blank" className="btn btn-outline-dark ms-2 rounded">GITHUB</a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-6 col-lg-4 h-100' style={{ height: "450px" }}>
            {/* card - Graphic Designer */}
            <div className='project-card bg-transparent'>
              <img src="/Personal portfolio.png" alt="Graphic Designer Website Screenshot" className='img-fluid img-top' />
              <div className='card-body'>
                <h5 className='fs-4 text-uppercase fw-bold'>Graphic Designer Website</h5>
                <p className='card-info'>
                  Worked with a graphic designer to build a creative website for showcasing services like logo using modern and interactive elements.
                </p>
                <p><strong>Tech Stack:</strong> Html, css, bootstrap, three.js</p>
                <div className="btn-group w-100">
                  <a href="https://raghupatilportfolio.netlify.app/" target="_blank" className="btn btn-dark me-2 rounded">LIVE DEMO</a>
                  <a href="https://github.com/roshan773/GraphicDesignerProject" target="_blank" className="btn btn-outline-dark ms-2 rounded">GITHUB</a>
                </div>
              </div>
            </div>
          </div>

          <h3 className="fw-bold">🔁 Clone Projects</h3>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            {/* card1 */}
            <div className="project-card bg-transparent">
              <img src="/Book my show.png" alt="Book My Show Clone" className="card-img-top img-fluid" />
              <div className="card-body pt-2">
                <h5 className="fs-4 text-uppercase fw-bold">Book My Show Clone</h5>
                <p className="card-info">Recreated the popular ticket booking platform.</p>
                <p><strong>Tech Stack:</strong> Html, css, Bootstrap, jquery</p>
                <div className="btn-group w-100 mt-3">
                  <a href="https://bookmyshowproject.netlify.app/" target="_blank" className="btn btn-dark me-2 rounded">LIVE DEMO</a>
                  <a href="https://github.com/roshan773/book-my-show" target="_blank" className="btn btn-outline-dark ms-2 rounded">GITHUB</a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            {/* card2 */}
            <div className='project-card bg-transparent'>
              <img src="/Group project.png" alt="Hillcrest website clone" className='card-img-top img-fluid' />
              <div className='card-body pt-2'>
                <h5 className='fs-4 text-uppercase fw-bold'>hillcrest Website clone</h5>
                <p className='card-info'>Recreated the website of the resort.</p>
                <p><strong>Tech Stack:</strong> Html, css, Bootstrap, jquery</p>
                <div className="btn-group w-100 mt-3">
                  <a href="https://hillcrestproject.netlify.app/" target="_blank" className="btn btn-dark me-2 rounded">LIVE DEMO</a>
                  <a href="https://github.com/roshan773/Hillcrest" target="_blank" className="btn btn-outline-dark ms-2 rounded">GITHUB</a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            {/* card3 */}
            <div className='project-card bg-transparent'>
              <img src="/Dashboard.png" alt="" className='img-fluid img-top' />
              <div className='card-body pt-2'>
                <h5 className='fs-4 text-uppercase fw-bold'>Dashboard Website</h5>
                <p className='card-info'>Recreated a  Website of the bank dashboard</p>
                <p><strong>Tech Stack: </strong>Html, css, Bootstrap, Chart.js</p>
                <div className="btn-group w-100 mt-3">
                  <a href="https://bankdashproject.netlify.app/" target="_blank" className="btn btn-dark me-2 rounded">LIVE DEMO</a>
                  <a href="https://github.com/roshan773/adminpanel" target="_blank" className="btn btn-outline-dark ms-2 rounded">GITHUB</a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            {/* card4 */}
            <div className='project-card bg-transparent'>
              <img src="/Rest api.png" alt="" className='img-fluid img-top' />
              <div className='card-body pt-2'>
                <h5 className='fs-4 text-uppercase fw-bold'>E-Commerce API Fetch Demo</h5>
                <p className='card-info'>Dynamic Online Store with Real-Time API Fetching</p>
                <p><strong>Tech Stack: </strong>Html, Bootstrap, Rest Api</p>
                <div className="btn-group w-100 mt-3">
                  <a href="https://fetchhive.netlify.app/" target="_blank" className="btn btn-dark me-2 rounded">LIVE DEMO</a>
                  <a href="https://github.com/roshan773/api-store" target="_blank" className="btn btn-outline-dark ms-2 rounded">GITHUB</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Project