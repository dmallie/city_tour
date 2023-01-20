import React, { Component} from 'react';
import './Tour.css';
import window_close from '../../close-window.png';
import square_down from '../../caret-square-down-solid.svg';

class Tour extends Component {
       constructor(props) {
              super(props);
              this.state = {
                     tour_address : props.prop_destination || '', 
                     filtered_tour : props.removeTour || '',
                     tour_id : props.key,
              }
              console.log(props);
       }
       render() {

              let {id, city, img, name, info }  = this.state.tour_address;
              // const { removeTour } = this.state.filtered_tourprops;

              return(
                     <div>
                            
                            <article className='tour'>
                                   <div className='img-container'>
                                          <img src={img} alt = 'city'/>
                                          <span className="close-btn"
                                                 onClick={() => {
                                                        this.state.filtered_tour(id);
                                          }}>
                                                 <img src={window_close} alt="close" />
                                                 <i className="fas fa-window-close"></i>
                                          </span>

                                   </div>
                                   <div className="tour-info">
                                          <h3>{city}</h3>
                                          <h4>{name}</h4>
                                          <h5 className="info">
                                                 info
                                                 <img src={square_down} alt="down" />
                                                 <i className='fas fa-caret-square-down'/>
                                          </h5>
                                          <p >
                                                {info} 
                                          </p>
                                   </div>

                            </article>
                     </div>
              );
       }
}export default Tour;