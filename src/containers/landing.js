import React from 'react'
import FacebookLogin from 'react-facebook-login'
import { connect } from 'react-redux'

import { login } from '../actions/user'
import UserNav from '../components/userNav'

import '../Landing.css';

class Landing extends React.Component {
  handleResponse = (res) => {
    const { dispatch } = this.props
    dispatch(login(res.accessToken))
  }

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
              <UserNav isLanding={true}/>
            </div>
          </div>
        </nav>
      </div>
      <div className="jumbotron jumbotron-fluid bg-secondary bg-home" style={ { marginTop: '50px', backgroundImage: 'url(img/work-small.jpg)' } }>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-8 ">
              <div id="logo" className="logo-brand text-center">
                {/*<img src="img/logo.png" className="img-fluid brand-lg" alt=""/>*/}
              </div>
              <div className="form-group text-center">
                {!localStorage.getItem('token') &&
                <FacebookLogin
                  appId="1956958527653874"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={this.handleResponse}
                />
                }
              </div>
              {/*<button type="submit" className="btn btn-light btn-block">SIGNUP</button>*/}
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
                  <p className="font-weight-light"> Salah satu faktor kegagalan startup yang paling sering terjadi adalah karena tidak menemukan tim yang tepat. Kebanyakan startup tidak tahu rekan yang mana yang sebenarnya dibutuhkan untuk dijadikan tim. Tak jarang seluruh tim memiliki background dan personality yang sama sehingga membuat sebuah ide dengan visi yang sama. Padahal personality yang sama itu tidak selamanya membuat tim kombak. Terkadang karena personality yang sama bisa membuat masing-masing anggota tidak mau mengalah atau malah bisa jadi bisa membuat semua menjadi passive. Lalu bagaimana kah cara menemukan anggota tim yang seharusnya?</p>
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
                  <p className="font-weight-light">  Selain skill/kemampuan yang harus beragam dan saling melengkapi, keberagaman personality yang cocok juga sangat menunjang teamwork dalam team. Prinsip dasar dari teamwork adalah untuk membangun lingkungan kerja kondusif dan juga efektif untuk menyelesaikan suatu pekerjaan secara bersama. Manfaat dari sinergi tim sedemikian rupa sehingga anggota dari kerja tim yang kooperatif antara satu dengan sama lain bisa mencapai hasil yang lebih lebih daripada bekerja secara independen. Dengan demikian, tim bisa menjadi unit dasar untuk pemberdayaan secara bersama untuk kekuatan kolektif dan membuat partisipasi yang efektif dan ikatan dengan ikatan. </p>
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
                  <p className="font-weight-light"> Di sinilah peran hipster, hustler, dan hacker dibutuhkan dalam mengisi dan mendukung performa sebuah tim.  Untuk mencari tau dan mempelajari lebih lanjut mengenai hacker, hipster, dan hustler kita perlu melakukan assessment. Dengan Teamy.ID kita tidak hanya bisa mengetahui hacker, hipster, dan hustler namun kita juga bisa mengetahui personality type yang cocok antara hacker, hipster dan hustler.</p>
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
                  <p className="font-weight-light"> Mengetahui apa jenis personality kita dengan metode sixteen personality dan apakah kita termasuk hustler, hipster atau hacker?</p>
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
                  <p className="font-weight-light"> Menemukan rekan tim dengan melengkapi hustler, hipster dan hacker serta mencocokan berdasarkan relasi antar personality dan skill yg relevan. </p>
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
                  <p className="font-weight-light"> Disini lah awal kolaborasi yang baik untuk membangun lingkungan kerja kondusif dan juga efektif untuk menyelesaikan suatu pekerjaan secara bersama </p>
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
                      <img src="img/dyas.png" className="img-fluid img-fitur rounded-circle" alt=""/>
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

export default connect(state => ({
  user: state.user
}))(Landing)