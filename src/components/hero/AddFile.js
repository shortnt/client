import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

export class AddEmpModal extends Component {
    constructor(props) {
        super(props);
        this.state = { deps: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileSelected = this.handleFileSelected.bind(this);
    }

    audiofilename = "D:/projects/shortnt-main/shortnt-main/src/components/hero/Welcome.aac";
    audiosrc = process.env.REACT_APP_PHOTOPATH + this.audiofilename;

    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'quicksummary/')
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'quicksummary/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                AudioFileName: this.audiofilename

            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                })
    }


    handleFileSelected(event) {
        event.preventDefault();
        this.audiofilename=event.target.files[0].name;

        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API + 'quicksummary/SaveFile', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((result) => {
                this.audiosrc = process.env.REACT_APP_PHOTOPATH + result;
            },
                (error) => {
                    alert('Failed');
                })

    }


    render() {
        return (
            <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Employee
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                          
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Employee
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>

                      
                            <Col sm={6}>
                                <label >Select Audio</label>
                                <br/>
                                <input onChange={this.handleFileSelected} type="File" />
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}