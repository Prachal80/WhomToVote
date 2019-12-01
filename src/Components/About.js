import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';

class About extends Component {

   hancleclick = event => {
      console.log("clicked");
     // this.refs.ab.scrollIntoView();
     window.scrollTo({
      top: 900,
      behavior: 'smooth',
  });
  
  }
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
	         <Link to={`/stats`} style={{padding: "40px"}} ><li><a className="smoothscroll"  >Stats</a></li></Link>
            <Link to={`/prediction`} style={{padding: "40px"}} ><li><a className="smoothscroll" >Predictions</a></li></Link>
            
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">The Overview...</h1>
           
            <hr />
            <ul className="social">
               Let's Get The Basic Knowledge
            </ul>
            
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" onClick={this.hancleclick}><i className="icon-down-circle"></i></a>
      </p>

   </header>
      <section ref="ab" id="about">
      <div >
         {/* <div className="three columns">
            <h1></h1>
         </div> */}
         <div className="nine columns main-col">
            <h2>The Basics...</h2>

            <p>An election for president of the United States happens every four years on the first Tuesday after the first Monday in November. The next presidential election will be November 3, 2020.</p>
            <p>
            The election process begins with primary elections and caucuses. These are two methods that states use to select a potential presidential nominee tooltip . In general, primaries use secret ballots for voting. Caucuses are local gatherings of voters who vote at the end of the meeting for a particular candidate. Then it moves to nominating conventions, during which political parties each select a nominee to unite behind. During a political party convention, each presidential nominee also announces a vice presidential running mate. The candidates then campaign across the country to explain their views and plans to voters. They may also participate in debates with candidates from other parties.
            </p>
            <p>
            During the general election tooltip , Americans go to their polling place tooltip to cast their vote for president. But the tally of those votes—the popular vote—does not determine the winner. Instead, presidential elections use the Electoral College. To win the election, a candidate must receive a majority of electoral votes. In the event no candidate receives a majority, the House of Representatives chooses the president and the Senate chooses the vice president.
            </p>
            <p>
               <span style={{color:"#fff"}}>What is a Typical Presidential Election Cycle ?</span>
               <br></br><br></br>
               <div style={{paddingLeft:"3%"}} >
               <span style={{color:"#fff"}}> The presidential election process follows a typical cycle : </span><br></br><br></br>
               <div style={{paddingLeft:"2%"}}>
               <i style={{color:"white"}} className="fa fa-dot-circle-o"></i> Spring of the year before an election – Candidates announce their intentions to run.<br></br>
               <i style={{color:"white"}} className="fa fa-dot-circle-o"> </i> Summer of the year before an election through spring of the election year – Primary and caucus tooltip  debates take place.<br></br>
               <i style={{color:"white"}} className="fa fa-dot-circle-o"></i> January to June of election year – States and parties hold primaries tooltip and caucuses. <br></br>
               <i style={{color:"white"}} className="fa fa-dot-circle-o"></i> July to early September – Parties hold nominating conventions to choose their candidates.<br></br>
               <i style={{color:"white"}} className="fa fa-dot-circle-o"> </i> September and October – Candidates participate in presidential debates. <br></br>
               <i style={{color:"white"}} className="fa fa-dot-circle-o"> </i> Early November – Election Day <br></br>
               <i style={{color:"white"}} className="fa fa-dot-circle-o"> </i> December – Electors tooltip  cast their votes in the Electoral College. <br></br>
               <i style={{color:"white"}} className="fa fa-dot-circle-o"> </i> Early January of the next calendar year – Congress counts the electoral votes.<br></br>
               <i style={{color:"white"}} className="fa fa-dot-circle-o"> </i> January 20 – Inauguration Day<br></br>
               </div>
               </div>
            </p>
            <p>
                     <a href="https://www.usa.gov/election" target="_blank" className="button"><i className="fa fa-link"></i> Learn More</a>
                  </p>
         </div>
         <div style={{paddingTop:"5%"}} className="nine columns main-col">
            <h2>The Democrats...</h2><img src={"../../images/democrat.jpg"}/><br></br>

