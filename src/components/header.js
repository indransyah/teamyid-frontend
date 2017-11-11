import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-blue-dark">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="img/logo.png" width="120px" height="30px"/>
            </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/search">Find</a>
                  </li>
                  {/*<li className="nav-item active">*/}
                  <li className="nav-item">
                    {/*<a className="nav-link" href="/group">Group<span className="sr-only">(current)</span></a>*/}
                    <a className="nav-link" href="/group">Group</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/message">Message</a>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Hengky
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="">Profile</a>
                      <a className="dropdown-item" href="">Setting</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/">Logout</a>
                    </div>
                  </li>
                </ul>
              </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header