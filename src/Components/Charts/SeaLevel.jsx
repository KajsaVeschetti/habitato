import React, { Component } from 'react';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Label
  } from "recharts";

class SeaLevel extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
            <div style={{width:"350px", height:"400px", float:"left"}}>
            <LineChart
              width={350}
              height={300}
              data={this.props.SeaLeveldata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Time" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" />
              <Line
                type="monotone"
                dataKey="GMSL"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
          </React.Fragment>
         );
    }
}
 
export default SeaLevel;