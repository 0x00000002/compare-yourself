import React from 'react'
import App from './App'
import { shallow, mount } from 'enzyme'

const mock = {
  props: {
    path: {
      pathname: '/test-path'
    },
    func: jest.fn(() => 'proper behaviour mock implementation')
  },
  wrongProps: {
    path: {
      pathname: '/wrong-test-path'
    },
    func: jest.fn(() => 'wrong behaviour mock implementation')
  }
}

let wrapper

describe('components/App', function () {
  afterEach(() => {
    wrapper.unmount()
  })

  it('should display welcome', async function () {
    wrapper = mount(<App {...mock.wrongProps} />)
    expect(wrapper.contains(<h1>Compare yourself</h1>)).toBe(true)
  })

  beforeEach(() => {
    wrapper = shallow(<App {...mock.props} />)
  })

  it('should be called', async function () {
    // expect(mock.props.func).toBeCalled()
  })

  it('handleChange should set state', async function () {
    // wrapper.instance().handleChange('fake-code')
    // expect(wrapper.state().code).toEqual('fake-code')
  })
})
