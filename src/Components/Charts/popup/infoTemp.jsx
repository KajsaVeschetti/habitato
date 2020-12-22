import React, { Component } from 'react';
import { getTempdata } from "../data/temp";

import Temp from '../diagram/Temp';

import ReadMoreGT from "../InfoCharts/ReadMoreGT"





class InfoTemp extends Component {
  // skapar arrayer för de olika typerna av information
    state = {
        GlobalTemp: [],
        indexYear1:0,
        indexYear2:0
      };


    
      //hämtar information från de olika data filerna 
      async componentDidMount() {

        this.setState({
     
            GlobalTemp: getTempdata().sort((a, b) =>
            a.Year > b.Year ? 1 : b.Year > a.Year ? -1 : 0
             ),
       
        });
      }
    
      //Hämtar rätt information från det år som skrivs in 
      handleYearFilter =(chartName, Year)=> {
        let index = this.state.GlobalTemp.findIndex(temp=>temp.Year === parseInt(Year));
      
        
        if(index !== -1){
      
         switch(chartName){
          case "Temp1" : this.setState({indexYear1: index}); 
             break;

          case "Temp2" : this.setState({indexYear2: index}); 
            break;
          }

        } else{
          alert("Kunde inte finna någon information")
        }
      
          };
       
       ;
    render() { 
              
 

        return (  
          <div>
              <div class="card mx-auto charts " style={{width:"750px"}}>
              <div className="chartHeader">
              <h3>Skriv in två årtal och se vad <br/> klimatförändringarna har gjort under åren</h3>
              </div>
              <div class="mx-auto chartContainer">
              <div  component={Temp}>
                        <Temp 
                        chartName="Temp1"
                        GlobalTemp={this.state.GlobalTemp[this.state.indexYear1]}
                        onYearFilter={this.handleYearFilter}/>
                        <Temp 
                        chartName="Temp2"
                        GlobalTemp={this.state.GlobalTemp[this.state.indexYear2]}
                        onYearFilter={this.handleYearFilter}/>
                        {/* Globaltemp-info */}
                        <ReadMoreGT />
                        </div>

                      </div>
          </div>  
          </div>
        );
    }

}

export default InfoTemp;