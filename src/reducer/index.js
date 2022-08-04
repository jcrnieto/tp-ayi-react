
const initialState = {
   
    character:{
      id:"",
      name: "",
      species:"",
      status:"",
      type:"",
    },
    characters:[{
      id:"",
      name: "",
      species:"",
      status:"",
      type:"",
    }],
    login:false,
    name:[{
      id:"",
      name: "",
      species:"",
      status:"",
      type:"",
    }],
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