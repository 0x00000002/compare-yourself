import React from 'react'
import settings from '../settings'

const text = 'Nice page for logged users'

const Main = () => {
  return (
    <main>
      <h1>{settings.siteName}</h1>
      {text}
    </main>
  )
}

export default Main
