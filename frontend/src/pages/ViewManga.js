import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom'

export default class ViewManga extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            _id: props.match.params._id,
            data: [{
                
            }]
        }
      }

     componentDidMount(){
        this.getData()
    }

    getData = () => {
        axios.get('http://localhost:3001/manga/getEpbyMangaID/' + this.state._id).then(res => {
            // var data = res.data.response.data;
            // console.log("dataaaaa", data);
            this.setState({data: res.data.response.data})
            // alert(JSON.stringify(res.data.response.data.Epmanga[0]))
            console.log("this.setState.ViewManga", this.state);
        }).catch(error => {
            console.log(error);
        });
    }    
   
    render(){
        const style1 = {
            padding: 10,

        }
        return(
            <section class="anime-details spad">
                <div class="container">
                    <div class="anime__details__content">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="anime__details__pic ">
                                    <img src ={this.state.data.cover}/>
                                        {/* <div class="comment"><i class="fa fa-comments">11</i></div>
                                        <div class="view"><i class="fa fa-eye">{this.state.data.view}</i></div> */}
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="anime__details__text">
                                    <div class="anime__details__title">
                                        <h3>{this.state.data.name}</h3>
                                        <span>フェイト／ステイナイト, Feito／sutei naito</span>
                                    </div>
                                    <div class="anime__details__rating">
                                        <div class="rating">
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star-half-o"></i></a>
                                        </div>
                                        <span>1.029 Votes</span>
                                    </div>
                                    <p>{this.state.data.description}</p>
                                    <div class="anime__details__widget">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <ul>
                                                    <li><span>Type:</span> TV Series</li>
                                                    <li><span>Writer:</span> {this.state.data.writer} </li>
                                                    <li><span>Date aired:</span> Oct 02, 2019 to ?</li>
                                                    <li><span>Status:</span> Airing</li>
                                                    <li><span>Category:</span>
                                                        {this.state.data.categories?.map(category => (
                                                            <b style={{fontWeight: 'normal'}}> {category}</b>
                                                        ))}
                                                    </li>
                                                    {/* <li><span>Category:</span> {this.state.data.categories}</li> */}
                                                </ul>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <ul>
                                                    <li><span>Scores:</span> {this.state.data.score}</li>
                                                    <li><span>Rating:</span> 8.5 / 161 times</li>
                                                    <li><span>All Episode:</span> 24 min/ep</li>
                                                    <li><span>Quality:</span> HD</li>
                                                    <li><span>Views:</span> {this.state.data.view} </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="anime__details__btn">
                                        <a href="#" class="follow-btn"><i class="fa fa-heart-o"></i> Follow</a>
                                        <a href="/" class="watch-btn"><span>Watch Now</span> <i
                                            class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>  
                            <div>
                                {this.state.data.Epmanga?.map(data => (
                                    <div><Link to={"/readManga/" + this.state._id + "/" + data.manga_ep}> {data.manga_ep}</Link></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        )
    }
}