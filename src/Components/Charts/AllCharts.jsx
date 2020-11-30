import React, { Component } from 'react';
import BarCharts from './CO2Emission';

// import { Route, Redirect, Switch } from "react-router-dom";



class AllCharts extends Component {
    state = {
        CO2Emission: [],
        indexYear1:0,
        indexYear2:0
      };
    
      async componentDidMount() {
        //Hämta data från API 1
        const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
        const response = await fetch(url);
        const data = await response.json();
     
        this.setState({CO2Emission: data});
      }
    
      handleYearFilter =(chartName, Year)=> {
        let index = this.state.CO2Emission.findIndex(co2=>co2.Year === parseInt(Year));
        if(index !== -1){
          switch(chartName){
            case "Bar1" : this.setState({indexYear1: index}); 
            break;

            case "Bar2" : this.setState({indexYear2: index}); 
            break;
          }

        } else{
          alert("Kunde inte finna någon information")
        }
      };
    render() { 
        return (  
            <div class= "card w-75 text-center">
              <div class= "card-body">
          <BarCharts 
      chartName="Bar1"
      CO2Emission={this.state.CO2Emission[this.state.indexYear1]} 
      onYearFilter={this.handleYearFilter}/>
      <BarCharts
      chartName="Bar2" 
      CO2Emission={this.state.CO2Emission[this.state.indexYear2]} 
      onYearFilter={this.handleYearFilter}/>
      <br/>
            </div>
            </div>
            


        );
    }
}
 
export default AllCharts;