import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAlbums, getAlbumsSuccess } from 'redux/actions/kateBush'
import AlbumList from 'components/kateBush'

class AlbumListContainer extends Component {
   componentDidMount(){
  this.props.getAlbums()
}
  render(){
  return(
    <AlbumList albums={this.props.albums}
    loading ={this.props.loading}
   />

    )
  }

}
export default connect((state) => state.albums)(AlbumListContainer)
