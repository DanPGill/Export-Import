import React from 'react'
export class NameList extends React.Component{
  constructor(){
    super()
      this.state = {value: "", names: ["Richard"]}
  }
  render(){
    const handleChange = (event) =>  {
      this.setState({value: event.target.value})
    }
    const handleSubmit =(event) => {
                  event.preventDefault()
                  this.setState({names: this.state.names.concat([this.state.value])})
                  this.setState({value: ""})

          }


    return (<div>
       <ul>
      {_.map(this.state.names, (n, i) =>
      <li key={i}>{n}</li> )}
      </ul>
<form onSubmit={handleSubmit}>
<input type="text" value={this.state.value}
onChange={handleChange}></input>
<button type="submit">Add Name</button>
</form>

      </div>
      )


       }
                                            }
