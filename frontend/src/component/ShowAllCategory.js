import React from 'react';
import axios from 'axios';

export default class Manga extends React.Component{


    render(){
        console.log("this.children",this.props.mangaName)
        return(
        <div class="product__page__content">    
            <div class="product__page__title">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-6">
                        <div class="section-title">
                            <h4>{this.props.categoryName}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" > 
                            <img src="img/popular/popular-1.jpg" />
                            <div class="ep"> / 10</div>
                            <div class="comment"><i class="fa fa-comments"></i> 11</div>
                            <div class="view"><i class="fa fa-eye"></i> 9141</div>
                        </div>
                        <div class="product__item__text">
                            <ul>
                                <li>{this.children}</li>
                                <li>Movie</li>
                            </ul>
                            <h5><a href="#"></a></h5>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}