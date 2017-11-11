import React from 'react'
import FacebookLogin from 'react-facebook-login'

import { login } from '../actions/user'

class Login extends React.Component {
  handleResponse = (res) => {
    const { dispatch } = this.props
    dispatch(login(res.accessToken))
  }

  render() {
    return (
      <div>
        <div id="fb-root"></div>
        <div className="jumbotron jumbotron-fluid bg-blue">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-8 offset-md-3 offset-2">
                <div id="logo" className=""></div>
                <form>
                  <div className="form-group text-center">
                    <FacebookLogin
                      appId="1956958527653874"
                      autoLoad={false}
                      fields="name,email,picture"
                      callback={this.handleResponse}
                    />
                  </div>
                  {/*
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                  <button type="submit"  className="btn btn-light btn-block">SIGNUP</button>
                  */}
                </form>
                {/*
                <br/>
                <div className="form-group text-center">
                  <p>Already have account? Please Signin!</p>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login