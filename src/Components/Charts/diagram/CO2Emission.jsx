import React, { Component } from 'react';


import PropTypes from 'prop-types';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



  const getPath = (x, y, width, height) => `M${x},${y + height}
  C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
  Z`;

const TriangleBar = (props) => {
const {
fill, x, y, width, height,
} = props;

return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
fill: PropTypes.string,
x: PropTypes.number,
y: PropTypes.number,
width: PropTypes.number,
height: PropTypes.number,
};
export default class BarCharts extends Component {

  handleYear = e => {
        if(e.key === "Enter")
         {
           this.props.onYearFilter(this.props.chartName, e.target.value);
         }
      };
      
1

    render() { 

      const linkStyle = {
        fontSize: "14px",
        color:"#5f5f5f",
        textDecoration:"none",
        listStyleType: "none", 
        paddingRight:"50px",
        paddingLeft:"50px",
     }
        let co2 = this.props.CO2Emission;

        if(co2 === undefined) return <p>Ingen data finns</p>;
        
        const dataBarChart = [
            {name: 'Gas', CO2: parseInt(co2["Gas Fuel"])}, 
            {name: 'Liq', CO2: co2["Liquid Fuel"] },
            {name: 'Sol', CO2: co2["Solid Fuel"]}, 
            {name: 'Cem', CO2: co2["Cement"]},
            {name: 'Flar', CO2: co2["Gas Flaring"]},
          ];

        const COLORS =[ "#d9534f", "#5bc0de", "#5cb85c", "#428bca" ]


        return (
          
            
            <div style={{width:"300px", height:"500px", float:"left"}}>
              
                <input type="text" placeholder="Välj ett år" onKeyDown={e=> this.handleYear(e)}></input>
                <BarChart
                    width={300}
                    height={300}
                    data={dataBarChart}
                    margin={{
                    top: 25, right: 30, left: 20, bottom: 5,
                    }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="CO2" fill="#8884d8" shape={<TriangleBar/>} label={{ position: 'top' }}> 
                <Cell  fill ={COLORS[0]}/>
                <Cell  fill ={COLORS[1]}/>
                <Cell  fill ={COLORS[2]}/>
                <Cell  fill ={COLORS[3]}/>
                <Cell  fill ={COLORS[0]}/>
                </Bar>
                </BarChart>
                <div>
                  <ul >
                    <li style={linkStyle}>Gas = Gas fuel</li>
                    <li style={linkStyle}>Liq = Liquid fuel</li>
                    <li style={linkStyle}>Sol = Solid fuel</li>
                    <li style={linkStyle}>Cem = Cement</li>
                    <li style={linkStyle}>Flar = Gas Flaring</li>
                  </ul>

                </div>
            </div>
            
            
            
        );
    }
}
 