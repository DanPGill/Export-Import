import React from 'react'
import { Person } from './person'
export const Company = (props) =>
<div>
<p>Company: {props.name}</p>
<Person person={props.employees[0]} />
<Person person={props.employees[1]} />
</div>
