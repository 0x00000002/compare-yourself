import React from 'react'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import SignOut from './Auth/SignOut'
import { UserContext } from './Auth/UserContext'

const hasUser = () => <div className={'signout'}><SignOut /></div>
const noUser = () => (
  <div>
    <SignUp />
    <SignIn />
  </div>
)

const Header = (props) => (
  <UserContext.Consumer>
    { auth => (
      <div>
        <header>
          {auth.user ? hasUser() : noUser()}
        </header>
        <main>
          {props.children}
        </main>
      </div>
    )}
  </UserContext.Consumer>
)

export default Header
