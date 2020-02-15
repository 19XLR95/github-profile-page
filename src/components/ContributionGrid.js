import React from "react";

export default class ContributionGrid extends React.Component {
    randomKey() {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=.";
        let key = "";

        for(let i = 0; i < 32; i++) {
            let randomIndex = Math.floor(Math.random() * chars.length);

            key += chars.charAt(randomIndex);
        }

        return key;
    }

    cells(quantity) {
        let cells = [];

        for(let i = 0; i < quantity; i++) {
            let key = this.randomKey();

            if(Math.floor(Math.random() * 100) % 4 == 0) {
                cells.push(<div key={key} style={{backgroundColor: "#7bc96f"}}></div>);
            } else {
                cells.push(<div key={key}></div>);
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
