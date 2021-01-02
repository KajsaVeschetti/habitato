import React, { Component } from 'react';
import { getCO2data } from "../data/co2";


import BarCharts from '../diagram/CO2Emission';
import ReadMore from "../InfoCharts/ReadMore"
import { makeStyles } from '@material-ui/core/styles';



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
      
          //Ser till så att rätt data kommer i rätt diagram och så att inte samma kommer i båda om inte detta år skrivs in i båda input-fälten
         switch(chartName){
          case "Bar1" : this.setState({indexYear1: index}); 
             break;

          case "Bar2" : this.setState({indexYear2: index}); 
            break;
          }
          //Skulle ingen data finnas kommer ett felmeddelande upp 
        } else{
          alert("Kunde inte finna någon information")
        }
      };
    
      render() {
        return (
          /*Nedan kod hämtar ner datan till de två diagram som ska synas. Dessa diagram hämtas från en annan komponent
          Där finnen en div för att bygga in de två diagrammen och en informationsruta till en bredd.
          Varje diagram har ett chartName för att kunna hämta data från det årtal som skrivs in  */  
          <div style={{background:"rgba(41, 170, 225, 0.9)", paddingBottom: "15px", border:'2px solid #000' }}>
          <h2 id="spring-modal-title" className="chartTitle pt-3">Koldioxidutsläpp</h2>
        
              <div className="card mx-auto charts " style={{width:"750px"}}> 
             
              <div className="chartHeader">
              <h3>Skriv in två årtal och se vad <br/> klimatförändringarna har gjort under åren</h3>
              </div>
                      <div class="mx-auto chartContainer">
                        <div component={BarCharts}>
                        <BarCharts
                        chartName="Bar1"
                        CO2Emission={this.state.CO2Emission[this.state.indexYear1]} 
                        onYearFilter={this.handleYearFilter}/>
                        <BarCharts
                        chartName="Bar2"
                        CO2Emission={this.state.CO2Emission[this.state.indexYear2]} 
                        onYearFilter={this.handleYearFilter}/>
                       {/* Co2-info */}
                       <ReadMore/> 
                        </div>   
                                      <div>
                                                    
                      </div>  
                    </div>       
                    </div>
  
                    </div>
        
         
        );
    
    }

  }
export default InfoCo2;

