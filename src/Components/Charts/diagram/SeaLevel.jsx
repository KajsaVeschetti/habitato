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
class Sea extends Component {
  handleYear = e => {
    if(e.key === "Enter")
     {
       this.props.onYearFilter(this.props.chartName, e.target.value);
     }
  };

    render() {
      let sea = this.props.SeaLevel;

      if(sea === undefined) return <p>Ingen data finns</p>;

    const dataSea = [
      {name: 'GMSL', SEA : parseInt(sea["GMSL"])}, 
      {name: 'GMSL ovisshet', SEA : sea["GMSL uncertainty"]}, 

    ];

    const COLORS =[ "#ff595e", "#f8961e", "#8ac926", "#1982c4", "#6a4c93" ] 
        return ( 
            <React.Fragment>
              <div style={{width:"300px", height:"400px", float:"left"}}>
              <div style={{textAlign:"center", marginLeft:"3.5em"}}>
            <input className="diagramInput" type="text" placeholder="Välj ett år" onKeyDown={e=> this.handleYear(e)}></input>
              </div>
            <BarChart
                    width={300}
                    height={300}
                    data={dataSea}
                    margin={{
                    top: 25, right: 30, left: 20, bottom: 5,
                    }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="SEA" fill="#8884d8" shape={<TriangleBar/>} label={{ position: 'top' }}> 
                <Cell  fill ={COLORS[3]}/>
                <Cell  fill ={COLORS[24]}/>
                </Bar>
       
                </BarChart> 
          </div>
          </React.Fragment>
         );
    }
}
 
export default Sea;