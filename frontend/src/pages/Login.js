import React from "react";
import {Link, Redirect} from "react-router-dom";
import axios from 'axios';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user_name: null,
            password: null,
            redirect: null
        }
    }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/auth/login', this.state).then(res => {
            let data = res.data.data;
            console.log(data);
            this.setState({
                data: res.data.data,
                redirect: true
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    render(){
        console.log(this.state)
        if(this.state.redirect){
            return <Redirect to ="/login" />
        }
        return(
            <>
            <section class="login spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="login__form">
                                <h3>Login</h3>
                                <form action="#" onSubmit={this.handleSubmit}>
                                    <div class="input__item">
                                        <input type="text" id="user_name" name="user_name" placeholder="Username" onChange={this.handleChange} />
                                        <span class="icon_mail"></span>
                                    </div>
                                    <div class="input__item">
                                        <input type="password" id="password" name="password" placeholder="Password" onChange={this.handleChange} />
                                        <span class="icon_lock"></span>
                                    </div>
                                    <button type="submit" class="site-btn">Login Now</button>
                                    
                                </form>
                                
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="login__register">
                                <h3>Dont’t Have An Account?</h3>
                                <Link to="/register"class="primary-btn">Register Now</Link>
                            </div>
                        </div>
                    </div>
                    <div class="login__social">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-6">
                                <div class="login__social__links">
                                    <span>or</span>
                                    <ul>
                                        <li><a href="#" class="facebook"><i class="fa fa-facebook"></i> Sign in With
                                        Facebook</a></li>
                                        <li><a href="#" class="google"><i class="fa fa-google"></i> Sign in With Google</a></li>
                                        <li><a href="#" class="twitter"><i class="fa fa-twitter"></i> Sign in With Twitter</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}