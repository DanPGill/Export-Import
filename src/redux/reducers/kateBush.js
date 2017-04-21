const initialState = { albums: [], loading: true }

export default function albums(state = initialState, action) {
switch(action.type){
case 'GET_ALBUMS_SUCCESS':
return {...state, albums: action.payload, loading: false}
  default:
  return state
  }
}


