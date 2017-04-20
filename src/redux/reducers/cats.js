import { catList } from 'components/cats/catlist'
const initialState = { cats: null }


export default function cats(state = initialState, action){
  switch (action.type){
case 'cats/RANDOM_CAT':
return {...state, cats: Math.floor(Math.random() * catList.length)}
default:
return state
  }
}
