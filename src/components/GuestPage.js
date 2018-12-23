import React from 'react'
import settings from '../settings'
import Header from './Header'

const text = 'Lorem ipsum dolor sit amet, ' +
  'consectetur adipisicing elit. Consequatur cumque cupiditate dolorum ' +
  'eum natus optio sequi, soluta. Dolorum ex incidunt neque, nihil ' +
  'officiis reprehenderit rerum vero. Asperiores consequuntur eum perferendis ' +
  'reiciendis repellat soluta, ullam unde? Asperiores atque consectetur fugit ' +
  'illum, magnam nostrum perferendis quo tempore voluptate. A error totam vitae.'

const GuestPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>{settings.siteName}</h1>
        {text}
      </main>
    </div>
  )
}

export default GuestPage
