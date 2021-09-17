import React from "react";
import {Link, Redirect} from "react-router-dom";
import axios from 'axios';

export default class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user_name: null,
            password: null,
            redirect: null
        }
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
          [name]: value
        });
      }

      handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/manga/insertUser', this.state).then(res => {
            console.log("this.setStatesadasd", this.state)
          console.log(res.data);
          if(res.data.result){
            this.setState({redirect: '/'});
          }
        }).catch(error => {
          console.log(error);
        });
      }

    render(){
        console.log(this.state)
        if(this.state.redirect){
            return <Redirect to ="/" />
        }
        return(
            <section class="signup spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="login__form">
                                <h3>Sign Up</h3>
                                <form action="#" method="post" onSubmit={this.handleSubmit}>
                                    {/* <div class="input__item">
                                        <input type="email" placeholder="Email address" />
                                        <span class="icon_mail"></span>
                                    </div> */}
                                    <div class="input__item">
                                        <input type="text" id="user_name" name="user_name" placeholder="Username" onChange={this.handleChange} />
                                        <span class="icon_profile"></span>
                                    </div>
                                    <div class="input__item">
                                        <input type="password" id="password" name="password" placeholder="Password" onChange={this.handleChange} />
                                        <span class="icon_lock"></span>
                                    </div>
                                    <button type="submit" class="site-btn">Login Now</button>
                                </form>
                                <h5>Already have an account? <a href="#">Log In!</a></h5>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="login__social__links">
                                <h3>Login With:</h3>
                                <ul>
                                    <li><a href="#" class="facebook"><i class="fa fa-facebook"></i> Sign in With Facebook</a>
                                    </li>
                                    <li><a href="#" class="google"><i class="fa fa-google"></i> Sign in With Google</a></li>
                                    <li><a href="#" class="twitter"><i class="fa fa-twitter"></i> Sign in With Twitter</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}