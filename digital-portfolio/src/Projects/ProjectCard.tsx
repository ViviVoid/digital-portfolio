import React from 'react';
import "../styles/browser.css"
import {Container, ImageProps, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Props {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
    projectImageAlt: string;
    projectLink: string;
}

const ProjectsCard:React.FC<Props> = (props: Props) => (
        <div className={"projectCard"}>
            <Container>
                <Row>
                    <Link to={props.projectLink}>
                        <img className={"projectCardImage"} src={props.projectImage} alt={props.projectImageAlt}/>
                    </Link>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Link to={props.projectLink}>
                        <h1>{props.projectTitle}</h1>
                    </Link>
                </Row>
                <Row>
                    <p>{props.projectDescription}</p>
                </Row>
            </Container>
        </div>
    // <App />
);

export default ProjectsCard