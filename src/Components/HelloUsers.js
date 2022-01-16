import React from "react";

class HelloUsers extends React.Component {
    render(){
        return(
            <div>
            <h1>This is a {this.props.name}</h1>
            </div>
        )
    }
}
export default HelloUsers;