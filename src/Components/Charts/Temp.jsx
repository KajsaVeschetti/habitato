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
class Temp extends Component {
    


    render() { 

        return ( 
            <React.Fragment>
                
            <div style={{width:"350px", height:"400px", float:"left"}}>
                {/* <input type="text" placeholder="Välj ett år"></input> */}
                <LineChart
          width={700}
          height={300}
          data={this.props.Tempdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Mean"
            stroke="#8884d8"
            activeDot={{ r: 12 }}
          />
        </LineChart>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Temp;