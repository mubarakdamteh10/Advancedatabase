import React from 'react';
import axios from 'axios';
import ShowAllCategory from '../component/ShowAllCategory';

export default class Category extends React.Component{
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
        axios.get("http://localhost:3001/manga/searchByCategory", this.state).then(res => {
            console.log("res Category",res.data.response.data);
            // this.setState({data: res.data.data});
            this.setState({data: res.data.response.data})
            console.log("this.state",this.state.data[0].mangaByCategory[0].name)
        }).catch((error) => {
            console.log(error);        
        })
    }
    render(){
        return(
        <section class="product-page spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                {
                    this.state.data?.map((item) => (
                        <ShowAllCategory  categoryName={item.name}/>
                    ))
                }
                </div>
            </div>
        </div>
        </section>
        )
    }
}