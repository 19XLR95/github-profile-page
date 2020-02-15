import React from "react";
import Nav from "./Nav";
import MainGrid from "./MainGrid";
import Footer from "./Footer";

export default class App extends React.Component {
    render() {
        return (
            <>
                <Nav />

                <MainGrid />

                <Footer />
            </>
        );
    }
}
