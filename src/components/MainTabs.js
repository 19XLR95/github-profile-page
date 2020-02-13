import React from "react";
import Link from "./Link";

export default class MainTabs extends React.Component {
    render() {
        return (
            <div>
                <Link cssClasses={["active-tab"]} btnValue="Overview" />

                <Link btnValue="Repositories">
                    <span>18</span>
                </Link>

                <Link btnValue="Projects">
                    <span>0</span>
                </Link>

                <Link btnValue="Stars">
                    <span>38</span>
                </Link>

                <Link btnValue="Followers">
                    <span>4</span>
                </Link>

                <Link btnValue="Following">
                    <span>8</span>
                </Link>
            </div>
        );
    }
}
