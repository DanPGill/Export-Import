import React from 'react'
export const BoldEvenNumbers = (props) => <ul>
{_.map(props.numbers, function(number){
  if(number%2 ==0){
    return <li><b>{number}</b></li>
  }else{
    return <li>{number}</li>
  }
}
)}</ul>
