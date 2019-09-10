
const initialState={
   userData:[],
   post:[],
   apiUser:[],
   comments:[],
   response:{}
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
       case 'GET_DATA':{
           return {
               ...state,
            userData:action.payload
        }
       }
       case 'SET_DATA':{
           return {
               ...state,
               userData:action.payload
           }
       }
       case 'GET_POST':{
           return {
               ...state,
               post:action.payload
           }
       }
       case 'SET_POST':{
        return {
            ...state,
            post:state.post.concat(action.payload)
         }
      }
      case 'DELETE_POST':{
        return {
            ...state,
            response:action.payload
         }
      }
       case 'GET_USER':{
        return {
            ...state,
            apiUser:action.payload
        }
    }
    case 'GET_COMMENTS':{
        return {
            ...state,
            comments:action.payload
        }
    }
    case 'signup':{
        return {
            ...state,
            response:action.payload
        }
    }
    case 'login':{
        return {
            ...state,
            response:action.payload
        }
    }
    case 'getprofile':{
        return {
            ...state,
            response:action.payload
        }
    }
    case 'updateProfile':{
        return {
            ...state,
            response:action.payload
        }
    }
    }
    return state;
}

export default userReducer;