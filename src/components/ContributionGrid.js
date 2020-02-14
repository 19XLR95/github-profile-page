import React from "react";

export default class ContributionGrid extends React.Component {
    cells(quantity) {
        let cells = [];

        for(let i = 0; i < quantity; i++) {
            if(Math.floor(Math.random() * 100) % 4 == 0) {
                cells.push(<div style={{backgroundColor: "#7bc96f"}}></div>);
            } else {
                cells.push(<div></div>);
            }
        }

        return cells;
    }

    render() {
        return (
            <div className="contribution-grid">
                {this.cells(50)}
                {this.cells(50)}
                {this.cells(50)}
                {this.cells(50)}
                {this.cells(50)}
                {this.cells(50)}
                {this.cells(50)}
            </div>
        );
    }
}
