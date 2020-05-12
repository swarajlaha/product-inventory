import React from 'react'
import { shallow } from 'enzyme'
import EditProductsPage from './EditProductsPage'
import EditProductForm from '../includes/editProductForm'

describe('Edit Product Product Page rendering of elements', () => {

    let shallowWrapper

    beforeEach(() => {
        shallowWrapper = shallow(<EditProductsPage/>);
    });

    it('renders correct heading for Edit Product Page', () => {
        expect(shallowWrapper.find("h1").render().text()).toEqual("Products List")
    })

    it('renders one EditProductForm React component', () => {
        expect(shallowWrapper.find(EditProductForm).length).toEqual(1);
    })
})
