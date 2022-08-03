

import axios from 'axios';


export function getCharacters () {
    return async function (dispatch) {
       try{
         let json = await axios.get('https://rickandmortyapi.com/api/character')
        // console.log(json.data.results)
         return dispatch({
            type: 'GET_CHARACTERS',
            payload: json.data.results
         })
       }catch(error){
          console.log(error)
       }
    }
}

export function getId (id) {
   return async function (dispatch) {
      try{
        let json = await axios.get('https://rickandmortyapi.com/api/character' + '/' + id) 
        //console.log('esto es actions',json.data)
        return dispatch({
           type: 'GET_ID',
           payload: json.data
           
        })
        
      }catch(error){
         console.log(error)
      }
   }
}

export function login () {
   return function (dispatch){
   return dispatch({
      type: 'LOGIN',
      payload: true
   })
}
}

export function logout () {
   return function (dispatch){
   return dispatch({
      type: 'LOGOUT',
      payload: false
   })
 }
}

export function getName (title) {
   return async function (dispatch) {
      try{
         let json = await axios.get('https://rickandmortyapi.com/api/character/?name=' + title)
         console.log('actions',json)
         return dispatch({
            type: 'GET_NAME',
            payload: json.data.results
         })
      }catch(error){
         console.log(error)
      }
   }
}