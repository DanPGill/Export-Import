import React from 'react'
export class NextName extends React.Component{
  constructor(props){
    super(props)
    this.state = {index: 0}
  }

    render(){
      const Next = () =>
      this.setState(
            this.state.index == this.props.names.length -1 ?
            {index: 0} : {index: this.state.index +1})

        return(

      <div>
        <p>{this.props.names[this.state.index]}</p>
          <button onClick={Next}>Next</button>
      </div>

              )
  }
}
