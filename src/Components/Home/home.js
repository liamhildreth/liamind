import React, {Component} from 'react';
import profile from "../../ottawa.jpg"

class home extends Component{
    render(){
    return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <img width = "300" src={profile}></img>
        <br />
        <br />

        <h5>Hi! I'm Liam</h5>
    </div>
  );
}
}

export default home;