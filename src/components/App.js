import React, { useReducer } from 'react'
import './App.css'
import Auth from './Auth/'
import Main from './Main'
import Header from './Header'
import { aws } from './../settings'
import Amplify from 'aws-amplify'
import { UserContext } from './Auth/UserContext'
import produce from 'immer'

Amplify.configure(aws)

const reducer = (state, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'signIn':
        return { user: authenticate() }

      case 'signOut':
      default:
        return { user: false }
    }
  })
}

const App = () => {
  const [auth, dispatch] = useReducer(reducer, { user: false })
  return (
    <UserContext.Provider value={dispatch}>
      <Auth user={auth.user}>
        <Header user={auth.user} />
        <Main user={auth.user} />
      </Auth>
    </UserContext.Provider>
  )
}

const authenticate = () => {
  const devMode = process.env.NODE_ENV === 'development'
  const devUser = devMode && 'User'
  return devUser || 'authUser'
}

export default App
