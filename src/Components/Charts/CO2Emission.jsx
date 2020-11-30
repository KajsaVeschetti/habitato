import React, { Component } from 'react';

import { BarChart, Bar, Cell,
    XAxis,
    YAxis,
    CartesianGrid,
  } from "recharts";


class BarCharts extends Component {
    handleYear = e => {
        if(e.key === "Enter")
        {
            this.props.onYearFilter(this.props.chartName, e.target.value);
        }
    };

    render() { 

        let co2 = this.props.CO2Emission;

        if(co2 === undefined) return <p>Ingen data finns</p>;
        
        const dataBarChart = [
            {name: 'Gas', CO2: parseInt(co2["Gas Fuel"])},
            {name: 'Liq', CO2: (co2["Liquid Fuel"])},
            {name: 'Sol', CO2: (co2["Solid Fuel"])},
            {name: 'Cem', CO2: (co2["Cement"])},
        ];

        const COLORS =[ "#d9534f", "#5bc0de", "#5cb85c", "#428bca" ]


        return (  
            <div style={{width:"350px", height:"400px"}}>
                <input type="text" placeholder="Välj ett år" onKeyDown={e=> this.handleYear(e)}></input>
                <BarChart
                width={350}
                height={400}
                data={dataBarChart}
                margin={{top:5, right: 30, left: 20, bottom: 5, }}>
                    <CartesianGrid storokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Bar dataKey="CO2" fill="#8884d8">
                        <Cell fill={COLORS[0]}/>
                        <Cell fill={COLORS[1]}/>
                        <Cell fill={COLORS[2]}/>
                        <Cell fill={COLORS[3]}/>
                    </Bar>
                </BarChart>
            </div>
        );
    }
}
 
export default BarCharts;