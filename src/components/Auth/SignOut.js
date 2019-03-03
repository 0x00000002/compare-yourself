import React from 'react'
import { UserContext } from './UserContext'

const SignOut = () => (
  <UserContext.Consumer>
    { dispatch => {
      return (
        <button onClick={event => dispatch({ type: 'signOut' })}>
          Sign out
        </button>
      )
    }}
  </UserContext.Consumer>
)

export default SignOut
