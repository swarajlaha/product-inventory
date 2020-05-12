import React from 'react';
import Header from '../includes/header'
import Footer from '../includes/footer'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AddProductForm from '../includes/productForm'
import ProductActions from '../actions/ProductActions'

class AddNewProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.saveProduct = this.saveProduct.bind(this);
    }
  
    saveProduct(product) {
          ProductActions.addProduct(product);
          this.props.history.push('/viewProducts');
          alert("Product Added Successfully!")
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
                                  <Card.Title>Add New Product</Card.Title>
                                  <Card.Text>
                                        <AddProductForm onSave={this.saveProduct} /> 
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
}

export default AddNewProductPage