import React from 'react'
import Hello from './hello'
import Kitty from './kitty'
import { HelloKitty } from './helloKitty'


export default () => {
  return (
    <div>
      <p>Question 1 Answer</p>
      <Hello />

      <p>Question 2 Answer</p>
      <Kitty />

      <p>Question 3 Answer</p>
      <HelloKitty />
    </div>
  )
}
