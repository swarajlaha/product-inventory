import React from 'react';
import { shallow } from 'enzyme';
import Products from '../components/Products';

describe('When valid products array props passed to Cards View component', () => {

    let wrapper
    let props
    beforeEach(() => {
        props = {
            "products": [
                {
                  "productName": "Product-1",
                  "productDescription": "This is Product number one.",
                  "manufacturer": "ProdWip",
                  "price": "2500",
                  "quantity": 2,
                  "id": 1589082223037
                },
                {
                  "productName": "Product-2",
                  "productDescription": "This is product number two.",
                  "manufacturer": "ProdWip",
                  "price": "1500",
                  "quantity": 5,
                  "id": 1589082299949
                },
                {
                  "productName": "Product-3",
                  "productDescription": "This is product number three.",
                  "manufacturer": "WipProd",
                  "price": "2000",
                  "quantity": 2,
                  "id": 1589082401749
                }
            ]
        }
        wrapper = shallow(<Products products={props.products}/>)
    });

    it('renders "Product Name" as heading in first column', () => {
        expect(wrapper.find("th").at(1).render().text()).toEqual("Product Name")
    })

    it('renders "Price" as heading in third column', () => {
        expect(wrapper.find("th").at(3).render().text()).toEqual("Price")
    })

    it('passes the second Product\'s name as props to second Products Component', () => {
        let secondProduct = wrapper.find('Product').at(1).shallow().find('td').at(1).render()
        expect(secondProduct.text()).toEqual('Racold Geyser')
    })

    it('passes the second Product\'s price as props to second Products Component', () => {
        let secondProduct = wrapper.find('Product').at(1).shallow().find('td').at(3).render()
        expect(secondProduct.text()).toEqual('6000')
    })

})

describe('When products array props passed to Cards View component is null', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            products: null
        }
        wrapper = shallow(<Products {...props}/>)});

    it('should not crash', () => {
        let th = wrapper.find('th');
        expect(th.length).toEqual(4);
    })
})