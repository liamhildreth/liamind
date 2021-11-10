import React, { Component } from "react";
import {
  Image,
  Form,
  Button,
  Modal,
  FloatingLabel,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import capella from "../../capella.png";
import tbird from "../../tbird.png";
import logo from "../../lh.png";
import ibr from "../../ibr.png";

import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false,
      fname: "",
      femail: "",
      feedback: "",
      title: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.setShow = this.setShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetstate = this.resetstate.bind(this);
  }

  setShow() {
    this.setState({
      show: false,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log("start");
    const { fname, femail, feedback, title } = this.state;
    const feedback_id = uuidv4();
    await axios.post(
      "https://ieqveaxavd.execute-api.us-east-2.amazonaws.com/default/feedbackpersonalwebsite",
      {
        id: `${feedback_id}`,
        name: `${fname}`,
        email: `${femail}`,
        feedback: `${feedback}`,
        project: `${title}`,
      }
    );

    this.setShow();
    this.resetstate();
  }

  resetstate() {
    this.setState({
      fname: "",
      femail: "",
      feedback: "",
    });
  }

  handleShow(Title) {
    return () => {
      this.setState({
        fullscreen: "md-down",
        show: true,
        title: Title,
      });
    };
  }
  handleChange(event) {
    const inputValue = event.target.value;
    const inputField = event.target.name;
    this.setState({
      [inputField]: inputValue,
    });
    console.log(event.target.name, event.target.value);
  }
  render() {
    const { show, fullscreen, title } = this.state;
    return (
      <Container className="pt-5 ">
        <br />
        <br />
        <Row className="pt-5">
          <Col xs={12} md={3} className="my-auto">
            <a href="https://www.feedbackmarket.ca" target="_blank">
              <Image
                src={capella}
                data-tip
                data-for="capella"
                width="60px"
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} className="py-4 py-md-0 my-auto">
            <a href="https://www.alexjnelson.ca" rel="noreferrer">
              Alex Nelson
            </a>
            &nbsp; and I are on a mission to return value to the people that
            create it. Capella is a feedback market where consumers barter their
            time, opinions, and data in exchange for Vox that can be spent on
            product/service discounts from the brands in our network.
          </Col>
          <Col xs={12} md={3} className="my-auto">
            <Button
              data-element="one"
              className="me-2"
              onClick={this.handleShow("Capella")}
            >
              Feedback
            </Button>
            <Modal show={show} fullscreen={fullscreen} onHide={this.setShow}>
              <Modal.Header closeButton>
                <Modal.Title>{this.state.title} Feedback</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                If you have any comments, questions, or general feedback for
                this project let me know in the box below!
                <br />
                <br />
                <>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label="Name (Optional)"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      name="fname"
                      value={this.state.fname}
                      onChange={this.handleChange}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label="Email (Optional)"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      name="femail"
                      value={this.state.femail}
                      onChange={this.handleChange}
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingTextarea2" label="Feedback">
                    <Form.Control
                      as="textarea"
                      style={{ height: "100px" }}
                      name="feedback"
                      value={this.state.feedback}
                      onChange={this.handleChange}
                    />
                  </FloatingLabel>
                  <br />
                  <Button onClick={this.handleSubmit} variant="outline-primary">
                    Send
                  </Button>
                </>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12} md={3} className="my-auto">
            <a href="https://tbird.cloud" target="_blank">
              <Image src={tbird} data-tip data-for="tbird" width="85px" fluid />
            </a>
          </Col>
          <Col xs={12} md={6} className="py-4 py-md-0 my-auto">
            Tbird is a tool that allows food manufacturers to digitally input
            and store data required by the CFIA. It also helps with keeping
            track of inventory and raw material levels.
          </Col>
          <Col xs={12} md={3} className="tbird my-auto">
            <Button className="me-2" onClick={this.handleShow("Tbird")}>
              Feedback
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12} md={3} className="my-auto">
            <a href="https://liamind.com" target="_blank">
              <Image src={logo} width="85px" data-tip data-for="lh" fluid />
            </a>
          </Col>
          <Col xs={12} md={6} className="py-4 py-md-0 my-auto">
            The purpose of this website is to increase my technical literacy and
            highlight some of the things I'm working on. I built it using
            javascript, css, React, Bootstrap, AWS Lambda & DynamoDB.
          </Col>
          <Col xs={12} md={3} className="my-auto">
            <Button
              className="me-2"
              onClick={this.handleShow("Personal Website")}
            >
              Feedback
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12} md={3} className="my-auto">
            <a
              href="https://github.com/liamhildreth/ibrautomation"
              target="_blank"
            >
              <Image src={ibr} width="85px" data-tip data-for="lh" fluid />
            </a>
          </Col>
          <Col xs={12} md={6} className="py-4 py-md-0 my-auto">
            I built this tool while on the research team for the Ivey Business
            Review to automate some of the laborious tasks of a researcher. I
            used Textblob to extract facts from articles for each first draft,
            and Levenshtein to detect unchanged facts when
            working with subsequent drafts.
          </Col>
          <Col xs={12} md={3} className="my-auto">
            <Button
              className="me-2"
              onClick={this.handleShow("IBR")}
            >
              Feedback
            </Button>
          </Col>
        </Row>
        <br />
      </Container>
    );
  }
}

export default projects;
