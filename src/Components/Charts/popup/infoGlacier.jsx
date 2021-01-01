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
                //Ser till så att rätt data kommer i rätt diagram och så att inte samma kommer i båda om inte detta år skrivs in i båda input-fälten

         switch(chartName){
          case "Glacier1" : this.setState({indexYear1: index}); 
             break;

          case "Glacier2" : this.setState({indexYear2: index}); 
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
            <div style={{background:"rgba(0, 144, 170, 0.9)", paddingBottom: "15px", border:'2px solid #000'}}>
            <h2 id="spring-modal-title"className="chartTitle pt-3">Glaciärstorlek</h2>

              <div class="card mx-auto charts " style={{width:"750px"}}>
              <div className="chartHeader">
              <h3>Skriv in två årtal och se vad <br/> klimatförändringarna har gjort under åren</h3>
              </div>
              <div class="mx-auto chartContainer"> 
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
        </div>
        </div>
        );
    }

}



export default InfoGlacier;