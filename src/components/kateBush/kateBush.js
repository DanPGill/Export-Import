import React from 'react'

export default (props) =>{
  return (
    props.loading==true
    ?
    <p>"Loading..."</p>
    :
    <div>
    <ul>
    {_.map(props.albums, (album) =>
      <li>{album}</li>)}
    </ul>
    </div>
  )
}
