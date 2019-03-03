import React from 'react'
import GuestPage from './../GuestPage'
import { UserContext } from './UserContext'

const Auth = (props) => (
  <UserContext.Consumer>
    {() => props.user ? props.children : GuestPage()}
  </UserContext.Consumer>
)

export default Auth
