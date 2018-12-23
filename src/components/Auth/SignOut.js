import React from 'react'
import { UserContext } from './UserContext'

const SignOut = (props) => (
  <UserContext.Consumer>
    { auth => (
      <button onClick={event => auth.signout()}>
        Sign out
      </button>
    )}
  </UserContext.Consumer>
)

export default SignOut
