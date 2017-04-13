import React from 'react'
export class NameList extends React.Component{
  constructor(){
    super()
      this.state = {names: []}
  }
  render(){
    const addName = (e) => {
    const nameArray = this.state.names
        nameArray.push(this._inputElement.value)
            this.setState({
            names: nameArray
                          })
    this._inputElement.value =""
    e.preventDefault()
                          }
    const listItems = _.map(this.state.names, (n) =>
      <li>{n}</li>)
    return(
      <div>
            <form onSubmit={addName}>
      <input ref={(input) => this._inputElement = input} placeholder=""></input>
      <button type="submit">Add Name</button>
      </form>
      <ul>
        <li>Richard</li>
        {listItems}
      </ul>
      </div>
      )
       }
                                            }
