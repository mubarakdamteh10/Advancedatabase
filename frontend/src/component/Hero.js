import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from 'react-slideshow-image';

const fadeImage = [
    "https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABa8kicixUh7WSll03Bidk71jTGCWs1j8RSIlR0k1hJR4cDaGXlp5cWVLKZyg7h8micEjyiAJHDRwBEN-j_CgqPmALeEx.jpg?r=3fb",
    "https://www.online-station.net/wp-content/uploads/2021/02/Jujutsu.jpg",
    "https://wallpapercave.com/wp/wp4860664.jpg",
    "https://inwfile.com/s-de/f7lvc3.jpg",
    "https://wallpapercave.com/wp/wp6374185.jpg"
]


export default class Hero extends React.Component{


    
    render(){
        return(
            <section className="hero">
                <div className="container">
                <div className="row">
                    <div className="col-2">
                    </div>

                    <div className="col-8">
                        <div className="slide-container">
                            <Fade>
                                <div className="each-fade">
                                    <div className="image-container">
                                        <img src={fadeImage[0]} widgth="100%"/>
                                    </div>
                                    
                                </div>

                                <div className="each-fade">
                                    <div className="image-container">
                                        <img src={fadeImage[1]} widgth="100%"/>
                                    </div>
                                        <h3>Great Anime</h3>
                                </div>

                                <div className="each-fade">
                                    <div className="image-container">
                                        <img src={fadeImage[2]} widgth="100%"/>
                                    </div>
                                        {/* add detail picture */}
                                </div>

                                <div className="each-fade">
                                    <div className="image-container">
                                        <img src={fadeImage[3]} widgth="100%"/>
                                    </div>
                                        {/* add detail picture */}
                                </div>

                                <div className="each-fade">
                                    <div className="image-container">
                                        <img src={fadeImage[4]} widgth="100%"/>
                                    </div>
                                        {/* add detail picture */}
                                </div>
                            </Fade>

                        </div>

                    </div>

                    <div className="col-2">
                    </div>

                </div>

            </div>

            </section>
            
        )
    }
}