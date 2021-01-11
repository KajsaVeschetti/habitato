import React, { Component } from 'react';

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import PropTypes from 'prop-types';

// Kod hämtad från recharts

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
      {name: 'GCAG', TEMP : temp["GCAG"]}, 
      {name: 'GISTEMP', TEMP : temp["GISTEMP"]}, 
    ];

    /*Färger på staplar*/
    const COLORS =[ "#ff595e", "#f8961e", "#8ac926", "#1982c4", "#6a4c93" ]
    
    /* Information om de olika staplarna */
    function getIntroOfPage(label) {
      if (label === 'GCAG') {
        return 'GCAG står för Global component of Climate at a Glance. Detta verktyg ger en så nära realtidsanalys av månatliga och årliga temperaturer för världen. Temperaturen mäts i grader Celsius. ';
      } if (label === 'GISTEMP') {
        return 'GISTEMP står för GISS Surface Temperature Analysis. Detta är en uppskattning av global förändriogn i yttemperaturen. Denna mätning görs av NASA. Temperaturen mäts i grader Celsius.';
      }  
    }
    
    /*Hämtar informationen från ovan funktion */
    function CustomTooltip({ payload, label, active }) {
      if (active) {
        return (
          <div className="custom-tooltip" style={{width:"200px", border:"1px solid white", background:"rgba(249, 249, 249, 0.8)"}}>
            <p className="label">{`${label} : ${payload[0].value}`}</p>
            <p className="intro">{getIntroOfPage(label)}</p>
          </div>
        );
      }
      return null;
    }

    //Nedan kod skapar diagrammet och hämtas sedan i infoTemp.jsx
    return ( 
          <div style={{width:"300px", height:"360px", float:"left"}}>
               <div style={{textAlign:"center", marginLeft:"3.5em"}}>
            <input className="diagramInput" type="text" placeholder="Välj ett år" onKeyDown={e=> this.handleYear(e)}></input>
            </div>
            <BarChart
                    width={300}
                    height={300}
                    data={dataTemp}
                    margin={{
                    top: 25, right: 30, left: 20, bottom: 5,
                    }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type= "number" domain={[-1, 1]}/>
                <Tooltip content={<CustomTooltip/>}/>
                <Bar dataKey="TEMP" fill="#8884d8" shape={<TriangleBar/>} label={{ position: 'top' }}> 
                <Cell  fill ={COLORS[0]}/>
                <Cell  fill ={COLORS[1]}/>
                </Bar>
       
                </BarChart> 
            </div>
         );
    }
}
 
export default Temp;