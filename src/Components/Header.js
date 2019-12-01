import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {


    return (
       <div>
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
         <Link to={`/home`} style={{padding: "40px"}} ><li ><a className="smoothscroll" >Home</a></li></Link>
            <Link to={`/about`} style={{padding: "40px"}} > <li><a className="smoothscroll" >About</a></li></Link>
	         <Link to={`/stats`} style={{padding: "40px"}} ><li><a className="smoothscroll" >Stats</a></li></Link>
            <Link to={`/prediction`} style={{padding: "40px"}} ><li><a className="smoothscroll" >Predictions</a></li></Link>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Whom To Vote ?</h1>
            <hr />
            <ul className="social">
            This system can help citizens to determine which was the most effective government in previous years based on data and facts. This will avoid data abuse for electoral purpose.
            </ul>
            
            
         </div>
      </div>

      {/* <p className="scrolldown">
         <a className="smoothscroll" href="about"><i className="icon-down-circle"></i></a>
      </p> */}

   </header>
   </div>
    );
  }
}

export default Header;
