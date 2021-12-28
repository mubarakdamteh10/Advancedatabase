import React from "react";
import axios from "axios";

export default class ReadManga extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            _id: props.match.params._id,
            ep: props.match.params.ep,
            data: [{

            }]
        }
       
    }

    componentDidMount(){
        // alert(JSON.stringify(this.state.ep))
        this.getData()
    }

    getData = () => {
        axios.get('http://localhost:3001/manga/getEp/' + this.state._id + "/" + this.state.ep)
        .then(res =>{
            // console.log(res.data.response.data)
            this.setState({data: res.data.response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        {/* <!-- space --> */}
                    </div>
                    <div className="col-8">
                        {this.state.data.ImagePath?.map(data => (
                            <img src={data}></img>
                        ))}
                    </div>
                    <div className="col-2">
                        {/* <!-- space --> */}
                    </div>
                    
                </div>
        </div>
        )
    }
}