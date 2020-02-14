import React from "react";
import MainGridLeft from "./MainGridLeft";
import MainGridRight from "./MainGridRight";
import MainTabs from "./MainTabs";
import PinnedProject from "./PinnedProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import ContributionGrid from "./ContributionGrid";

export default class MainGrid extends React.Component {
    render() {
        return (
            <main>
                <MainGridLeft />

                <MainGridRight>
                    <MainTabs />

                    Pinned

                    <div className="pinned-grid">
                        <PinnedProject btnValue="customer-agent-system" styleColor="#f1e05a" 
                        description="Java + Spring Boot + HTML + CSS + JS + jQuery" projLang="JavaScript">
                            <FontAwesomeIcon icon={faBook} />
                        </PinnedProject>

                        <PinnedProject btnValue="sharepair" styleColor="#4f5d95" 
                        description="PHP + Laravel + HTML + CSS + JS + jQuery" projLang="PHP">
                            <FontAwesomeIcon icon={faBook} />
                        </PinnedProject>

                        <PinnedProject btnValue="example-company-website-1" styleColor="#4f5d95" 
                        description="PHP + Laravel + HTML + CSS + JS + SemanticUI + jQuery" projLang="PHP">
                            <FontAwesomeIcon icon={faBook} />
                        </PinnedProject>

                        <PinnedProject btnValue="pro-composer-html-template" styleColor="#e34c26" 
                        description="HTML + CSS + JS + SemanticUI + jQuery" projLang="HTML">
                            <FontAwesomeIcon icon={faBook} />
                        </PinnedProject>

                        <PinnedProject btnValue="example-company-website-template-2" styleColor="#e34c26" 
                        description="HTML + CSS + JS + SemanticUI + jQuery" projLang="HTML">
                            <FontAwesomeIcon icon={faBook} />
                        </PinnedProject>

                        <PinnedProject btnValue="example-company-website-2" styleColor="#4f5d95" 
                        description="PHP + Laravel + HTML + CSS + JS + SemanticUI + jQuery" projLang="PHP">
                            <FontAwesomeIcon icon={faBook} />
                        </PinnedProject>
                    </div>

                    157 contributions in the last year

                    <div className="contribution">
                        <ContributionGrid />
                    </div>
                </MainGridRight>
            </main>
        );
    }
}
