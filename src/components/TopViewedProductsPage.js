import React from 'react';
import {Bar} from 'react-chartjs-2';
import Header from '../includes/header'
import Footer from '../includes/footer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ProductApi from '../data/ProductApi';
import _ from 'lodash'

export default class TopViewedProductsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        ProductApi.getProductViews(productViews => {
            const grouped = _(productViews).groupBy('productName').value()
            let labelArray = Object.keys(grouped)
            const data = {
                labels : labelArray,
                datasets: [
                  {
                    label: 'Product Views',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: Object.keys(grouped).map(key => grouped[key].length)
                  }
                ]
            }
            this.setState({data})
        })
    }
    
    render() {
        return (
            <div>
                <Container className="mt-5">
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Card body>
                                <Bar
                                    data={this.state.data}
                                    options={{
                                      title:{
                                        display:true,
                                        text:'Top Viewed Products',
                                        fontSize:20
                                      },
                                      legend:{
                                        display:true,
                                        position:'right'
                                      }
                                    }}
                                />
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}