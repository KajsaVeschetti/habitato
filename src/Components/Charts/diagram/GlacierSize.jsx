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

class Glacier extends Component {
  handleYear = e => {
    if(e.key === "Enter")
     {
       this.props.onYearFilter(this.props.chartName, e.target.value);
     }
  };
  
    render() { 
      let glacier = this.props.GlacierSize;

        if(glacier === undefined) return <p>Ingen data finns</p>;

      const dataGlacier = [
        {name: 'Nivå', GLA : parseInt(glacier["Mean cumulative mass balance"])}, 
        {name: 'Antal observationer', GLA : glacier["Number of observations"]}, 
 
      ];

      const COLORS =[ "#d9534f", "#5bc0de", "#5cb85c", "#428bca" ]

        return ( 
            <React.Fragment>
            <div style={{width:"300px", height:"350px", float:"left"}}>
              <div style={{textAlign:"center", marginLeft:"3em"}}>
                <label>Välj ett år: 1945-2014</label>
            <input className="diagramInput" type="text" placeholder="Tryck enter" onKeyDown={e=> this.handleYear(e)}></input>
            </div>
            <BarChart
                    width={300}
                    height={300}
                    data={dataGlacier}
                    margin={{
                    top: 25, right: 30, left: 20, bottom: 5,
                    }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="GLA" fill="#8884d8" shape={<TriangleBar/>} label={{ position: 'top' }}> 
                <Cell  fill ={COLORS[0]}/>
                <Cell  fill ={COLORS[1]}/>
                </Bar>
       
                </BarChart> 
     
          </div>
          </React.Fragment>

         );
    }
}
 
export default Glacier;