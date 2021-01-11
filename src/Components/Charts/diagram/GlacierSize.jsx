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
        {name: 'Antal Observationer', GLA : glacier["Number of observations"]}, 
 
      ];

      /*Färger på staplar*/
      const COLORS =[ "#ff595e", "#f8961e", "#8ac926", "#1982c4", "#6a4c93" ]

      /* Information om de olika staplarna */
      function getIntroOfPage(label) {
        if (label === 'Nivå') {
          return 'Här kan vi se den genomsnittliga massan av den uppmätta glaciären. Med detta menas hur stor glaciären är. Detta mäts i i meter vattenekvivalenter, vilket representerar förändringar i en glaciers genomsnittliga tjocklek.';
        } if (label === 'Antal Observationer') {
          return 'Här visas antalet glaciärer som har observerats';
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
              <div style={{textAlign:"center", marginLeft:"3em"}}>
            <input className="diagramInput" type="text" placeholder="Skriv in ett år" onKeyDown={e=> this.handleYear(e)}></input>
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
                <YAxis type= "number" domain={[-40, 40]}/>
                <Tooltip content={<CustomTooltip/>}/>
                <Bar dataKey="GLA" fill="#8884d8" shape={<TriangleBar/>} label={{ position: 'top' }}> 
                <Cell  fill ={COLORS[3]}/>
                <Cell  fill ={COLORS[4]}/>
                </Bar>
       
                </BarChart> 
     
          </div>

         );
    }
}
 
export default Glacier;