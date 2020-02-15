import React from "react";
import Link from "./Link";
import githubIcon from "../assets/img/github-icon.svg";

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>© 2020 GitHub, Inc.</li>

                    <li>
                        <Link btnValue="Terms" />
                    </li>

                    <li>
                        <Link btnValue="Privacy" />
                    </li>

                    <li>
                        <Link btnValue="Security" />
                    </li>

                    <li>
                        <Link btnValue="Status" />
                    </li>

                    <li>
                        <Link btnValue="Help" />
                    </li>

                    <li>
                        <Link>
                            <img src={githubIcon} />
                        </Link>
                    </li>

                    <li>
                        <Link btnValue="Contact GitHub" />
                    </li>

                    <li>
                        <Link btnValue="Contact Pricing" />
                    </li>

                    <li>
                        <Link btnValue="API" />
                    </li>

                    <li>
                        <Link btnValue="Training" />
                    </li>

                    <li>
                        <Link btnValue="Blog" />
                    </li>

                    <li>
                        <Link btnValue="About" />
                    </li>
                </ul>
            </footer>
        );
    }
}
