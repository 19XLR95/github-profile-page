import React from "react";
import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import githubIcon from "../assets/img/github-icon.svg";

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <NavLeft />

                <NavRight />
            </nav>
        );
    }
}

class NavLeft extends React.Component {
    constructor() {
        super();

        this.state = {
            ddm1Display: false,
            ddm2Display: false,
            ddm3Display: false
        };

        this.toggleDropDownMenu = this.toggleDropDownMenu.bind(this);
    }

    toggleDropDownMenu(ddmStateName) {
        this.setState(
            (prevState) => {
                return {
                    [ddmStateName]: !prevState[ddmStateName]
                };
            }
        );
    }

    render() {
        return (
            <div>
                <img src={githubIcon} />

                <Link toggleDDM={this.toggleDropDownMenu} ddmStateName="ddm1Display" 
                    btnValue="Why GitHub?" cssClasses={["toggled-link"]}>
                    <FontAwesomeIcon icon={faChevronDown} />
                    <div className="drop-down-menu" style={this.state.ddm1Display ? {display: "flex", animationName: "ddm-on"} : {display: "none", animationName: ""}}>
                        <Link cssClasses={["ddm-item ddm-item-title-active"]} btnValue="Features" />
                        <Link cssClasses={["ddm-item"]} btnValue="Code review" />
                        <Link cssClasses={["ddm-item"]} btnValue="Project management" />
                        <Link cssClasses={["ddm-item"]} btnValue="Integrations" />
                        <Link cssClasses={["ddm-item"]} btnValue="Actions" />
                        <Link cssClasses={["ddm-item"]} btnValue="Packages" />
                        <Link cssClasses={["ddm-item"]} btnValue="Security" />
                        <Link cssClasses={["ddm-item"]} btnValue="Team management" />
                        <Link cssClasses={["ddm-item"]} btnValue="Hosting" />
                        <hr style={{width: "200px", border: "0.5px solid rgba(0, 0, 0, 0.1)"}} />
                        <Link cssClasses={["ddm-item ddm-item-title-active"]} btnValue="Customer stories" />
                        <Link cssClasses={["ddm-item ddm-item-title-active"]} btnValue="Security" />
                    </div>
                </Link>

                <Link btnValue="Enterprise" />

                <Link toggleDDM={this.toggleDropDownMenu} ddmStateName="ddm2Display" 
                    btnValue="Explore?" cssClasses={["toggled-link"]}>
                    <FontAwesomeIcon icon={faChevronDown} />
                    <div className="drop-down-menu" style={this.state.ddm2Display ? {display: "flex", animationName: "ddm-on"} : {display: "none", animationName: ""}}>
                        <Link cssClasses={["ddm-item ddm-item-title-active"]} btnValue="Explore GitHub" />
                        <hr style={{width: "200px", border: "0.5px solid rgba(0, 0, 0, 0.1)"}} />
                        <Link cssClasses={["ddm-item ddm-item-title-inactive"]} btnValue="Learn & contribute" />
                        <Link cssClasses={["ddm-item"]} btnValue="Topics" />
                        <Link cssClasses={["ddm-item"]} btnValue="Collections" />
                        <Link cssClasses={["ddm-item"]} btnValue="Trending" />
                        <Link cssClasses={["ddm-item"]} btnValue="Learning Lab" />
                        <Link cssClasses={["ddm-item"]} btnValue="Open source guides" />
                        <hr style={{width: "200px", border: "0.5px solid rgba(0, 0, 0, 0.1)"}} />
                        <Link cssClasses={["ddm-item ddm-item-title-inactive"]} btnValue="Connect with others" />
                        <Link cssClasses={["ddm-item"]} btnValue="Events" />
                        <Link cssClasses={["ddm-item"]} btnValue="Community forum" />
                        <Link cssClasses={["ddm-item"]} btnValue="GitHub Education" />
                    </div>
                </Link>
                
                <Link btnValue="Marketplace" />

                <Link toggleDDM={this.toggleDropDownMenu} ddmStateName="ddm3Display" 
                    btnValue="Pricing" cssClasses={["toggled-link"]}>
                    <FontAwesomeIcon icon={faChevronDown} />
                    <div className="drop-down-menu" style={this.state.ddm3Display ? {display: "flex", animationName: "ddm-on"} : {display: "none", animationName: ""}}>
                        <Link cssClasses={["ddm-item ddm-item-title-active"]} btnValue="Plans" />
                        <Link cssClasses={["ddm-item"]} btnValue="Compare plans" />
                        <Link cssClasses={["ddm-item"]} btnValue="Contact Sales" />
                        <hr style={{width: "200px", border: "0.5px solid rgba(0, 0, 0, 0.1)"}} />
                        <Link cssClasses={["ddm-item ddm-item-title-active"]} btnValue="Nonprofit" />
                        <Link cssClasses={["ddm-item ddm-item-title-active"]} btnValue="Education" />
                    </div>
                </Link>
            </div>
        );
    }
}

class NavRight extends React.Component {
    constructor() {
        super();

        this.state = {
            displaySearchIcon: "block"
        };

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onFocus(event) {
        event.target.placeholder = "";
        event.target.style.color = "#404448";

        this.setState({
            displaySearchIcon: "none"
        });
    }

    onBlur(event) {
        event.target.placeholder = "Search";
        event.target.style.color = "white";

        this.setState({
            displaySearchIcon: "block"
        });
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search" onBlur={this.onBlur} onFocus={this.onFocus} />
                <FontAwesomeIcon style={{display: this.state.displaySearchIcon}} className="icon-search" icon={faSearch} />

                <Link btnValue="Sign in" />
                
                <Link cssClasses={["border-white"]} btnValue="Sign up" />
            </div>
        );
    }
}
