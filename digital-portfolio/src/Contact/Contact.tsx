import React, { useState } from 'react';
import "./Contact.css";
import daoLogo from "../DaoLogo.png";
import 'bootstrap/dist/css/bootstrap.css';

import linkedInLogo from "./LinkedInLogo.png";
import githubLogo from "./github-mark.svg";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


//Framework?

interface FormState {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {

    const [validated, setValidated] = useState(false);

    const [showSuccess, setShowSuccess] = React.useState(false);

    const handleSubmit = (event : any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            (document.getElementById("emailForm") as HTMLFormElement).reset();
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);}, 1000
            );
            console.log("Poggers!");
        }
        setValidated(true);
    };

    return (
        <div id={"mainFlexBody"}>
            <div id={"contentPage"}>
                <h1 className={"Header"}>
                    Looking to connect?
                </h1>
                {showSuccess ? <div className={"SuccessOverlay"} /> : null}
                <div id={"connections"} className={"connections"}>
                    <div id={"email"} className={"connectionsPane"}>

                        <h4>
                            Fill the form below and I'll get in touch with you through email!
                        </h4>

                        <Form id={"emailForm"} noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                    {/*<Form.Label>First Name</Form.Label>*/}
                                    <Form.Control
                                        required
                                        type={"text"}
                                        placeholder="First Name" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a first name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                    {/*<Form.Label>Last Name</Form.Label>*/}
                                    <Form.Control
                                        required
                                        type={"text"}
                                        placeholder="Last Name" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a last name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            {/*<Form.Group className="mb-3" controlId="formBasicEmail">*/}
                            {/*    /!*<Form.Label>Last Name</Form.Label>*!/*/}
                            {/*    <Form.Control placeholder="Last Name" />*/}
                            {/*</Form.Group>*/}

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/*<Form.Label>Email address</Form.Label>*/}
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Enter email" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/*<Form.Label>Message</Form.Label>*/}
                                <Form.Control
                                    required
                                    as="textarea"
                                    placeholder="Message" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a message.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>

                    <div id={"socialConnect"} className={"connectionsPane"}>
                        <h4>
                            Connect here through my socials!
                        </h4>
                        <div className={"socialEntryList"}>
                            <Link to={"https://www.linkedin.com/in/aqd453/"} target="_blank" rel="noopener noreferrer">
                                <div className={"socialEntry"}>
                                    <img className={"socialEntryImage"} src={linkedInLogo}  alt={"Linked In Logo"}/>
                                    <p className={"socialEntryTitle"}>LinkedIn</p>
                                </div>
                            </Link>
                            <Link to={"https://github.com/ViviVoid"} target="_blank" rel="noopener noreferrer">
                            <div className={"socialEntry"}>
                                <img className={"socialEntryImage"} src={githubLogo}  alt={"GitHub Logo"}/>
                                <p className={"socialEntryTitle"}>Github</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <App />
    );
}

export default Contact