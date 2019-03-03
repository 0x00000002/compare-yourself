import React from 'react'

const text = 'Nice page for logged users'

const Main = ({ user }) => {
  return (
    <main>
      <h1>Welcome back, {user}</h1>
      {text}
    </main>
  )
}

export default Main
