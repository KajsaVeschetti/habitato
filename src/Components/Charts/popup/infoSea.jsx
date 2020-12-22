import React, { Component } from 'react';
import { getSeadata } from "../data/sealevel";

import Sea from '../diagram/SeaLevel';

import ReadMoreSL from "../InfoCharts/ReadMoreSL"





class InfoSea extends Component {
  // skapar arrayer för de olika typerna av information
    state = {
        SeaLevel: [],
        indexYear1:0,
        indexYear2:0
      };


    
      //hämtar information från de olika data filerna 
      async componentDidMount() {

        this.setState({
     
          SeaLevel: getSeadata(),
       
        });
      }
    
      //Hämtar rätt information från det år som skrivs in 
      handleYearFilter =(chartName, Year)=> {
        let index = this.state.SeaLevel.findIndex(sea=>sea.Year === parseInt(Year));
      
        
        if(index !== -1){
      
         switch(chartName){
          case "Sea1" : this.setState({indexYear1: index}); 
             break;

          case "Sea2" : this.setState({indexYear2: index}); 
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
              <h5>Skriv in två årtal och se vad <br/> klimatförändringarna har gjort under åren</h5>

              
                        <div exact path="/sealevel" component={Sea}>
                        <Sea 
                        chartName="Sea1"
                        SeaLevel={this.state.SeaLevel[this.state.indexYear1]}
                        onYearFilter={this.handleYearFilter}/>
                        <Sea 
                        chartName="Sea2"
                        SeaLevel={this.state.SeaLevel[this.state.indexYear2]}
                        onYearFilter={this.handleYearFilter}/>
                        {/* Havsnivå-info  */}
                        <ReadMoreSL />
                        </div>

                      </div>
          </div>  

        );
    }

}

export default InfoSea;