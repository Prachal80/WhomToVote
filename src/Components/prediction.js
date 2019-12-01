import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './app2.css';
import Chart from './Chart';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';
import Chart5 from "./Chart5";
import Chart6 from "./Chart6";
import html from 'react-inner-html';

class prediction extends Component {
  hancleclick = event => {
    console.log("clicked");
   // this.refs.ab.scrollIntoView();
   window.scrollTo({
    top: 900,
    behavior: 'smooth',
})}

  constructor(){
    super();
    this.state = {
      chartData6:{},
      items: JSON,
      republic: "",
      democrate: "",
      chart6: false,

    }
    fetch('https://whomtovotedemo.s3-us-west-2.amazonaws.com/results_per.json')
    .then(res => res.json())
    .then(json => {
        this.setState({
          items: json,
        })
        console.log(json);
        console.log(this.state.items.Median_age);
        this.setState({
          republic: this.state.items.per_rep,
          democrate: this.state.items.per_dem,
        })
        //console.log("New data"+this.state.per_rep);
        this.getchartData();
    })
    
  }


  getchartData = event =>{
    // Ajax calls here
    console.log("New data "+this.state.republic);
    this.setState({
      chartData:{
        labels: ["Republican", "Democrat"],
        datasets:[
          {
            label:'Education',
            data:[
              this.state.republic,
              this.state.democrate
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)'
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#FFF'
          }
        ]
      }
    });
    

    
  }


  componentDidMount(){
  
       // this.getchartData();
  }
  handleSubmit5 = event => {
   
    this.setState({ chart6: true });
    window.scrollTo({
      top: 10000000,
      behavior: 'smooth',
  })
  }

  render() {
    //var { isLoaded } = this.state;
    console.log(this.state.chart6)
    




    if(this.state.chart6){
        return(
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
          <h1 className="responsive-headline">Hey there.. :)</h1>
          
          <hr />
          <ul className="social">
             Lets see the predictions
          </ul>
          
       </div>
    </div>
    
    <p className="scrolldown">
       <a className="smoothscroll" onClick={this.handleclick}><i className="icon-down-circle"></i></a>
    </p>
    
    </header>
            <div className="App" style={{paddingLeft:"3%" ,width:"100%",paddingTop:"5%",paddingBottom:"3%"}}>
            <button onClick={this.handleSubmit5} className="btn btn-primary">Predictions</button><span style={{padding:"1%"}}></span><br></br><br></br>
            
              <div id="chart" style={{paddingLeft:"22%",width:"75%"}}>
              <Chart6 chartData={this.state.chartData} location="Prediction" legendPosition="bottom"/> <br></br><br></br>
              <h1 style={{color:"lightcyan"}}>Predictions</h1>
              <h3 style={{color:"white",textAlign:"left"}}>
             
                </h3>
              </div>
            </div>
            </div>
          );
        }
    
    
    else{
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
      <h1 className="responsive-headline">Hey there.. :)</h1>
      
      <hr />
      <ul className="social">
         Lets see the predictions
      </ul>
      
   </div>
</div>

<p className="scrolldown">
   <a className="smoothscroll" onClick={this.hancleclick}><i className="icon-down-circle"></i></a>
</p>

</header>
      <div className="App" style={{paddingLeft:"3%",width:"100%",paddingTop:"5%",paddingBottom:"37%"}}>
      <button onClick={this.handleSubmit5} className="btn btn-primary">Predictions</button><span style={{padding:"1%"}}></span><br></br><br></br>
        {/* <button onClick={this.handleSubmit} className="btn btn-primary">Median_age</button><span style={{padding:"1%"}}></span>
        <button onClick={this.handleSubmit2} className="btn btn-primary">Unemployment_rate</button><span style={{padding:"1%"}}></span>
          <button onClick={this.handleSubmit3} className="btn btn-primary">Education</button><span style={{padding:"1%"}}></span>
          <button onClick={this.handleSubmit4} className="btn btn-primary">Per_capita_income_growth</button><span style={{padding:"1%"}}></span> */}
        <div id="chart" style={{paddingLeft:"25%",width:"75%"}}>
          
        
        </div>
      </div>
      </div>
    );
        }
  }
}

export default prediction;
