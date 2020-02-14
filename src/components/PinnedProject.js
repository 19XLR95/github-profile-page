import React from "react";
import Link from "./Link";

export default class PinnedProject extends React.Component {
    render() {
        return (
            <div className="pinned-project">
                {this.props.children} <Link btnValue={this.props.btnValue} />

                <p>{this.props.description}</p>

                <div style={{backgroundColor: this.props.styleColor}}></div> <span>{this.props.projLang}</span>
            </div>
        );
    }
}
