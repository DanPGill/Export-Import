import React, { Component } from 'react'
import { connect } from 'react-redux'
import { randomCat } from 'components/cats/redux/actions/cats'
import RandomCatGenerator from 'components/cats/components'

class RandomCatContainer extends Component {

  render() {
    return (
      <RandomCatGenerator
      cats={this.props.cats}
      onRandomCat={(cat) => this.props.dispatch(randomCat(cat))}
      />
    )
  }
}

export default connect((state) => state.cats)(RandomCatContainer)
