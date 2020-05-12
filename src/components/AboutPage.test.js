import React from 'react';
import { mount,shallow} from 'enzyme';
import AboutPage from './AboutPage'
import Header from '../includes/header'

describe('About Page Snapshot', () => {
    let mountWrapper;
    beforeEach(() => {
        mountWrapper = mount(<AboutPage />);
    });

    test('renders correctly', () => {
        expect(mountWrapper).toMatchSnapshot()
    })  
});

describe('About Page rendering of elements', () => {

    let shallowWrapper

    beforeEach(() => {
        shallowWrapper = shallow(<AboutPage/>);
    });

    it('renders correct heading for About', () => {
        expect(shallowWrapper.find("h1").render().text()).toEqual("About")
    })

    it('renders one Header React component', () => {
        expect(shallowWrapper.find(Header).length).toEqual(1);
    })
})
