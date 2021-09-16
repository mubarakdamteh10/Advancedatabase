import React from 'react';
import { Link } from 'react-router-dom';
export default class Manga extends React.Component{

    render(){
        const style = {
            width: "658",
            height: "939"
        }
        return(
    <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="product__item">
            <div class="product__item__pic set-bg">
                <img style={style} src={this.props.cover} />
                <div class="ep">{this.props.score} / 10</div>
                <div class="view"><i class="fa fa-eye"></i>{this.props.view}</div>
            </div>
            <div class="product__item__text">
                <ul>
                    <li>{this.props.category[0]} </li>
                    <li>{this.props.category[1]}</li>
                    <li>{this.props.category[2]}</li>
                </ul>
                <h5><a href="#">{this.props.name}</a></h5>
            </div>
        </div>
    </div>
        
        )
    }
}