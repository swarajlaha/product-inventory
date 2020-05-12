import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Header from '../includes/header'
import Footer from '../includes/footer'
import SignInForm from '../includes/signInForm'

const SignInPage = () => {
    return(
        <div>
            <Header />
            <Container className="mt-5 bt-5">
                <Row>
                  <Col></Col>
                  <Col xs={5}>
                      <Card className="text-center mt-5">
                          <Card.Body>
                            <Card.Title>Sign In</Card.Title>
                            <Card.Text>
                                  <SignInForm /> 
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col></Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default SignInPage