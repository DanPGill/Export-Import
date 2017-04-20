import React, { Component } from 'react'
import { connect } from 'react-redux'
import { randomCat } from 'redux/actions/cats'
import RandomCatGenerator from 'components/cats'

class RandomCatContainer extends Component {

  render() {
    return (
      <RandomCatGenerator cats={this.props.cats}
      currentCat={this.props.currentCat}
      onRandomCat={(cat) => this.props.dispatch(randomCat(cat))}/>
    )
  }
}

export default connect((state) => state.cats)(RandomCatContainer)
