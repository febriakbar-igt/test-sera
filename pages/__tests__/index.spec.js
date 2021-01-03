import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import IndexPage from '../index';

describe('Index Page', () => {
  let wrapper = '';
  // 1. Input Check
  it('Input In Form', async () => {
    const wrapper = mount(<IndexPage />)
    const input = wrapper.find('.input');
    expect(input.length).toBe(1);
  });
  // 2. Check Input Type Email
  it('Check Input Type Email', async () => {
    wrapper = shallow(<IndexPage />);
    const emailLogin = wrapper.find('#emailLogin');
    const type = 'email';
    expect(emailLogin.prop('type')).toEqual(type);
  });
  // 3. Check Input Type Password
  it('Check Input Type Password', () => {
    wrapper = shallow(<IndexPage />);
    const passwordLogin = wrapper.find('#passwordLogin');
    const type = 'password';
    expect(passwordLogin.prop('type')).toEqual(type);
  });
  // 4. Check Button Submit Forgot Password
  it('Check Button Submit Forgot Password', () => {
    wrapper = shallow(<IndexPage />);
    const button = wrapper.find('#buttonLogin');
    expect(button.length).toBe(1);
  });
  // 5. Snapshots
  it('renders correctly snapshot test', () => {
    const tree = renderer.create(<IndexPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
