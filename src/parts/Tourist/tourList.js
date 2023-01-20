import React, {Component} from "react";
import Tour from "../Tour/Tour.js";
import './touristList.css';
import { tourData } from '../tourData';

class TourList extends Component {
       constructor(props){
              super(props);
              this.state = {
                     tour_data: tourData,
              }
       }
       removeTour = (id) => {
              console.log('removed id: ', id);
              // assign the entire collection to the tours 
              const tours  = this.state.tour_data;
              // filterout the item with id value id
              console.log('tours: ', tours);
              const sortedTour = tours.filter(tour => tour.id != id);
              // set the state with sortedTour collection
              this.setState({ tour_data: sortedTour });
       };
       render(){
              console.log(this.state.tour_data);
              return (
                     <div className="tour-list">
                            {this.state.tour_data.map((destination) => (
                                   <Tour key={destination.id} prop_destination={destination} 
                                          removeTour={this.removeTour}/>
              ))}
                            
                            
                     </div>
              );
       }
}

export default TourList;