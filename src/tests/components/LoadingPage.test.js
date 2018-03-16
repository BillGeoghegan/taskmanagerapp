import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

test('should render LoadingPage correctly', () => {
    const wrapper = shallow(<LoadingPage startLogout={() => { }}/>);
    expect(wrapper).toMatchSnapshot();
});