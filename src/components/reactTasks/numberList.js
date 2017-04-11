import React from 'react'
export const Numbers = (props) => _.map(props.numbers, (number) =>
    <li>{number}</li>)
