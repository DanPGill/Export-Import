import React from 'react'
export const Numbers = (props) => <ul> {_.map(props.numbers,
  (number) => <li>{number}</li>)} </ul>
