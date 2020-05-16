import React from 'react';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import UserStore from '../stores/UserStore'
import Button from 'react-bootstrap/Button'

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  clickHandler = () => {
    alert(`Are you sure you want to view ${this.props.productName} ?`);
  }
  handleChange(evt) {
    this.props.onCheck(this.props.productId, evt.target.checked)
  }
  render() {
    const currentUser = UserStore.getCurrentUser()
    return (
            <tr>
                {this.props.columns.productName ? <td>  
                  <Link to={`/productDetails/${this.props.productId}`} onClick={this.clickHandler}>{this.props.productName}</Link>
                </td> : null}
                {this.props.columns.manufacturer ?<td>{this.props.manufacturer}</td> : null}
                {this.props.columns.price ?<td>{this.props.price}</td> : null} 
                {this.props.columns.quantity ?<td>{this.props.quantity}</td> : null}
                {this.props.columns.checkToSelect ?<td><Form.Check 
                    aria-label="option 1" 
                    onChange={this.handleChange} />
                  </td> : null}
                {currentUser ?
                (this.props.columns.edit ? <td>
                  <Button variant="outline-success" size="sm" href={`/editProduct/${this.props.productId}`}>
                  Edit
                    </Button>
                  </td> : null) :
                  (this.props.columns.edit ? <td>
                    <Button variant="outline-success" size="sm" disabled>
                      Edit
                    </Button>
                    </td> : null)
                  }
            </tr>
    )
  }
}
