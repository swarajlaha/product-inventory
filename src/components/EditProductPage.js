import React from 'react';
import Header from '../includes/header'
import Footer from '../includes/footer'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EditProductForm from '../includes/editProductForm'
import ProductActions from '../actions/ProductActions'
import { withRouter } from 'react-router-dom'
import ProductApi from '../data/ProductApi'

class EditProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.updateProduct = this.updateProduct.bind(this);
        this.state={
            product: undefined
        }
    }

    componentDidMount() {
        const productId = this.props.match.params.id
        ProductApi.getProductById(productId, (product)=>{
            this.setState({ product })
            console.log(product)
        })

    }
  
    updateProduct(product) {
          ProductActions.updateProductMethod(product);
          alert("Product Updated Successfully!")
          this.props.history.push('/viewProducts')
          window.location.reload()
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
                                  <Card.Title>Edit Product</Card.Title>
                                  <Card.Text>
                                        <EditProductForm onUpdate={this.updateProduct} product={this.state.product}/> 
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

export default withRouter(EditProductPage) 