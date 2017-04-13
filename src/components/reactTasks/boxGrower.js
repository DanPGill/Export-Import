import React from 'react'
export class BoxGrower extends React.Component{
  constructor(){
    super()
    this.state = {height: 60}
  }
  render(){
    const style = {
          backgroundColor: 'black',
          width: 100,
          height: this.state.height
    }
    const grow = () =>
    this.setState({height: this.state.height +20})
    return(
      <div>
          <div style={style}>
          </div>
            <button onClick={grow}>Grow</button>
      </div>
)
  }
}
