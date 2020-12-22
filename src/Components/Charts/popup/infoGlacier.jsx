import React, { Component } from 'react';
import { getGlacierdata } from "../data/glacier";

import Glacier from '../diagram/GlacierSize';

import ReadMoreGS from "../InfoCharts/ReadMoreGS"





class InfoGlacier extends Component {
  // skapar arrayer för de olika typerna av information
    state = {
        GlacierSize: [],
        indexYear1:0,
        indexYear2:0
      };


    
      //hämtar information från de olika data filerna 
      async componentDidMount() {

        this.setState({
     
          GlacierSize: getGlacierdata(),
       
        });
      }
    
      //Hämtar rätt information från det år som skrivs in 
      handleYearFilter =(chartName, Year)=> {
        
        let index = this.state.GlacierSize.findIndex(glacier=>glacier.Year === parseInt(Year));
      
        
        if(index !== -1){
      
         switch(chartName){
          case "Glacier1" : this.setState({indexYear1: index}); 
             break;

          case "Glacier2" : this.setState({indexYear2: index}); 
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

                        <div component={Glacier}>
                        <Glacier
                        chartName="Glacier1"
                        GlacierSize={this.state.GlacierSize[this.state.indexYear1]}
                        onYearFilter={this.handleYearFilter}/>
                        <Glacier 
                        chartName="Glacier2"
                        GlacierSize={this.state.GlacierSize[this.state.indexYear2]}
                        onYearFilter={this.handleYearFilter}/>
                        {/* Glasiär-info */}
                        <ReadMoreGS />
                        </div>
                     

                      </div>
          </div>  

        );
    }

}

export default InfoGlacier;