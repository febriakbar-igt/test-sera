import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import RegisterPage from '../register';

describe('Index Page', () => {
  let wrapper = '';
  // 1. Input Check
  it('Input In Form', async () => {
    const wrapper = mount(<RegisterPage />)
    const input = wrapper.find('.input');
    expect(input.length).toBe(1);
  });
  // 2. Check Input Type Email
  it('Check Input Type Email', async () => {
    wrapper = shallow(<RegisterPage />);
    const emailRegister = wrapper.find('#emailRegister');
    const type = 'email';
    expect(emailRegister.prop('type')).toEqual(type);
  });
  // 3. Check Input Type Password
  it('Check Input Type Password', () => {
    wrapper = shallow(<RegisterPage />);
    const passwordRegister = wrapper.find('#passwordRegister');
    const type = 'password';
    expect(passwordRegister.prop('type')).toEqual(type);
  });
  // 4. Check Button Submit Forgot Password
  it('Check Button Submit Forgot Password', () => {
    wrapper = shallow(<RegisterPage />);
    const button = wrapper.find('#buttonRegister');
    expect(button.length).toBe(1);
  });
  // 5. Snapshots
  it('renders correctly snapshot test', () => {
    const tree = renderer.create(<RegisterPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
