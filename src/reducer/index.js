
const initialState = {
    characters:[],
    character:[],
    login:false,
    name:[]
 }
 
 function rootReducer (state = initialState, action) {
    switch(action.type){
          case 'GET_CHARACTERS' :
            return {
                ...state,
                characters: action.payload
                }
          case 'GET_ID' :
            return {
               ...state,
               character: action.payload
            }
          case 'GET_NAME' :
            return{
              ...state,
              name: action.payload
            }
          case 'LOGIN' :
            return {
               login: true
            }
          case 'LOGOUT' :
            return {
               login: false
            }
         default:
           return state;
   }
}

export default rootReducer;