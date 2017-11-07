import React from 'react'

class Search extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid" style={{ marginBottom: '0px'}}>
          <div  className="container profile">
            <div className="row justify-content-center">
              <div className="col-5 col-sm-4 col-md-3 col-lg-2 ">
                <div className="text-center">
                  <img src="img/hengky.jpg" className="img-fluid rounded-circle" alt="..."/>
                </div>
              </div>
            </div>
            <div className="row description">
              <div className="col-md-6 offset-md-3">
                <div className="text-center">
                  <h4>Hengky Anang Wijaya</h4>
                  <p>hengkyanangwijaya@yahoo.com</p>
                </div>
              </div>
            </div>
            <div className="row section">
              <div className="col-6 ">
                <div className="text-center">
                  <h4>Personality</h4>
                  <p>ENTP</p>
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
        <div className="container section">
          <div className="row section"> <h4>Hacker</h4> </div>
          <div className="row justify-content-center">
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="img/hengky.jpg" alt=""/>
              <div className="card-body text-center">
                <h5 className="card-title">Rudi Tabuti</h5>
                <p className="card-text">
                  INTP | 50% Programmer
                </p>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">Invite</button>
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Send Invitation</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">Send</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="img/hengky.jpg" alt=""/>
              <div className="card-body text-center">
                <h5 className="card-title">Adam Levin</h5>
                <p className="card-text">
                  INTP | 40% Programmer
                </p>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">Invite</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="img/hengky.jpg" alt=""/>
              <div className="card-body text-center">
                <h5 className="card-title">Ricko Jeriko</h5>
                <p className="card-text">
                  INTP | 30% Programmer
                </p>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">Invite</button>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="container section">
        <div className="row section">
          <h4>Hipster</h4>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="img/hengky.jpg" alt=""/>
              <div className="card-body text-center">
                <h5 className="card-title">Rudi Tabuti</h5>
                <p className="card-text">
                  INTP | 50% Designer
                </p>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">Invite</button>
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Send Invitation</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">Send</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="img/hengky.jpg" alt=""/>
              <div className="card-body text-center">
                <h5 className="card-title">Adam Levin</h5>
                <p className="card-text">
                  INTP | 40% Designer
                </p>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">Invite</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="img/hengky.jpg" alt=""/>
              <div className="card-body text-center">
                <h5 className="card-title">Ricko Jeriko</h5>
                <p className="card-text">
                  INTP | 30% Designer
                </p>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">Invite</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Search