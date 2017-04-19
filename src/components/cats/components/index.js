import React from 'react'
import Cats from './cats'

export default (props) =>
<div>
<Cats cat={props.cats} onRandomCat={props.onRandomCat}/>
</div>
