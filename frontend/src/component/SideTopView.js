import React from "react";
import { Link } from 'react-router-dom'

export default class SideTopView extends React.Component{
    render(){
        const style={
            width: "100%",
            height: "350px",
            border: "3px solid red"
        }
        return(
            <div class="filter__gallery">
                <Link to={"/manga/" + this.props._id}><img style={style} src={this.props.cover} /></Link>
                <h5><Link to={"/manga/" + this.props._id}>{this.props.name}</Link></h5>

            <div class="product__sidebar__view__item set-bg mix day years">
                
                <div class="ep">{this.props.score} / 10</div>
                <div class="view"><i class="fa fa-eye"></i>{this.props.view}</div>
            </div>     
        </div>
        )
    }
}