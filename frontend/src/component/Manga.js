import React from 'react';
import { Link } from 'react-router-dom';
export default class Manga extends React.Component{

    render(){
        const style = {
            width: "658px",
            height: "939px"
        }
        return(
    <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="product__item">
            <div class="product__item__pic set-bg">
                <Link to={"/manga/" + this.props._id}><img src={this.props.cover} /></Link>
                <div class="ep">{this.props.score} / 10</div>
                <div class="view"><i class="fa fa-eye"></i>{this.props.view}</div>
            </div>
            <div class="product__item__text">
                <ul>
                    <li>{this.props.category[0]} </li>
                    <li>{this.props.category[1]}</li>
                    <li>{this.props.category[2]}</li>
                </ul>
                <h5><Link to={"/manga/" + this.props._id}>{this.props.name}</Link></h5>
                {/* <h5>{this.props.name}</h5> */}
            </div>
        </div>
    </div>
        
        )
    }
}