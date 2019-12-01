import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import republicdata from 'https://whomtovote.s3-us-west-2.amazonaws.com/donald.json';
//import republicdata from './republic.json';

class Demo extends Component {
  constructor(props){
    super(props);
    this.state= {
        items: JSON
        
    }
}
  componentWillMount(){
    fetch('https://whomtovotedemo.s3-us-west-2.amazonaws.com/results_final.json')
        .then(res => res.json())
        .then(json => {
            this.setState({
              items: json,
            })
            console.log(json);
        });
    //console.log(republicdata);
  }
  render() {

    

    return (
     <div>
         <h1>
            
         </h1>
     </div>
    );
  }
}

export default Demo;
