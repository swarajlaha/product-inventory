import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { withRouter } from 'react-router-dom'
import ProductApi from '../data/ProductApi'

class CardsDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.product.productName != undefined) {
      ProductApi.addProductView(this.props.product.productName)
    }
    return (
      <div>
            <Container className="mt-5"> 
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={`https://picsum.photos/seed/${this.props.match.params.id}/478/185`} />
                            <Card.Body>
                              <Card.Title><u>{this.props.product.productName}</u></Card.Title>
                              <Card.Text>
                              <b>Know More About this Product:</b> <br />
                              {this.props.product.productDescription}
                              </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                              <ListGroupItem><b>Manufacturer: </b>{this.props.product.manufacturer}</ListGroupItem>
                              <ListGroupItem><b>Price: </b>{this.props.product.price} INR</ListGroupItem>
                              <ListGroupItem><b>Quantity: </b>{this.props.product.quantity}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                              <Card.Link href={`/editProduct/${this.props.match.params.id}`}>Edit</Card.Link>
                              <Card.Link 
                                href="#" 
                                onClick={()=>{
                                  alert("Are you sure to delete?")
                                  ProductApi.deleteProduct(this.props.match.params.id, ()=>{
                                    this.props.history.push('/viewProducts')
                                  })
                                }}>Delete</Card.Link>
                            </Card.Body>
                            </Card>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}

export default withRouter(CardsDetails)