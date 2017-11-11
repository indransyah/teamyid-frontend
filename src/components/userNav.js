import React from 'react'

class UserNav extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    window.location.assign('/login')
  }
  render() {
    const name = localStorage.getItem('name')
    const token = localStorage.getItem('token')
    if (!name || !token) {
      return null
    }
    return (
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           {name}
          </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {this.props.isLanding === true &&
              <a className="dropdown-item" href="/welcome">Dashboard</a>
            }
            <a className="dropdown-item" href="/" onClick={this.handleClick}>Logout</a>
          </div>
        </li>
      </ul>
    )
  }
}

export default UserNav