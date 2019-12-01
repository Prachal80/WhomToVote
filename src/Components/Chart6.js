import React, {Component} from 'react';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import './app2.css';

class Chart6 extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      
      <div className="chart">
       
       <Doughnut
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:' ',
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

export default Chart6;
