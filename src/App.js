import React from 'react';
import logo from './logo.svg';
import './App.css';




function MainLayout(){
  return (
    <div className="body">
      <div className="navbar navbar-expand-lg navbar-light navbar-color-brown">
        <a className=" navbar-brand" href="#">PetClin</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" >
      
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Produtos</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Feed</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contate-nos</a></li>
          </ul>
        </div>
      </div>

      <a href="#" data-activates="slide-out" className="btn btn-primary p-3 button-collapse"><i
          className="fas fa-bars"></i></a>

      <div id="slide-out" className="side-nav fixed wide sn-bg-1">
        <ul className="custom-scrollbar">
          <li>
            <div className="logo-wrapper sn-ad-avatar-wrapper">
              <a href="#"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle"></img><span>Anna Deynah</span></a>
            </div>
          </li>
          <li>
            <ul className="collapsible collapsible-accordion">
              <li><a className="collapsible-header waves-effect arrow-r active"><i
                    className="sv-slim-icon fas fa-chevron-right"></i>
                  Submit blog<i className="fas fa-angle-down rotate-icon"></i></a>
                <div className="collapsible-body">
                  <ul>
                    <li><a href="#" className="waves-effect active">
                        <span className="sv-slim"> SL </span>
                        <span className="sv-normal">Submit listing</span></a>
                    </li>
                    <li><a href="#" className="waves-effect">
                        <span className="sv-slim"> RF </span>
                        <span className="sv-normal">Registration form</span></a>
                    </li>
                  </ul>
                </div>
              </li>
              <li><a className="collapsible-header waves-effect arrow-r"><i
                    className="sv-slim-icon far fa-hand-point-right"></i>
                  Instruction<i className="fas fa-angle-down rotate-icon"></i></a>
                <div className="collapsible-body">
                  <ul>
                    <li><a href="#" className="waves-effect">
                        <span className="sv-slim"> FB </span>
                        <span className="sv-normal">For bloggers</span></a>
                    </li>
                    <li><a href="#" className="waves-effect">
                        <span className="sv-slim"> FA </span>
                        <span className="sv-normal">For authors</span></a>
                    </li>
                  </ul>
                </div>
              </li>
              <li><a className="collapsible-header waves-effect arrow-r"><i className="sv-slim-icon fas fa-eye"></i> About<i
                    className="fas fa-angle-down rotate-icon"></i></a>
                <div className="collapsible-body">
                  <ul>
                    <li><a href="#" className="waves-effect">
                        <span className="sv-slim"> I </span>
                        <span className="sv-normal">Introduction</span></a>
                    </li>
                    <li><a href="#" className="waves-effect">
                        <span className="sv-slim"> MM </span>
                        <span className="sv-normal">Monthly meetings</span></a>
                    </li>
                  </ul>
                </div>
              </li>
              <li><a claclassNamess="collapsible-header waves-effect arrow-r"><i className="sv-slim-icon far fa-envelope"></i>
                  Contact me<i className="fas fa-angle-down rotate-icon"></i></a>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <a href="#" className="waves-effect">
                        <span className="sv-slim"> F </span>
                        <span className="sv-normal">FAQ</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="waves-effect">
                        <span className="sv-slim"> W </span>
                        <span className="sv-normal">Write a message</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li><a id="toggle" className="waves-effect"><i className="sv-slim-icon fas fa-angle-double-left"></i>Minimize
                  menu</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="sidenav-bg rgba-blue-strong"></div>
      </div>

      <footer className="page-footer font-small navbar-color-brown pt-4">

        <div className="container-fluid text-center text-md-left">

          <div className="row">

            <div className="col-md-6 mt-md-0 mt-3">

              <h5 className="text-uppercase">PetClin</h5>
              <p>A melhor loja para seu Pet.</p>

            </div>

            <hr className="clearfix w-100 d-md-none pb-3"></hr>

            <div className="col-md-3 mb-md-0 mb-3">

              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>

            </div>
            <div className="col-md-3 mb-md-0 mb-3">

              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>

            </div>
          
          </div>

        </div>

        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
        </div>

      </footer>
    </div>
  )
}



function App() {
  return MainLayout() 
}

export default App;
