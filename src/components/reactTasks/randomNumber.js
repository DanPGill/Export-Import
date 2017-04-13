import React from 'react'
export class RandomNumberGenerator extends React.Component{
constructor(){
  super()
  this.state = {number: 0.534234}
  }
   render(){
    return(
      <div>
        <p>{this.state.number}</p>
          <button onClick={()=> this.setState({number: Math.random()})}>Generate</button>
      </div>
      )


}
}
