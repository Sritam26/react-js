import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-{props.mode} "style={{backgroundColor:props.mode==='light'?'dark':'#12202d'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon-primary" style={{color:"blue"}}>drop</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary mx-3" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggle('primary')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
                        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggle('danger')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
                        <div className="bg-success rounded mx-2" onClick={()=>{props.toggle('success')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
                        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggle('warning')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
                        <div className="bg-light rounded mx-2" onClick={()=>{props.toggle('light')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
                        <div className="bg-dark rounded mx-2" onClick={()=>{props.toggle('dark')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
          </div>
          <div className={`form-check form-switchtext-${props.mode==='light'?'dark':'light'}`} style={{color:'blue'}} >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"onClick={props.toggle}
             
            />
              Enable dark mode
         
          </div>
        </div>
  
          
      </nav>
    </div>
  );
}
// Navbar.propTypes={
//     title:PropTypes.string,
//     about:PropTypes.string
// }
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "sritam",
  about: "helloworld",
};
