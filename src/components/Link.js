import React from "react";

export default class ButtonLink extends React.Component {
    render() {
        return (
            <a href="#">{this.props.btnValue} {this.props.children}</a>
        );
    }
}
