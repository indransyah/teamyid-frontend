import * as types from '../types/user'
import axios from 'axios'
import config from '../config'

export const setUserData = user => {
  return {
    type: types.USER_DATA_SET,
    payload: user
  }
}

// Async
export const login = (facebookToken) => {
  return (dispatch) => {
    axios.post(`${config.apiUrl}api/login/facebook`, {
      token: facebookToken
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      localStorage.setItem('token', res.data.meta.token)
      localStorage.setItem('name', res.data.data.name)
      // dispatch(setUserData(res.data.data))
      window.location.assign('/welcome')
    })
    .catch(console.error)
  }
}

export const getProfile = () => {
  return (dispatch) => {
    axios(`${config.apiUrl}api/profile`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      console.log('res getProfile', res.data)
      dispatch(setUserData(res.data.data))
    })
    .catch(console.error)
  }
}