import React from "react";

export default class Link extends React.Component {
    render() {
        return (
            <a className={this.props.cssClasses && this.props.cssClasses.join(" ")} 
                href="#">{this.props.btnValue} {this.props.children}</a>
        );
    }
}
