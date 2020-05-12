import React from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutPage from './components/AboutPage'
import SignInPage from './components/SignInPage'
import RegisterPage from './components/RegisterPage'
import ViewProductsPage from './components/ViewProductsPage'
import ProductsDetailsPage from './components/ProductsDetailsPage'
import AddNewProductPage from './components/AddNewProductPage'
import EditProductPage from './components/EditProductPage'
import UserDetailsPage from './components/UserDetailsPage'
import TopViewedProductsPage from './components/TopViewedProductsPage'

function App() {
  return (
    <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={AboutPage} />
              <Route exact path="/signIn" component={SignInPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/viewProducts" component={ViewProductsPage} />
              <Route path="/topViewedProducts" component={TopViewedProductsPage} />
              <Route path="/productDetails/:id" component={ProductsDetailsPage} />
              <Route path="/addNewProduct" component={AddNewProductPage} />
              <Route path="/editProduct/:id" component={EditProductPage} />
              <Route path="/userDetails/:id" component={UserDetailsPage} />
            </Switch>
          </div>
        </Router>
  );
}

export default App;
