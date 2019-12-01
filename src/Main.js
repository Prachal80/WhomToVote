import React, { Component } from "react";
import { Route} from "react-router-dom";
import stats from './Components/stats';
import { Redirect } from 'react-router';
import Demo from './Components/demo';
import Header from "./Components/Header";
import About from "./Components/About";
import prediction from "./Components/prediction.js";


//Create a Main Component
class Main extends Component {
    render() {
        return (
            <div>
                {/*Render Different Component based on Route*/}

                <Route path="/" component={Demo} />
                <Route path="/about" component={About} />
                <Route path="/stats" component={stats} />
                <Route path="/home" component={Header} />
                <Route path="/prediction" component={prediction} />
                {/* <Route path="/post" component={PersonList} />
                <Route path="/get" component={DisplayList} />
                <Route path="/mail" component={SendMail} />
               < Route path="/delete" component={DeleteList} />
               < Route path="/delete" component={DeleteList} />
                <Route path="/sms" component={SendSms} /> */}

              


            </div>
        );
    }
}

//Export The Main Component
export default Main;
