import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { Navbar } from './Navbar';
import configureStore from 'redux-mock-store';
import { NavLink } from 'react-router-dom';
// Testing libraries
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
// Test set-up
chai.use(sinonChai);
configure({ adapter: new Adapter() });
sinon.assert.expose(chai.assert, { prefix: '' });

describe('/Navbar', () => {
  const inititalState = {};
  const mockStore = configureStore();
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore(inititalState);
    wrapper = shallow(<Navbar store={store} />);
  });

  it('renders Navbar correctly', () => {
    expect(
      wrapper.contains(
        <NavLink className="navbar-item" to={'/login'}>
          <h2>Login</h2>
        </NavLink>
      )
    ).to.equal(true);
    expect(
      wrapper.contains(
        <NavLink className="navbar-item" to={'/signup'}>
          <h2>SignUp</h2>
        </NavLink>
      )
    ).to.equal(true);
  });
});

describe('Signout', () => {
  // const inititalState = {
  //   currentUser: 'lasdkfj90usdflkj',
  // };
  // const mockStore = configureStore();
  // let wrapper;
  // let store;

  // beforeEach(() => {
  //   store = mockStore(inititalState);
  // wrapper = shallow(<Navbar store={store} />);
  // });

  it('users can logout from the Navbar', () => {
    const currentUser = 'lasdkfj90usdflkj';
    const wrapper = shallow(<Navbar currentUser={currentUser} />);
    // const navbarComponent = shallow(<Navbar />);
    console.log(wrapper.find('h2').get(2));
    const instance = wrapper.instance();
    console.log('THIS IS THE INSTANCE', instance);
    const handleSignOutSpy = sinon.spy(instance, 'handleSignOut');
    instance.forceUpdate();
    wrapper.find('h2').simulate('click');
    sinon.assert.calledOnce(handleSignOutSpy);
  });
});
