import React from "react";
import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import githubIcon from "../assets/img/github-icon.svg";

export default class NavLeft extends React.Component {
    render() {
        return (
            <div>
                <img src={githubIcon} />
                <Link btnValue="Why GitHub?">
                    <FontAwesomeIcon icon={faChevronDown} />
                </Link>

                <Link btnValue="Enterprise" />

                <Link btnValue="Explore">
                    <FontAwesomeIcon icon={faChevronDown} />
                </Link>
                
                <Link btnValue="Marketplace" />

                <Link btnValue="Pricing">
                    <FontAwesomeIcon icon={faChevronDown} />
                </Link>
            </div>
        );
    }
}
