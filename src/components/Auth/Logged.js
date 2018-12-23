import React from 'react'

const Logged = (props) => {
  return (
    <main>
      <h1>Logged in!</h1>
      Welcome back, {props.user}!
    </main>
  )
}

export default Logged
