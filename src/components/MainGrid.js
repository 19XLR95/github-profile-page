import React from "react";
import MainGridLeft from "./MainGridLeft";
import MainGridRight from "./MainGridRight";
import MainTabs from "./MainTabs";

export default class MainGrid extends React.Component {
    render() {
        return (
            <main>
                <MainGridLeft />

                <MainGridRight>
                    <MainTabs />
                </MainGridRight>
            </main>
        );
    }
}
