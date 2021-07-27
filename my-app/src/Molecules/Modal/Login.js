import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { Form, Row, Col } from 'react-bootstrap';
export default function Login(props) {
    if(!props.show){
        return null;
    }
    return (
        <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="username">
                <Form.Label column sm={2}>Username</Form.Label>
                <Col sm={10}>
                    <Form.Control name="username" type="email" placeholder="Input Your Username" onChange={props.handleChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label column sm={2}>Password</Form.Label>
                <Col sm={10}>
                    <Form.Control name="password" type="password" placeholder="Input Your Password" onChange={props.handleChange} />
                </Col>
            </Form.Group>
        </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={props.handleModal}>Close</Button>
            <Button variant="primary" onClick={props.handleLogin}>Login</Button>
        </Modal.Footer>
        </Modal.Dialog>
    )
}