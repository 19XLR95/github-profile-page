import React from "react";
import Nav from "./Nav";
import MainGrid from "./MainGrid";

export default class App extends React.Component {
    render() {
        return (
            <>
                <Nav />

                <MainGrid />
            </>
        );
    }
}
