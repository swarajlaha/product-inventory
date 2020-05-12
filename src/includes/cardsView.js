import React from 'react'
import Products from '../components/Products'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ProductApi from '../data/ProductApi'
import UserStore from '../stores/UserStore'
import Accordion from 'react-bootstrap/Accordion'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

export default class CardsView extends React.Component {

  state = {
    query: '',
    checkedProducts: {},
    columns: {
      productName: true,
      manufacturer: true,
      price: true,
      quantity: true,
      checkToSelect: true
    }
  }

  onChangeHandler = e => {
    const query = e.target.value
        this.setState({query})
  }

  handleCheck = (productId, checked) => {
    this.setState(
      prevState => {
        const checkedProducts = prevState.checkedProducts
        checkedProducts[productId] = checked
        return {checkedProducts}
      }
    )
  }

  onDelete = () => {
    console.log(this.state.checkedProducts)
    const checkedArray = Object.keys(this.state.checkedProducts).filter(id => this.state.checkedProducts[id] === true)
    console.log(checkedArray)
    ProductApi.deleteProducts(checkedArray)
    window.location.reload()
  }
  
  render() {
    const currentUser = UserStore.getCurrentUser()
    const products = this.props.products
    const query = this.state.query
    const filteredProducts = products.filter(product => {
      return product.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
    return (
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Card>
            <Card.Body>
              <Col>
                <Table>
                  <thead>
                      <tr>
                      <th></th>
                      <th></th>
                        <th>
                          <Form>
                            <Form.Row>
                              <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="text" placeholder="Search Product" onChange={this.onChangeHandler} />
                              </Form.Group>
                            </Form.Row>
                          </Form>
                        </th>
                        <th></th>
                      </tr>
                      <tr>
                        {this.state.columns.productName ? <th>Product Name</th> : null}
                        {this.state.columns.manufacturer ? <th>Manufacturer</th> : null}
                        {this.state.columns.price ? <th>Price</th> : null}
                        {this.state.columns.quantity ? <th>Quantity</th> : null}
                        {this.state.columns.checkToSelect ? <th>Check to Select</th> : null}
                      </tr>
                    </thead>
                    {filteredProducts.map(product =>
                      <Products
                      productId={product.id}
                      productName={product.productName}
                      productDescription={product.productDescription}
                      manufacturer={product.manufacturer}
                      price={product.price} 
                      quantity={product.quantity} 
                      onCheck={this.handleCheck}
                      columns={this.state.columns}/>
                    )}
                </Table>
              </Col>
              <Container>
                <Row>
                  <Col></Col>
                  <Col xs={6}>
                  {
                    currentUser ? 
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Delete Product</Tooltip>}>
                      <span className="d-inline-block">
                        <Button variant="outline-danger" onClick={this.onDelete}>
                          Delete
                        </Button>
                      </span>
                    </OverlayTrigger> : 
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Sign In to perform this action!</Tooltip>}>
                      <span className="d-inline-block">
                        <Button variant="outline-danger"disabled style={{ pointerEvents: 'none' }}>
                          Delete
                        </Button>
                      </span>
                    </OverlayTrigger>
                  }
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
          <Col>
          <Accordion>
  <Card>
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Click to Customise Product Fields</Tooltip>}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="info" eventKey="0">
        Customise Fields
      </Accordion.Toggle>
    </Card.Header>
    </OverlayTrigger>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        Product Name: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            this.setState(
              prevState => {
                console.log(prevState)
                return {columns: {...prevState.columns, productName: checked}}
              }
            )
          }} />
        Manufacturer: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            this.setState(
              prevState => {
                console.log(prevState)
                return {columns: {...prevState.columns, manufacturer: checked}}
              }
            )
          }} />
        Price: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            this.setState(
              prevState => {
                console.log(prevState)
                return {columns: {...prevState.columns, price: checked}}
              }
            )
          }} />
        Quantity: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            this.setState(
              prevState => {
                console.log(prevState)
                return {columns: {...prevState.columns, quantity: checked}}
              }
            )
          }} />
        Check To Select: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            this.setState(
              prevState => {
                console.log(prevState)
                return {columns: {...prevState.columns, checkToSelect: checked}}
              }
            )
          }} />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
          </Col>
        </Row>
      </Container>
    )
  }
}