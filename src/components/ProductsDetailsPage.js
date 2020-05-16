import React from 'react'
import Header from '../includes/header'
import CardsDetails from '../includes/cardsDetails'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import UserStore from '../stores/UserStore'
import { withRouter } from 'react-router-dom'
import ProductApi from '../data/ProductApi'
import Navbar from 'react-bootstrap/Navbar'

class ProductsDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            product: ""
        }
        if(UserStore.getCurrentUser() == undefined) {
            alert("You're not signed in! Sign in?")
            props.history.push('/signIn')
        }
    }

    componentDidMount() {
        const productId = this.props.match.params.id
        ProductApi.getProductById(productId, (product)=>{
            this.setState({ product })
            console.log(product)
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Container className="mt-5">
                    <Row>
                      <Col></Col>
                      <Col>
                            <div className="mb-2">
                                <Button variant="success" size="lg" href="/addNewProduct">
                                  Add New Product
                                </Button>
                            </div>
                      </Col>
                      <Col></Col>
                    </Row>
                </Container>
                <CardsDetails product={this.state.product}/>
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

export default withRouter(ProductsDetailsPage) 