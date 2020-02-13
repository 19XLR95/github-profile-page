import React from "react";

export default class MainGridRight extends React.Component {
    render() {
        return (
            <div style={{marginTop: "20px"}}>
                {this.props.children}
            </div>
        );
    }
}
