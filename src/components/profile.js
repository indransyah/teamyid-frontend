import React from 'react'
import { connect } from 'react-redux'

import { getProfile } from '../actions/user'

class Profile extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getProfile())
  }

  render() {
    const { user } = this.props
    return (
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
              {(user.technical_test_result) ?
                <p>{user.technical_test_result.category.toUpperCase()} <small>({user.technical_test_result.amount_true_answer} scale 10)</small></p>
                :
                <a href="/start-technical">Take a technical test first</a>
              }
            </div>
          </div>
        </div>
        <div className="col-12 section">
          <div className="text-center">
            <h4>Hustler</h4>
          </div>
          {/*
          <div className="row text-center">
            <div className="col-4 text-center">
              <img src="/img/painter.png" alt="" width="50%"/>
              <strong>Hipster | Designer</strong>
            </div>
            <div className="col-4">
              <img src="/img/programmer.png" alt="" width="50%"/>
              <strong>Hacker | Developer</strong>
            </div>
            <div className="col-4">
              <img src="/img/politician.png" alt="" width="50%"/>
              <strong>Hustler | Marketer</strong>
            </div>
          </div>
          */}
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  user: state.user.data
}))(Profile)