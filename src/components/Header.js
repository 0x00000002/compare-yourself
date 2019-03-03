import React from 'react'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import SignOut from './Auth/SignOut'
import settings from '../settings'

const hasUser = (user) => (
  <div>
    <span className={'userName'}>{user}</span> <SignOut />
  </div>
)

const noUser = () => (
  <div>
    <SignUp /><SignIn />
  </div>
)

const Header = (props) => {
  return (
    <div>
      <header>
        <div>{settings.siteName}</div>
        {props.user ? hasUser(props.user) : noUser()}
      </header>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Header
