import React from "react";
import axios from 'axios';
import SideTopView from "./SideTopView";

export default class TopViewManga extends React.Component{
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
        this.getData();
    }

    getData = () => {
        axios.get("http://localhost:3001/manga/viewerManga", this.state).then(res => {
            console.log("res.data Topview",res.data.response.data);
            // this.setState({data: res.data.data});
            this.setState({data: res.data.response.data})
            console.log("this.state",this.state.data)
        }).catch((error) => {
            console.log(error);        
        })
    }
    render(){
        return(
            <>
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <div class="product__sidebar">
                        <div class="product__sidebar__view">
                            <div class="section-title">
                                <h5>Top Views</h5>
                            </div>
                            {
                                    this.state.data?.map((item) => (
                                        <SideTopView name={item.name} cover={item.cover} score={item.score} view={item.view}/>
                                    ))
                                } 
                        </div>
                        
                    </div>
                </div>
        
        </>
        )
    }
}