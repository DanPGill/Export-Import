import React from 'react'
export const EvenNumbers = (props) => <ul>
{_.map(props.numbers, (number) => {
  if(number%2 ==0){
    return <li>{number}</li>
  }
}
)}</ul>
