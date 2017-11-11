import React from 'react'
import { connect } from 'react-redux'

import { getProfile } from '../actions/user'

class Welcome extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getProfile())
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <div className="jumbotron jumbotron-fluid" style={{ marginBottom: '0px' }}>
          <div  className="container profile">
            <div className="row justify-content-center">
              <div className="col-5 col-sm-4 col-md-3 col-lg-2 ">
                <div className="text-center">
                  <img src={user && user.avatar} className="img-fluid rounded-circle" alt="..."/>
                </div>
              </div>
            </div>
            <div className="row description">
              <div className="col-md-6 offset-md-3">
                <div className="text-center">
                  <h4>{user && user.name}</h4>
                  <p>{user && user.email}</p>
                </div>
              </div>
            </div>
            <div className="row section">
              <div className="col-6 ">
                <div className="text-center">
                  <h4>Personality</h4>
                  {(user.personality_test_result) ?
                    <p>{user.personality_test_result.personality}</p>
                    :
                    <a href="/test-personality">Take a test first</a>
                  }
                </div>
              </div>
              <div className="col-6 ">
                <div className="text-center">
                  <h4>Technical</h4>
                  <p>Marketing 60%</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="text-center">
                <h4>Hustler</h4>
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className="container section">
          <div className="row justify-content-center">
            <div className="col-sm-8 col-md-6 col-lg-4">
              <form action="/welcome">
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" id="address"/>
                </div>
                <div className="form-group">
                  <label htmlFor="address2">Address 2 (Optional)</label>
                  <input type="text" className="form-control" id="address2"/>
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input type="text" className="form-control" id="city"/>
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input type="text" className="form-control" id="state"/>
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input type="text" className="form-control" id="country"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Interest">Interest</label>
                  <input type="text" className="form-control" id="Interest"/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
        */}
      </div>
    )
  }
}

export default connect(state => ({
  user: state.user.data
}))(Welcome)