import React from 'react'

class Group extends React.Component {
  render() {
    return (
      <div className="section">
        <div  className="container profile">
          <div className="row justify-content-center section">
            <div className="col-3 col-md-2">
              <div className="text-center">
                <img src="img/hengky.jpg" className="img-fluid rounded-circle" alt="..."/>
              </div>
            </div>
            <div className="col-9 col-md-10">
              <div className="">
                <h4>Hengky Anang Wijaya</h4>
                <p>Hustler | ENTP | 60% Marketing</p>
              </div>
              <button type="button" className="btn btn-warning">Team Leader</button>
            </div>
          </div>
          <div className="row justify-content-center section">
            <div className="col-3 col-md-2">
              <div className="text-center">
                <img src="img/hengky.jpg" className="img-fluid rounded-circle" alt="..."/>
              </div>
            </div>
            <div className="col-9 col-md-10">
              <div className="">
                <h4>Rudi Tabuti</h4>
                <p>Hipster | ENTP | 40% Designer</p>
              </div>
              <button type="button" className="btn btn-danger">Kick</button>
            </div>
          </div>
          <div className="row justify-content-center section">
            <div className="col-3 col-md-2">
              <div className="text-center">
                <img src="/img/hengky.jpg" className="img-fluid rounded-circle" alt="..."/>
              </div>
            </div>
            <div className="col-9 col-md-10">
              <div className="">
                <h4>Andi Odang</h4>
                <p>Hacker | INTP | 50% Programmer</p>
              </div>
              <button type="button" className="btn btn-danger">Kick</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Group