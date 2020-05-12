import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import UserActions from '../actions/UserActions'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import UserStore from '../stores/UserStore'
import UserApi from '../data/UserApi'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ""
    }
  }

  componentDidMount() {
    //const currentUser = UserStore.getCurrentUser()
    const userId = UserStore.getCurrentUser()
    UserApi.getUserById(userId, (user)=>{
            this.setState({ user })
    })
  }

  render() {
    const currentUser = UserStore.getCurrentUser()
    return(
      <div>
          <Navbar bg="primary" expand="lg" variant="dark">
              <Navbar.Brand href="/">Products Inventory</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">About</Nav.Link>
                  <NavDropdown title="Products" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/viewProducts">View Products</NavDropdown.Item>
                    <NavDropdown.Item href="/topViewedProducts">Top Viewed Products</NavDropdown.Item>
                      {currentUser ? <NavDropdown.Item href="/addNewProduct">Add New Products</NavDropdown.Item> : null}
                  </NavDropdown>
                </Nav>
                {currentUser ? <Navbar.Text><i>Hello,</i>&nbsp; 
                  <a href={`/userDetails/${this.state.user.id}`}>{this.state.user.firstName}&nbsp;</a></Navbar.Text> : null}
              </Navbar.Collapse>
              {currentUser ? <Button onClick={()=>{
                UserActions.signoutUser()
                this.props.history.push('/')
                }}>Sign Out
              </Button> : null}
              {!currentUser ? <Button onClick={()=>{
                //UserActions.signoutUser()
                this.props.history.push('/signIn')
                }}>Sign In
              </Button> : null}
          </Navbar>
      </div>
  )
  }
}

export default withRouter(Header)