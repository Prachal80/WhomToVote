import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './app2.css';

class Chart5 extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  
  render(){
    return (
      
      <div className="chart">
       
       <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Looking Overall ',
              fontSize:25
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
   
      </div>
    )
  }
}

export default Chart5;
