import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faMapMarkerAlt, 
    faEnvelope, faLink, faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "./Link";

export default class MainGridLeft extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img id="profilePic" src="https://avatars3.githubusercontent.com/u/20626790?s=400&v=4" />

                    <div id="status"><span>👨‍💻</span> Passionate in his profession</div>
                </div>

                <div>
                    <h2>Ömer Aydın</h2>

                    <h2>19XLR95</h2>
                </div>

                <div>
                    Software Engineer

                    <div>
                        <FontAwesomeIcon icon={faUserFriends} /> Sebit Information & Education
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Ankara / Turkey
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faEnvelope} /> <Link btnValue="Sign in to view email" />
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faLink} /> <Link btnValue="https://omerthedev.com/" hrefVal="https://omerthedev.com/" />
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faStar} /> <span>PRO</span>
                    </div>
                </div>
            </div>
        );
    }
}

