import request from 'superagent'

export const getAlbums = (albums) =>
  (dispatch) => {
    dispatch(request
  .get('https://api.spotify.com/v1/artists/1aSxMhuvixZ8h9dK9jIDwL/albums')
  .end((err, res) => {
     if (err || !res.ok){
      alert('Error Receiving Data')
    } else {
    const bushAlbums = _.uniq(_.map(res.body.items, (obj) => obj.name))
       _.delay(()=> {dispatch(getAlbumsSuccess(bushAlbums)), 2000
          })
        }
      })
    )
  }
export const getAlbumsSuccess = (data) =>
  (dispatch) =>{
    dispatch({type: 'GET_ALBUMS_SUCCESS', payload: data})
  }
