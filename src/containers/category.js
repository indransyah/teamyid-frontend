import React from 'react'

class Category extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid" style={{ marginBottom: '0px' }}>
          <div  className="container profile">
            <div className="row justify-content-center">
              <div className="col-5 col-sm-4 col-md-3 col-lg-2 ">
                <div className="text-center">
                  <img src="img/technical.svg" className="img-fluid rounded-circle" alt="..."/>
                </div>
              </div>
            </div>
            <div className="row description">
              <div className="col-md-6 offset-md-3">
                <div className="text-center">
                  <h4>Technical Test</h4>
                  <p>Please fill the category that match with your ability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container section">
          <div className="row justify-content-center">
            <div className="col-sm-8 col-md-6 col-lg-4">
              <form action="">
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select className="form-control" id="category">
                    <option>Choose one...</option>
                    <option>Hipster (Designer)</option>
                    <option>Hacker (Developer)</option>
                    <option>Hustle (Marketing)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input type="text" className="form-control" id="description" placeholder="Description"/>
                </div>
                <button type="submit"  className="btn btn-primary btn-block">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Category