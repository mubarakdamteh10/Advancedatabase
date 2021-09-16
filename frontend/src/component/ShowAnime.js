import React from "react";
import Manga from "./Manga";
import axios from 'axios';
import SideManga from "./SideManga";
export default class ShowAnime extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: [{
                name: "manga",
                view: null,
                score: null,
                cover: "manga.jpg",
                categories: [
                    ""
                ]
            }]
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        axios.get("http://localhost:3001/manga/searchManga", this.state).then(res => {
            console.log("res.data",res.data.response.data);
            // this.setState({data: res.data.data});
            this.setState({data: res.data.response.data})
            console.log("this.state",this.state.data)
        }).catch((error) => {
            console.log(error);        
        })
    }
 
    render(){
        const style = {
            marginTop: '100px'
        }
        return(
        <section class="product spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="trending__product">
                            <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-8">
                                    <div class="section-title">
                                        <h4>ALL Manga</h4>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4">
                                    {/* <div class="btn__all">
                                        <a href="#" class="primary-btn">View All <span class="arrow_right"></span></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="row">
                            {
                                 this.state.data?.map((item) => (
                                     <Manga name={item.name} cover={item.cover} score={item.score} view={item.view} category={item.categories} />
                                 ))
                             } 
                            </div>
                       </div>
                   </div>
                   <SideManga />   
                </div>
             </div>
        </section>
        
        )
    }
}