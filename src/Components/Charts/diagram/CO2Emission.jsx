import React, { Component } from 'react';


import PropTypes from 'prop-types';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

//
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



export default class BarCharts extends Component {

  handleYear = e => {
        if(e.key === "Enter")
         {
           this.props.onYearFilter(this.props.chartName, e.target.value);
         }
      };
      
1

    render() { 
        let co2 = this.props.CO2Emission;

        if(co2 === undefined) return <p>Ingen data finns</p>;
        
        const dataBarChart = [
            {name: 'Gas', CO2: parseInt(co2["Gas Fuel"])}, 
            {name: 'Liq', CO2: co2["Liquid Fuel"] },
            {name: 'Sol', CO2: co2["Solid Fuel"]}, 
            {name: 'Cem', CO2: co2["Cement"]},
            {name: 'Flar', CO2: co2["Gas Flaring"]},
          ];

        /*Färger på staplar*/
        const COLORS =[ "#ff595e", "#f8961e", "#8ac926", "#1982c4", "#6a4c93"  ]
        
        /* Information om de olika staplarna */
        function getIntroOfPage(label) {
          if (label === 'Gas') {
            return 'Gas är en förkortning av Gas Fuel. På svenska Energigas. Med detta menas bränslen i gasfrom så som biogas, naturgas och gasol. Detta värde visar kolutsläpp från bränsleförbrukning. ';
          } if (label === 'Liq') {
            return 'Liq är en förkortning av Liquid Fuel. På svenska Flytande bränsel. Med detta menas bränslen i form av olja så som Diesel och bensin. Detta värde visar kolutsläpp från bränsleförbrukning.';
          } if (label === 'Sol') {
            return 'Sol är en förkortning av Solid Fuel. På svenska Fast bränsle. Med detta menas bränslen i fast form så som kol, trä och biomassa. Detta värde visar kolutsläpp från bränsleförbrukning.';
          } if (label === 'Cem') {
            return 'Cem är en förkortning av Cement. För detta mäter man kolutsläppet vid produktionen av cement.';
          } if (label === 'Flar') {
            return 'Flar är en förkortning av Gas Flaring. Med detta menas gas som brinner, detta används ofta som en industriell process. För detta mäter man kolutsläppet vid flammorna.';
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
        
    //Nedan kod skapar diagrammet och hämtas sedan i infoCO2.jsx
        return (
          <div style={{width:"300px", height:"360px", float:"left", }}>
              <div style={{textAlign:"center", marginLeft:"3em"}}>
                <input className="diagramInput" type="text" placeholder="Skriv in ett år och tryck enter" style={{textAlign:"center"}} onKeyDown={e=> this.handleYear(e)}></input>
                </div>
                <BarChart
                    width={300}
                    height={300}
                    data={dataBarChart}
                    margin={{
                    top: 25, right: 30, left: 20, bottom: 5,
                    }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type= "number" domain={[0, 4500]}/>
                <Tooltip content={<CustomTooltip/>}/>
                <Bar dataKey="CO2" fill="#8884d8" shape={<TriangleBar/>} label={{ position: 'top' }}> 
                <Cell  fill ={COLORS[0]}/>
                <Cell  fill ={COLORS[1]}/>
                <Cell  fill ={COLORS[2]}/>
                <Cell  fill ={COLORS[3]}/>
                <Cell  fill ={COLORS[4]}/>
                </Bar>
                </BarChart>
          
            </div>
            
            
            
        );
    }
  }