            <p>The <span style={{color:"#fff"}}> Democratic Party </span>is one of the two major contemporary political parties in the United States, along with its main rival, the Republican Party. Tracing its heritage back to Thomas Jefferson and James Madison's Democratic-Republican Party, the modern-day Democratic Party was founded around 1828 by supporters of Andrew Jackson, making it the world's oldest active political party.</p>
            <p>
            In its early years, the Party supported limited government, state sovereignty and opposed banks and the abolition of slavery. Since Franklin D. Roosevelt and his New Deal coalition in the 1930s, the Democratic Party has promoted a social liberal platform. Well into the 20th century, the party had conservative pro-business and Southern conservative-populist wings; following the New Deal, however, the conservative wing of the party largely withered outside the South. The New Deal Coalition of 1932–1964 attracted strong support from voters of recent European extraction—many of whom were Catholics based in the cities. After the Civil Rights Act of 1964 and the Voting Rights Act of 1965, the core bases of the two parties shifted, with the Southern states becoming more reliably Republican in presidential politics and the Northeastern states becoming more reliably Democratic. The once-powerful labor union element became smaller and less supportive after the 1970s. White evangelicals and Southerners have become heavily Republican at the state and local levels since the 1990s. People living in urban areas, women, college graduates, sexual and gender minorities, millennials, and black, Latino, Jewish, and Asian Americans tend to support the Democratic Party.
            </p>
            <p>
            The Democratic Party's philosophy of modern liberalism advocates social and economic equality, along with the welfare state. It seeks to provide government regulation in the economy. Policies such as environmental protection, support for organized labor and labor unions, the introduction of social programs, affordable college tuition, universal health care, equal opportunity, and consumer protection form the core of the party's economic policy. On social issues, it advocates campaign finance reform, LGBT rights, police and immigration reform, stricter gun laws, and the legalization of marijuana.
            </p>
            <p>
            There have been 15 Democrats who have served as president of the United States. The first was Andrew Jackson, who was the seventh president and served from 1829 to 1837. The most recent was Barack Obama, who was the 44th and held office from 2009 to 2017. As of 2019, the Democrats hold a majority in the House of Representatives, 15 state government trifectas (governorship and both legislative chambers), the mayoralty of numerous major American cities, and 19 total state legislatures. Four of the nine sitting justices of the Supreme Court had been appointed by Democratic presidents.
            </p>
            <p>
                     <a href="https://en.wikipedia.org/wiki/Democratic_Party_(United_States)" target="_blank" className="button"><i className="fa fa-link"></i> Learn More</a>
                  </p>
         </div>
         <div style={{paddingTop:"5%"}} className="nine columns main-col">
            <h2>The Republicans...</h2><img style={{maxWidth:"30%",height:"-3%"}} src={"../../images/republic.jpg"} /><br></br>

            <p>The <span style={{color:"#fff"}}>  Republican Party </span>,also referred to as the <span style={{color:"#fff"}}> GOP (Grand Old Party) </span> ,is one of the two major contemporary political parties in the United States, the other is its historic rival, the Democratic Party.</p>
            <p>
            The GOP was founded in 1854 by opponents of the Kansas–Nebraska Act, which allowed for the potential expansion of slavery into certain U.S. territories. The party supported classical liberalism, opposed the expansion of slavery, and supported economic reform. Abraham Lincoln was the first Republican president. Under the leadership of Lincoln and a Republican Congress, slavery was banned in the United States in 1865. The Party was generally dominant during the Third Party System and the Fourth Party System. After 1912, the Party underwent an ideological shift to the right.[16] Following the Civil Rights Act of 1964 and the Voting Rights Act of 1965, the party's core base shifted, with Southern states becoming more reliably Republican in presidential politics. Since the 1990s, the Party's support has chiefly come from the South, the Great Plains, the Mountain States and rural and exurban areas in the Midwest.
            </p>
            <p>
            The 21st century Republican Party ideology is American conservatism. The GOP supports lower taxes, free market capitalism, a strong national defense, gun rights, pro-life, deregulation and restrictions on labor unions. In addition to advocating for conservative economic policies, the Republican Party is socially conservative. After the Supreme Court's 1973 decision in Roe v. Wade, the Republican Party opposed abortion in its party platform and grew its support among evangelicals. The GOP was strongly committed to protectionism and tariffs at its founding, but grew more supportive of free trade in the 20th century.
            </p>
            <p>
            There have been 19 Republican presidents, the most from any one political party (including current president Donald Trump, who was elected in 2016). As of 2019, the GOP controls the presidency, a majority in the U.S. Senate, a majority of state governorships, a majority (30) of state legislatures, and 22 state government trifectas (governorship and both legislative chambers). Five of the nine sitting U.S. Supreme Court justices were nominated by Republican presidents.
            </p>
            <p>
                     <a href="https://en.wikipedia.org/wiki/Republican_Party_(United_States)" target="_blank" className="button"><i className="fa fa-link"></i> Learn More</a>
                  </p>
         </div>
         </div>

   </section>
   </div>
    );
  }
}

export default About;
