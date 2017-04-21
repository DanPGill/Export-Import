import React from 'react'

export default (props) =>{
  return (
    props.loading==true
    ?
    <p>"Loading..."</p>
    :
    <div>
    <ul>
    {_.map(props.albums, (album, i) =>
      <li key={i}>{album}</li>)}
    </ul>
    </div>
  )
}
