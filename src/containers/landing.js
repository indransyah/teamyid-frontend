import React from 'react'

import '../Landing.css';

class Landing extends React.Component {
  render() {
    return (
      <div>
      <div className="container">
        <nav id="navbarHome" className="navbar navbar-expand-md fixed-top navbar-dark bg-blue-dark">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img className="img-fluid brand" src="img/logo_only.png" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto nav-pills">
                <li className="nav-item">
                  <a className="nav-link" href="#intro">INTRODUCTION</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#solusi">SOLUTION</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#fitur">FEATURED</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#team">TEAM</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="jumbotron jumbotron-fluid bg-secondary bg-home" style={ { marginTop: '50px', backgroundImage: 'url(img/work-small.jpg)' } }>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-8 ">
              <div id="logo" className="logo-brand text-center">
                <img src="img/logo.png" className="img-fluid brand-lg" alt=""/>
              </div>
              <div className="form-group">  
                <button type="submit" className="btn btn-light btn-block">Login with Facebook</button>
              </div>
              <button type="submit" className="btn btn-light btn-block">SIGNUP</button>
              <br/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="intro" className="">
          <div className="container">
            <div className="row title">
              <div className="col-12">
                <h1 className="text-center">INTRODUCTION</h1>
                <div className="under-line"></div>
              </div>
            </div>
            <div className="row align-items-center section">
              <div className="col-12 col-md-5 col-lg-4">
                <div className="content-body">
                  <img src="img/login.png" className="img-fluid" style={{ paddingLeft: '50px', paddingRight: '50px' }} alt=""/>
                </div>
              </div>
              <div className="col-12 col-md-7 col-lg-8 ">
                <div className="content-body">
                  <p className="font-weight-light">  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light">
          <div className="container">
            <div id="solusi" className="row title">
              <div className="col-12">
                <h1 className="text-center">SOLUTION</h1>
                <div className="under-line"></div>
              </div>
            </div>
            <div className="row align-items-center section">
              <div className="col-12 col-md-6 order-md-2 col-lg-5 ">
                <div className="content-body">
                  <img src="img/personal.png" className="img-fluid" style={{ paddingLeft: '50px', paddingRight: '50px' }} alt=""/>
                </div>
              </div>
              <div className="col-12 col-md-6 order-md-1 col-lg-7 ">
                <div className="content-body">
                  <p className="font-weight-light"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center section">
              <div className="col-12 col-md-6  col-lg-5 ">
                <div className="content-body">
                  <img src="img/skill.png" className="img-fluid" style={{ paddingLeft: '50px', paddingRight: '50px' }} alt=""/>
                </div>
              </div>
              <div className="col-12 col-md-6  col-lg-7 ">
                <div className="content-body">
                  <p className="font-weight-light"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center section">
              <div className="col-12 col-md-6 order-md-2 col-lg-5 ">
                <div className="content-body">
                  <img src="img/team.png" className="img-fluid" style={{ paddingLeft: '50px', paddingRight: '50px' }} alt=""/>
                </div>
              </div>
              <div className="col-12 col-md-6 order-md-1 col-lg-7 ">
                <div className="content-body">
                  <p className="font-weight-light"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="fitur" className="">
          <div className="container">
            <div className="row title">
              <div className="col-12">
                <h1 className="text-center">FEATURED</h1>
                <div className="under-line"></div>
              </div>
            </div>
            <div className="row section">
              <div className="col-12 col-md-4 ">
                <div className="content-body text-center">
                  <div className="row justify-content-center">
                    <div className="col-6 col-md-8 col-lg-6">
                      <img src="img/bipolar.png" className="img-fluid img-fitur" alt=""/>
                    </div>
                  </div>
                  <h3>Know</h3>
                  <p className="font-weight-light"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div>
              <div className="col-12 col-md-4 ">
                <div className="content-body text-center">
                  <div className="row justify-content-center">
                    <div className="col-6 col-md-8 col-lg-6">
                      <img src="img/finding.png" className="img-fluid img-fitur" alt=""/>
                    </div>
                  </div>
                  <h3>Find</h3>
                  <p className="font-weight-light"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
              </div>
              <div className="col-12 col-md-4 ">
                <div className="content-body text-center">
                  <div className="row justify-content-center">
                    <div className="col-6 col-md-8 col-lg-6">
                      <img src="img/reunion.png" className="img-fluid img-fitur" alt=""/>
                    </div>
                  </div>
                  <h3>Team</h3>
                  <p className="font-weight-light"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light" style={{ paddingTop: '100px', paddingBottom: '100px' }} alt="">
          <div className="container">
            <div className="row section justify-content-center">
              <div className="col-12 col-md-6 col-lg-7 ">
                <div className="content-body text-center">
                  <h2 className="font-weight-light">Talent wins games, but teamwork and intelligence wins championship</h2>
                  <h3>- Michael Jordan -</h3>
                  <p> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="team" className="">
          <div className="container">
            <div className="row title">
              <div className="col-12">
                <h1 className="text-center">TEAM</h1>
                <div className="under-line"></div>
              </div>
            </div>
            <div className="row  justify-content-center ">
              <div className="col-12 col-md-4 ">
                <div className="content-body text-center">
                  <div className="row justify-content-center">
                    <div className="col-6 col-md-8 ">
                      <img src="img/hengky.jpg" className="img-fluid rounded-circle img-fitur" alt=""/>
                    </div>
                  </div>
                  <h3>Hengky Anang Wijaya</h3>
                  <p> Leader</p>
                </div>
              </div>
              <div className="col-12 col-md-4 ">
                <div className="content-body text-center">
                  <div className="row justify-content-center">
                    <div className="col-6 col-md-8">
                      <img src="img/anisa.jpg" className="img-fluid img-fitur rounded-circle" alt=""/>
                    </div>
                  </div>
                  <h3>Anisa Nindy</h3>
                  <p> Marketer </p>
                </div>
              </div>
              <div className="col-12 col-md-4 ">
                <div className="content-body text-center">
                  <div className="row justify-content-center">
                    <div className="col-6 col-md-8">
                      <img src="img/skill.png" className="img-fluid img-fitur rounded-circle" alt=""/>
                    </div>
                  </div>
                  <h3>Dyas Yaskur</h3>
                  <p> Designer </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-4 ">
                <div className="content-body text-center">
                  <div className="row justify-content-center">
                    <div className="col-6 col-md-8">
                      <img src="img/indra.jpg" className="img-fluid img-fitur rounded-circle" alt=""/>
                    </div>
                  </div>
                  <h3>Indra Firmansyah</h3>
                  <p> Frontend Programmer </p>
                </div>
              </div>
              <div className="col-12 col-md-4 ">
                <div className="content-body text-center">
                  <div className="row justify-content-center">
                    <div className="col-6 col-md-8">
                      <img src="img/ilham.png" className="img-fluid img-fitur rounded-circle" alt=""/>
                    </div>
                  </div>
                  <h3>Muhamad Ilham Arrouf</h3>
                  <p> Backend Programmer </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Landing