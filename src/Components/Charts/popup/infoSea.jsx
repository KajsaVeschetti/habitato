import React, { Component } from 'react';
import { getSeadata } from "../../data/sealevel";

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
        //Ser till så att rätt data kommer i rätt diagram och så att inte samma kommer i båda om inte detta år skrivs in i båda input-fälten

         switch(chartName){
          case "Sea1" : this.setState({indexYear1: index}); 
             break;

          case "Sea2" : this.setState({indexYear2: index}); 
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
            <div style={{background:"rgba(20, 109, 177, 0.9)", paddingBottom: "15px", border:'2px solid #000'}}>
            <h2 id="spring-modal-title"className="chartTitle pt-3">Havsnivån</h2>
              <div className="card mx-auto charts " style={{width:"750px"}}>
              <div className="chartHeader">
              <h3>I det här diagrammet ser vi den sammanslagna <br/> förändringen av havsnivån för världens alla hav. </h3>
              <h4>Skriv in ett årtal mellan 1880-2014 och tryck på enter för att få fram värden.</h4>
              </div>
              <div className="mx-auto chartContainer">
                        <div component={Sea}>
                        <Sea  /* Hämtar in diagrammet */
                        chartName="Sea1"
                        SeaLevel={this.state.SeaLevel[this.state.indexYear1]}
                        onYearFilter={this.handleYearFilter}/>
                        <Sea   /* Hämtar in diagrammet */
                        chartName="Sea2"
                        SeaLevel={this.state.SeaLevel[this.state.indexYear2]}
                        onYearFilter={this.handleYearFilter}/>
                        <ReadMoreSL />
                        </div>

                      </div>
          </div>  
   </div>
   </div>
        );
    }

}

export default InfoSea;