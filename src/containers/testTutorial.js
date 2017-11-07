import React from 'react'

class TestTutorial extends React.Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: '70px' }}>
        <div className="row justify-content-center section">
          <div className="text-center">
            <h2>Tutorial</h2>
          </div>
        </div>
        <div className="row justify-content-center section">
          <div className="col-12 section">
            <div className="text-center">
              <div className="nomer bg-green">1</div>
              <div className="nomer bg-green">2</div>
              <div className="nomer bg-green">3</div>
              <div className="nomer bg-green">4</div>
              <div className="nomer bg-green">5</div>
              <div className="nomer bg-green">6</div>
              <div className="nomer ">7</div>
              <div className="nomer ">8</div>
              <div className="nomer ">9</div>
              <div className="nomer ">10</div>
            </div>
          </div>
          <div className="col-md-6 section">
            <img src="img/sammy.png" className="img-fluid" alt=""/>
          </div>
          <div className="col-md-6 section">
            <div className="form-check">
              <label className="form-check-label">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
              Option one is this and that&mdash;be sure to include why it's great
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
              Option two can be something else and selecting it will deselect option one
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
              Option two can be something else and selecting it will deselect option one
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
              Option two can be something else and selecting it will deselect option one
              </label>
            </div>
          </div>
        </div>
        <div className="row justify-content-center section">
          <div className="col-md-6">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <a href="/test-tutorial" role="button" className="btn btn-light btn-block">Back</a>
              </div>
              <div className="col-md-6">
                <a href="/test-tutorial" role="button" className="btn btn-light btn-block">Next</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center section">
          <div className="col-md-6">
            <a href="/test-personality" role="button" className="btn btn-success btn-block">Next</a>
          </div>
        </div>
      </div>
    )
  }
}

export default TestTutorial