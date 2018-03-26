import axios from 'axios';

//INITIAL STATE
const defaultOrder = {};

//ACTION TYPES
const GET_ORDER = 'GET_ORDER';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

//ACTION CREATORS
const getOrder = (order) => ({type: GET_ORDER, order})

const addItem = (order) => ({type: ADD_ITEM, order})

const deleteItem = (itemId) => ({type: DELETE_ITEM, itemId})

//THUNK CREATORS
export const fetchOrder = (orderId) => {
  return function(dispatch){
    axios.get(`/api/orders/${orderId}`)
      .then(res => res.data)
      .then(order => {
        dispatch(getOrder(order))
      })
      .catch(err => console.log(err))
  }
}

export const addToOrder = () => {
  //AGREGAR ORDER.ID A ITEM SELECCIONADO
}


//REDUCER
export default function (state = defaultOrder, action){
  switch (action.type){
    case GET_ORDER:
      return action.order;

    // case ADD_ITEM:
    //   return 'hola'

    case DELETE_ITEM:
      return state.items.filter(item => item.id !== action.itemId)

    default:
      return state;
  }
}
