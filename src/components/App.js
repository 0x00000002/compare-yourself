import React, { Component } from 'react'
import './App.css'
import Auth from './Auth/'
import Main from './Main'
import Header from './Header'
import { aws } from './../settings'
import Amplify from 'aws-amplify'
import { UserContext } from './Auth/UserContext'

Amplify.configure(aws)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      auth: {
        user: null,
        signin: null,
        signout: null
      }
    }
  }

  componentDidMount () {
    this.setState({
      auth: {
        user: 'fakeUser',
        signout: () => this.setState({
          auth: {
            user: null,
            signin: this.state.auth.signin,
            signout: this.state.auth.signout
          }
        }),
        signin: () => this.setState({
          auth: {
            user: 'fakeUser',
            signin: this.state.auth.signin,
            signout: this.state.auth.signout
          }
        })

      }
    })
  }

  render () {
    return (
      <UserContext.Provider value={this.state.auth}>
        <Auth>
          <Header />
          <Main />
        </Auth>
      </UserContext.Provider>
    )
  }
}

export default App
