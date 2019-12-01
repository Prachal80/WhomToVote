import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './app2.css';
import Chart from './Chart';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';
import Chart5 from "./Chart5";
import democratdata from './democrat.json';
import republicdata from './republic.json';
import html from 'react-inner-html';

class stats extends Component {
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
      chartData:{},
      chartData4:{},
      chartData2:{},
      chartData3:{},
      chartData5:{},
      items: JSON,
      chart1: false,
      chart2: false,
      chart3: false,
      chart4: false,
      chart5: false,
      republicma: "",
      republicpci: "",
      republicur: "",
      republice: "",
      democratma: "",
      democratpci: "",
      democratur: "",
      democratee: "",

    }
    fetch('https://whomtovotedemo.s3-us-west-2.amazonaws.com/republican.json')
    .then(res => res.json())
    .then(json => {
        this.setState({
          items: json,
        })
        console.log(json);
        console.log(this.state.items.Median_age);
        this.setState({
          republicma: this.state.items.Median_age,
          republicpci: this.state.items.Per_capita_income_growth,
          republicur: this.state.items.Unemployment_rate,
          republice: this.state.items.BachelorsDeg_or_higher,
        })
        // console.log("New data"+this.state.republicma);
        //this.getchartData();
    })
    fetch('https://whomtovotedemo.s3-us-west-2.amazonaws.com/democrat.json')
    .then(res => res.json())
    .then(json => {
        this.setState({
          items: json,
        })
        console.log(json);
        console.log(this.state.items.Median_age);
        this.setState({
          democratema: this.state.items.Median_age,
          democratepci: this.state.items.Per_capita_income_growth,
          democrateur: this.state.items.Unemployment_rate,
          democratee: this.state.items.BachelorsDeg_or_higher,
        })
        // console.log("New data"+this.state.republicma);
        this.getchartData();
    })
    
  }


  getchartData = event =>{
    // Ajax calls here
    console.log("New data "+this.state.republicpci);
    this.setState({
      chartData:{
        labels: ["Republican", "Democrat"],
        datasets:[
          {
            label:'Education',
            data:[
              this.state.republice,
              this.state.democratee
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
      },
      chartData2:{
        labels: ["Republican", "Democrat"],
        datasets:[
          {
            label:'Unemployment Rate',
            data:[
              this.state.republicur,
              this.state.democrateur
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
      },
      chartData5:{
        labels: ["Republican Median Age", "Democrat Median Age","Republican Unemployment Rate", "Democrat Unemployment Rate","Republican Education", "Democrat Education","Republican Per Capita Income Growth", "Democrat Per Capita Income Growth"],
        datasets:[
          {
            
            data:[
              this.state.republicma,
              this.state.democratema,
              this.state.republicur,
              this.state.democrateur,
              this.state.republice,
              this.state.democratee,
              this.state.republicpci,
              this.state.democratepci
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)'
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#FFF'
          }
        ]
      },
      chartData3:{
        //console.log(this.state.republicma),
        labels: ["Republican", "Democrat"],
        datasets:[
          {
            label:'Median Age',
            data:[
              this.state.republicma,
              this.state.democratema
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
      },
      chartData4:{
        labels: ["Republican", "Democrat"],
        datasets:[
          {
            label:'Per Capita Income Growth',
            data:[
              this.state.republicpci,
              this.state.democratepci
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
  handleSubmit = event => {
   
    this.setState({ chart1: true });
    this.setState({ chart2: false });
    this.setState({ chart3: false });
    this.setState({ chart4: false });
    this.setState({ chart5: false });
    window.scrollTo({
      bottom: 100,
      behavior: 'smooth',
  })

}
handleSubmit2 = event => {
   
  this.setState({ chart1: false });
  this.setState({ chart2: true });
  this.setState({ chart3: false });
  this.setState({ chart4: false });
  this.setState({ chart5: false });
  
}
handleSubmit3 = event => {
   
  this.setState({ chart1: false });
  this.setState({ chart2: false });
  this.setState({ chart3: true });
  this.setState({ chart4: false });
  this.setState({ chart5: false });
}
handleSubmit4 = event => {
   
  this.setState({ chart1: false });
  this.setState({ chart2: false });
  this.setState({ chart3: false });
  this.setState({ chart4: true });
  this.setState({ chart5: false });
}
handleSubmit5 = event => {
   
  this.setState({ chart1: false });
  this.setState({ chart2: false });
  this.setState({ chart3: false });
  this.setState({ chart4: false });
  this.setState({ chart5: true });
  window.scrollTo({
    top: 10000000,
    behavior: 'smooth',
})
}

  render() {
    //var { isLoaded } = this.state;
    console.log(this.state.chart1)
    if(this.state.chart1){
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
      <h1 className="responsive-headline">Let's See The Stats</h1>
      
      <hr />
      <ul className="social">
         Click the below button
      </ul>
      
   </div>
</div>

<p className="scrolldown">
   <a className="smoothscroll" href="#"><i className="icon-down-circle"></i></a>
</p>

</header>
        <div className="App" style={{paddingLeft:"3%" ,width:"100%",paddingTop:"5%",paddingBottom:"3%"}}>
        <button onClick={this.handleSubmit5} className="btn btn-primary">Overall Comparision</button><span style={{padding:"1%"}}></span><br></br><br></br>
        <button onClick={this.handleSubmit} className="btn btn-primary">Median_age</button><span style={{padding:"1%"}}></span>
        <button onClick={this.handleSubmit2} className="btn btn-primary">Unemployment_rate</button><span style={{padding:"1%"}}></span>
          <button onClick={this.handleSubmit3} className="btn btn-primary">Education</button><span style={{padding:"1%"}}></span>
          <button onClick={this.handleSubmit4} className="btn btn-primary">Per_capita_income_growth</button><span style={{padding:"1%"}}></span>
          <div id="chart" style={{paddingLeft:"25%",width:"75%"}}>
          <Chart chartData={this.state.chartData3} location="Median Age" legendPosition="bottom"/> <br></br><br></br>
          <h1 style={{color:"lightcyan"}}>Median Age</h1>
          <h3 style={{color:"white",textAlign:"left"}}>
          In a presidential year, the youngest voters, 18–29, turn out at a 47–65 percent rate, while those in their 60s exceed an 80 percent turnout rate. 
          In midterm elections, those under 30 turn out at 17–35 percent while those in their 60s vote at a 70 percent rate.
          The tipping point of representation comes at about 36 years old, when share of population and share of voters becomes about equal.
          The level of turnout at elections and the median age is seen as an indicator of the health of a democracy.
            </h3>
          </div>
        </div>
        </div>
      );
    }

    else if(this.state.chart2){
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
      <h1 className="responsive-headline">Let's See The Stats</h1>
      
      <hr />
      <ul className="social">
      Click the below button
      </ul>
      
   </div>
</div>

<p className="scrolldown">
   <a className="smoothscroll" onClick={this.hancleclick}><i className="icon-down-circle"></i></a>
</p>

</header>
        <div className="App" style={{paddingLeft:"3%" ,width:"100%",paddingTop:"5%",paddingBottom:"1%"}}>
        <button onClick={this.handleSubmit5} className="btn btn-primary">Overall Comparision</button><span style={{padding:"1%"}}></span><br></br><br></br>
        <button onClick={this.handleSubmit} className="btn btn-primary">Median_age</button><span style={{padding:"1%"}}></span>
        <button onClick={this.handleSubmit2} className="btn btn-primary">Unemployment_rate</button><span style={{padding:"1%"}}></span>
          <button onClick={this.handleSubmit3} className="btn btn-primary">Education</button><span style={{padding:"1%"}}></span>
          <button onClick={this.handleSubmit4} className="btn btn-primary">Per_capita_income_growth</button><span style={{padding:"1%"}}></span>
          <div id="chart" style={{paddingLeft:"25%",width:"75%"}}>
           <Chart2 chartData={this.state.chartData2} location="Unemployment Rate" legendPosition="bottom"/> <br></br><br></br>
          <h1 style={{color:"lightcyan"}}>Unemployment Rate</h1>
          <h3 style={{color:"white",textAlign:"left"}}>
          The link between high or rising unemployment and anti-incumbent voting is well-established in political science,
           most of the research on the connections between economic conditions and political behaviour focuses on unemployment as a macroeconomic indicator 
           and not as a form of personal economic hardship experienced by some Americans and not others.
             Personal experience within voluntary unemployment is a mobilizing phenomenon that increases voter turnout in high-unemployment contexts and
              a demobilizing phenomenon that decreases voter turnout in low-unemployment contexts.
            </h3>
          </div>
        </div>
        </div>
      );
    }


    else if(this.state.chart3){
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
      <h1 className="responsive-headline">Let's See The Stats</h1>
      
      <hr />
      <ul className="social">
      Click the below button
      </ul>
      
   </div>
</div>

<p className="scrolldown">
   <a className="smoothscroll" onClick={this.hancleclick}><i className="icon-down-circle"></i></a>
</p>

</header>
        <div className="App" style={{paddingLeft:"3%" ,width:"100%",paddingTop:"5%",paddingBottom:"3%"}}>
        <button onClick={this.handleSubmit5} className="btn btn-primary">Overall Comparision</button><span style={{padding:"1%"}}></span><br></br><br></br>
        <button onClick={this.handleSubmit} className="btn btn-primary">Median_age</button><span style={{padding:"1%"}}></span>
        <button onClick={this.handleSubmit2} className="btn btn-primary">Unemployment_rate</button><span style={{padding:"1%"}}></span>
          <button onClick={this.handleSubmit3} className="btn btn-primary">Education</button><span style={{padding:"1%"}}></span>
          <button onClick={this.handleSubmit4} className="btn btn-primary">Per_capita_income_growth</button><span style={{padding:"1%"}}></span>
          <div id="chart" style={{paddingLeft:"25%",width:"75%"}}>
           <Chart3 chartData={this.state.chartData} location="Education" legendPosition="bottom"/> <br></br><br></br>
          <h1 style={{color:"lightcyan"}}>Education</h1>
          <h3 style={{color:"white",textAlign:"left"}}>
          Education is one of the most important predictors of many forms of social participation –
          from voting to associational membership, to chairing a local committee to hosting a dinner party to giving blood. 
          The same basic pattern applies to both men and women and to all races and generations. Education, in short,
           is an extremely powerful predictor of civic engagement.
            </h3>
          </div>
        </div>
        </div>
      );
    }


    else if(this.state.chart4){
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
      <h1 className="responsive-headline">Let's See The Stats</h1>
      
      <hr />
      <ul className="social">
      Click the below button
      </ul>
      
   </div>
</div>

<p className="scrolldown">
   <a className="smoothscroll" onClick={this.hancleclick}><i className="icon-down-circle"></i></a>
</p>

</header>
        <div className="App" style={{paddingLeft:"3%" ,width:"100%",paddingTop:"5%",paddingBottom:"3%"}}>
        <button onClick={this.handleSubmit5} className="btn btn-primary">Overall Comparision</button><span style={{padding:"1%"}}></span><br></br><br></br>
        <button onClick={this.handleSubmit} className="btn btn-primary">Median_age</button><span style={{padding:"1%"}}></span>
        <button onClick={this.handleSubmit2} className="btn btn-primary">Unemployment_rate</button><span style={{padding:"1%"}}></span>
          <button onClick={this.handleSubmit3} className="btn btn-primary">Education</button><span style={{padding:"1%"}}></span>
          <button onClick={this.handleSubmit4} className="btn btn-primary">Per_capita_income_growth</button><span style={{padding:"1%"}}></span>
          <div id="chart" style={{paddingLeft:"25%",width:"75%"}}>
           <Chart4 chartData={this.state.chartData4} location="Per Capita Income" legendPosition="bottom"/> <br></br><br></br>
          <h1 style={{color:"lightcyan"}}>Per Capita Income</h1>
          <h3 style={{color:"white",textAlign:"left"}}>
          The relative growth of per capita income change is an important determinant of post-World War II presidential 
          election outcomes. Per capita income change is even a better predictor of presidential election outcomes than
           the electorate's relative attraction to the Democratic and Republican candidates as calibrated in National
            Election Study surveys. Due to this, Per Capita Income serves as an important indicator in voting.
            </h3>
          </div>
        </div>
        </div>
      );
    }

    else if(this.state.chart5){
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
      <h1 className="responsive-headline">Let's See The Stats</h1>
      
      <hr />
      <ul className="social">
      Click the below button
      </ul>
      
   </div>
</div>

<p className="scrolldown">
   <a className="smoothscroll" onClick={this.hancleclick}><i className="icon-down-circle"></i></a>
</p>

</header>
        <div className="App" style={{paddingLeft:"3%" ,width:"100%",paddingTop:"5%",paddingBottom:"3%"}}>
        <button onClick={this.handleSubmit5} className="btn btn-primary">Overall Comparision</button><span style={{padding:"1%"}}></span><br></br><br></br>
        <button onClick={this.handleSubmit} className="btn btn-primary">Median_age</button><span style={{padding:"1%"}}></span>
        <button onClick={this.handleSubmit2} className="btn btn-primary">Unemployment_rate</button><span style={{padding:"1%"}}></span>
          <button onClick={this.handleSubmit3} className="btn btn-primary">Education</button><span style={{padding:"1%"}}></span>
          <button onClick={this.handleSubmit4} className="btn btn-primary">Per_capita_income_growth</button><span style={{padding:"1%"}}></span>
          <div id="chart" style={{paddingLeft:"25%",width:"75%"}}>
           <Chart5 chartData={this.state.chartData5} location="Per Capita Income" legendPosition="bottom"/> 
          <h1 style={{color:""}}></h1>
          <h3>
            
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
      <h1 className="responsive-headline">Let's See The Stats</h1>
      
      <hr />
      <ul className="social">
      Click the below button
      </ul>
      
   </div>
</div>

<p className="scrolldown">
   <a className="smoothscroll" onClick={this.hancleclick}><i className="icon-down-circle"></i></a>
</p>

</header>
      <div className="App" style={{paddingLeft:"3%",width:"100%",paddingTop:"5%",paddingBottom:"37%"}}>
      <button onClick={this.handleSubmit5} className="btn btn-primary">Overall Comparision</button><span style={{padding:"1%"}}></span><br></br><br></br>
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

export default stats;
