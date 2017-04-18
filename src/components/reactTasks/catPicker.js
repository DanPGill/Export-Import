import React from 'react'
export class CatPicker extends React.Component{
constructor(){
  super()
this.state = {index: null}
}
render(){
  const cats = [{name: "Edward",
  image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/11/most-popular-cats-lil-bub-11__605.jpg"},
  {name: "Wallace", image: "https://s-media-cache-ak0.pinimg.com/originals/6b/04/f2/6b04f2de3e4a1d11047bd8f6d0025dfd.jpg"},
  {name: "Chloe", image: "https://turnstylenews.com/wp-content/uploads/2011/08/5.jpg"}]

const Random = () => {
      this.setState({index: Math.floor(Math.random() * cats.length)})

    }

        return(
        <div>
          <h1>{this.state.index == null ? "": cats[this.state.index].name}</h1>
          <img src={this.state.index == null ? "": cats[this.state.index].image}></img>
          <div>
                <button onClick={Random}>Find a Cat</button>
                </div>
        </div>

          )
        }
        }
