import axios from 'axios';

//INITIAL STATE
const defaultUser = {};

//ACTION TYPES
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';

//ACTION CREATORS
const getUser = (user) => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

//THUNK CREATORS
export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)))
      .catch(err => console.log(err))


export const login = (email, password) => {
  return function(dispatch){
    axios.post('/auth/login', {email, password})
    .then(res => res.data)
    .then(user => {
      dispatch(getUser(user))})
    .catch(err => console.log(err))
  }
}

export const logout = () => {
  return function(dispatch){
    axios.post('/auth/logout')
    .then(() => {
      dispatch(removeUser())
    })
    .catch(err => console.log(err))
  }
}

//REDUCER
export default function (state = defaultUser, action){
  switch (action.type){
    case GET_USER:
      return action.user;

    case REMOVE_USER:
      return defaultUser;

    default:
      return state;
  }
}
