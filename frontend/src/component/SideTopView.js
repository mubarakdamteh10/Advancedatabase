import React from "react";
export default class SideTopView extends React.Component{
    render(){
        const style={
            width: "100%",
            height: "350px"
        }
        return(
            <div class="filter__gallery">
            <div class="product__sidebar__view__item set-bg mix day years">
                <img style={style} src={this.props.cover} />
                <div class="ep">{this.props.score} / 10</div>
                <div class="view"><i class="fa fa-eye"></i>{this.props.view}</div>
                <h5><a href="#">{this.props.name}</a></h5>
            </div>     
        </div>
        )
    }
}