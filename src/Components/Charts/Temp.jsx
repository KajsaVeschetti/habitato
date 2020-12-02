import React, { Component } from 'react';

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import PropTypes from 'prop-types';
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
class Temp extends Component {
  handleYear = e => {
    if(e.key === "Enter")
     {
       this.props.onYearFilter(this.props.chartName, e.target.value);
     }
  };


    render() {
      let temp = this.props.GlobalTemp;

      if(temp === undefined) return <p>Ingen data finns</p>;

    const dataTemp = [
      {name: 'GCAG', TEMP : parseInt(temp["Mean"])}, 
      {name: 'GISTEMP', TEMP : temp["Mean"]}, 

    ];

    const COLORS =[ "#d9534f", "#5bc0de", "#5cb85c", "#428bca" ]
        return ( 
            <React.Fragment>
               <div style={{width:"350px", height:"400px", float:"left"}}>
            <input type="text" placeholder="Välj ett år" onKeyDown={e=> this.handleYear(e)}></input>
            <BarChart
                    width={350}
                    height={350}
                    data={dataTemp}
                    margin={{
                    top: 25, right: 30, left: 20, bottom: 5,
                    }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="TEMP" fill="#8884d8" shape={<TriangleBar/>} label={{ position: 'top' }}> 
                <Cell  fill ={COLORS[0]}/>
                <Cell  fill ={COLORS[1]}/>
                </Bar>
       
                </BarChart> 
            </div>
            </React.Fragment>
         );
    }
}
 
export default Temp;