import React from 'react'
import Hello from './hello'
import Kitty from './kitty'
import { HelloKitty } from './helloKitty'
import Person from './person'
import { PersonWithProps } from './personWithProps'
import { Adder } from './adder'
import { Numbers } from './numberList'

export default () => {
  return (
    <div>
      <p>Question 1 Answer</p>
      <Hello />

      <p>Question 2 Answer</p>
      <Kitty />

      <p>Question 3 Answer</p>
      <HelloKitty />

      <p>Question 4 Answer</p>
      <Person />

      <p>Question 5 Answer</p>
      <PersonWithProps name={"John"} age={20}/>
      <PersonWithProps name={"Richard"} age={27}/>

      <p>Question 6 Answer</p>
      <Adder number1={1} number2={2}/>

      <p>Question 7 Answer</p>
      <Numbers numbers={[1,2,3,4,5]}/>
    </div>
  )
}
