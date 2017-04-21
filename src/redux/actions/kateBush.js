import request from 'superagent'

export const getAlbums = () => (dispatch) => {
  request
  .get('https://api.spotify.com/v1/artists/1aSxMhuvixZ8h9dK9jIDwL/albums')
  .end((err, res) => {
    const bushAlbums = _.uniq(_.map(res.body.items, (obj) => obj.name))
    dispatch ({type: 'GET_ALBUMS_SUCCESS', payload: bushAlbums})
  })
}
