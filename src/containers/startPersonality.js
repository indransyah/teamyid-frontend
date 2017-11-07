import React from 'react'

class StartPersonality extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-blue" style={{ marginBottom: '0px' }}>
        <div  className="container profile">
          <div className="row justify-content-center section">
            <div className="col-md-6 text-white">
              <div className="text-center">
                <h3>Hello, Hengky!</h3>
                <p>Before you doing something amazing, let me know who you are</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center section">
            <div className="col-5 col-sm-4 col-md-3 col-lg-2 ">
              <div className="text-center">
                <img src="img/team.svg" className="img-fluid rounded-circle" alt="..."/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center section">
            <div className="col-md-6 text-white">
              <div className="text-center">
                <h4>Personality Test</h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center section">
            <div className="col-md-6">
              <a href="/test-tutorial" role="button" className="btn btn-light btn-block">Next</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StartPersonality