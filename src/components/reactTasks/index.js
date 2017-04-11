import React from 'react'
import Hello from './hello'
import Kitty from './kitty'
import { HelloKitty } from './helloKitty'
import Person from './person'
import { PersonWithProps } from './personWithProps'
import { Adder } from './adder'
import { Numbers } from './numberList'
import { EvenNumbers } from './evenNumbers'
import { BoldEvenNumbers } from './boldEvenNumbers'

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


      <p>Question 5 Answer</p>
      <PersonWithProps name={"John"} age={20}/>
      <PersonWithProps name={"Richard"} age={27}/>

      <p>Question 6 Answer</p>
      <Adder number1={1} number2={2}/>
      <Adder number1={7} number2={3}/>

      <p>Question 7 Answer</p>
      <Numbers numbers={[1,2,3,4,5]}/>
      <Numbers numbers={[1,2,3,4,5,6,7]}/>

      <p>Question 8 Answer</p>
      <EvenNumbers numbers={[1,2,3,4,5]}/>

      <p>Question 9 Answer</p>
      <BoldEvenNumbers numbers={[1,2,3,4,5]}/>

      <p>Question 10 Answer</p>
      <Person person={{name: "John", age: 20}}/>


    </div>
  )
}
