import React from 'react'

class Login extends React.Component {
  render() {
    return (
      <div>
        <div id="fb-root"></div>
        <div className="jumbotron jumbotron-fluid bg-blue">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-8 offset-md-3 offset-2">
                <div id="logo" className=""></div>
                <form action="/welcome">
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Login with Facebook</button>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                  <button type="submit"  className="btn btn-light btn-block">SIGNUP</button>
                </form>
                <br/>
                <div className="form-group text-center">
                  <p>Already have account? Please Signin!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login