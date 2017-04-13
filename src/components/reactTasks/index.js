import React from 'react'
import Hello from './hello'
import Kitty from './kitty'
import { HelloKitty } from './helloKitty'
import { Person } from './person'
import { PersonWithProps } from './personWithProps'
import { Adder } from './adder'
import { Numbers } from './numberList'
import { EvenNumbers } from './evenNumbers'
import { BoldEvenNumbers } from './boldEvenNumbers'
import { Company } from './company'
import { Text } from './text'
import { HelloButton } from './helloButton'
import { BigButton } from './bigButton'
import { RandomNumberGenerator } from './randomNumber'
import { NextName } from './nextName'
import { BoxGrower } from './boxGrower'

export default () => {
  return (
    <div>
      <p>Question 15 Answer</p>
      <RandomNumberGenerator />
      <p>Question 16 Answer</p>
      <NextName names={["Richard", "John"]}/>
      <p>Question 17 Answer</p>
      <BoxGrower />

    </div>
  )
}
