import React from "react"
import Breadcrumb from "../component/Breadcrump"
import MightYouLike from "../component/MightYouLike"
import ShowAnime from "../component/ShowAnime"
import Hero from "../component/Hero"


export default class Home extends React.Component{
    render(){
        return(
            <>
            {/* <Breadcrumb/> */}
            <Hero/>
            <ShowAnime/>
            {/* <MightYouLike /> */}
            </>
        )
    }
}