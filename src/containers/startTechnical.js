import React from 'react'

class StartTechnical extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-blue" style={{ marginBottom: '0px' }}>
        <div  className="container profile">
          <div className="row justify-content-center section">
            <div className="col-md-6 text-white">
              <div className="text-center">
                <h3>Almost done, Hengky!</h3>
                <p>This is the last test to complete your profile account</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center section">
            <div className="col-5 col-sm-4 col-md-3 col-lg-2 ">
              <div className="text-center">
                <img src="img/technical.svg" className="img-fluid rounded-circle" alt="..."/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center section">
            <div className="col-md-6 text-white">
              <div className="text-center">
                <h4>Technical Test</h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center section">
            <div className="col-md-6">
              <a href="/interest" role="button" className="btn btn-light btn-block">Next</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StartTechnical