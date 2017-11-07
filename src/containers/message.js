import React from 'react'

class Message extends React.Component {
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
                <h4>Rudi Tabuti</h4>
                <p>Hacker | INTP | 60% Programmer</p>
              </div>
              <button type="button" className="btn btn-warning">Pending</button>
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
                <p>Husler | ENTP | 40% Marketing</p>
              </div>
              <button type="button" className="btn btn-success">Accepted</button>
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
                <h4>Ilham Guntara</h4>
                <p>Hipster | INTP | 50% Designer</p>
              </div>
              <button type="button" className="btn btn-danger">Declined</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Message