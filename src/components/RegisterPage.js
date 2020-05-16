import React from 'react';
import Header from '../includes/header'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RegistrationForm from '../includes/registrationForm'
import UserActions from '../actions/UserActions'
import Navbar from 'react-bootstrap/Navbar'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.saveUser = this.saveUser.bind(this);
      }
  
      saveUser(user) {
          UserActions.addUser(user);
          this.props.history.push('/');
          alert("Registered Successfully! Please Sign in to continue.")
      }
    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={5}>
                            <Card className="text-center mt-5">
                                <Card.Body>
                                  <Card.Title>Register</Card.Title>
                                  <Card.Text>
                                        <RegistrationForm onSave={this.saveUser} /> 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
                <footer>
                    <Navbar expand="lg" variant="dark" bg="dark" className="mt-5 mb-0">
                        <Container>
                            <Navbar.Brand href="#">A Project made using React JS by <a href="https://www.linkedin.com/in/swarajlaha/">Swaraj Laha</a></Navbar.Brand>
                        </Container>
                    </Navbar>
                </footer>
            </div>
        )
    }
}

export default RegisterPage