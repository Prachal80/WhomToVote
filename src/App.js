import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/stats';
import { BrowserRouter } from 'react-router-dom';
import { Route} from "react-router-dom";
import Main from "./Main"


class App extends Component {


  


  render() {
    return (
      <BrowserRouter>
      <div >
        <Main />
        
        {/* <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/> */}
       
       
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
