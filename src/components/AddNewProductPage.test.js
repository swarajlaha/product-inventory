import React from 'react'
import { mount, shallow } from 'enzyme'
import AddNewProduct from './AddNewProductPage'
import AddProductForm from '../includes/productForm'

describe('Add New Product Page Snapshot', () => {

    let mountWrapper
    beforeEach(() => {
        mountWrapper = mount(<AddNewProduct/>);
    });

    test('renders correctly', () => {
        expect(mountWrapper).toMatchSnapshot();
    });
})

describe('Add New Product Page rendering of elements', () => {

    let shallowWrapper

    beforeEach(() => {
        shallowWrapper = shallow(<AddProductForm/>);
    });

    it('renders correct heading for About', () => {
        expect(shallowWrapper.find("h1").render().text()).toEqual("Add New Product")
    })

    it('renders one AddProductForm React component', () => {
        expect(shallowWrapper.find(AddProductForm).length).toEqual(1);
    })
})
