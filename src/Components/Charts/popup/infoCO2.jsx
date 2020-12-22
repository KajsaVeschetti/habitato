import React, { Component } from 'react';
import { getCO2data } from "../data/co2";


import BarCharts from '../diagram/CO2Emission';
import ReadMore from "../InfoCharts/ReadMore"





class InfoCo2 extends Component {
  // skapar arrayer för de olika typerna av information
    state = {
        CO2Emission: [],
        indexYear1:0,
        indexYear2:0
      };


    
      //hämtar information från de olika data filerna 
      async componentDidMount() {

        this.setState({
          CO2Emission: getCO2data(),
        
        });
      }
    
      //Hämtar rätt information från det år som skrivs in 
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
          <div>
              <div class="card mx-auto charts " style={{width:"750px"}}>
              <h5>Skriv in två årtal och se vad <br/> klimatförändringarna har gjort under åren</h5>
              
                      <div class="mx-auto chartContainer">
                        <div  component={BarCharts}>
                        <BarCharts
                        chartName="Bar1"
                        CO2Emission={this.state.CO2Emission[this.state.indexYear1]} 
                        onYearFilter={this.handleYearFilter}/>
                        <BarCharts
                        chartName="Bar2"
                        CO2Emission={this.state.CO2Emission[this.state.indexYear2]} 
                        onYearFilter={this.handleYearFilter}/>
                       {/* Co2-info */}
                        <ReadMore />
                        </div>
                      </div>
                    </div>
          
          </div>  

        );
    }

}

export default InfoCo2;