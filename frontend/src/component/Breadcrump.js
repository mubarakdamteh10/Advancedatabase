import React from "react";

export default class Breadcrumb extends React.Component{
    render(){
        return(
            <div class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__links">
                                <a href="./index.html"><i class="fa fa-home"></i> Home</a>
                                <a href="./categories.html">Categories</a>
                                <a href="#">Romance</a>
                                <span>Fate Stay Night: Unlimited Blade</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}