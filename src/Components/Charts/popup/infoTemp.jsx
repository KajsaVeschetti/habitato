import React, { Component } from 'react';
import { getTempdata } from "../../data/temp";

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
        //Ser till så att rätt data kommer i rätt diagram och så att inte samma kommer i båda om inte detta år skrivs in i båda input-fälten

         switch(chartName){
          case "Temp1" : this.setState({indexYear1: index}); 
             break;

          case "Temp2" : this.setState({indexYear2: index}); 
            break;
          }
          //Skulle ingen data finnas kommer ett felmeddelande upp 

        } else{
          alert("Kunde inte finna någon information")
        }
      
          };
       
       ;
    render() { 
              
 

        return (  
           /*Nedan kod hämtar ner datan till de två diagram som ska synas. Dessa diagram hämtas från en annan komponent
          Där finnen en div för att bygga in de två diagrammen och en informationsruta till en bredd.
          Varje diagram har ett chartName för att kunna hämta data från det årtal som skrivs in  */ 
          <div>
            <div style={{background:"rgba(68, 118, 128, 0.9)", paddingBottom: "15px", border:'2px solid #000'}}>
            <h2 id="spring-modal-title"className="chartTitle pt-3">Global Tempratur</h2>

              <div className="card mx-auto charts " style={{width:"750px"}}>
              <div className="chartHeader">
              <h3>I det här diagrammet kan vi se hur temperaturen har <br/> ändrats på vår jord genom åren.</h3>
              <h4>Skriv in ett årtal mellan 1880-2016 och tryck på enter för att få fram värden.</h4>
              </div>
              <div className="mx-auto chartContainer">
              <div  component={Temp}>
                        <Temp  /* Hämtar in diagrammet */
                        chartName="Temp1"
                        GlobalTemp={this.state.GlobalTemp[this.state.indexYear1]}
                        onYearFilter={this.handleYearFilter}/>
                        <Temp   /* Hämtar in diagrammet */
                        chartName="Temp2"
                        GlobalTemp={this.state.GlobalTemp[this.state.indexYear2]}
                        onYearFilter={this.handleYearFilter}/>
                        {/* Globaltemp-info */}
                        <ReadMoreGT />
                        </div>

                      </div>
          </div>  
          </div>
          </div>
        );
    }

}

export default InfoTemp;