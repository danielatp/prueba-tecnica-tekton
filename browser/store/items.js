import axios from 'axios';

//ACTION TYPES
const GET_ITEMS = 'GET_ITEMS';

//ACTION CREATORS
const getItems = (items) => ({type: GET_ITEMS, items})

//THUNK CREATORS
export const fetchItems = () => {
   return function(dispatch){
     axios.get('/api/items')
     .then(res => res.data)
     .then(items => dispatch(getItems(items)))
     .catch(err => console.log(err))
   }
}

//REDUCER
export default function (state = [], action){
   switch (action.type){
    case GET_ITEMS:
      return action.items;

    default:
      return state;
   }
}
