import  actionType  from './ActionType'
import { AxiosService,Comments,post,get } from './../service/Service'


export const getUSer = (key) => dispatch => {
    let userData=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
    dispatch({
        type:actionType.GET_DATA,
        payload:userData
    })
  
}       


export const getPost=()=>dispatch=>{
    get('api/getpost').then(response=>{
       if(response.data.status===200){
        dispatch({
            type:actionType.GET_POST,
            payload:response.data.result
        })
       }
        
    })
}

export const setPost=(data)=>dispatch=>{
    
    post('api/post',data).then(response=>{
        if(response.data.status===200){
            dispatch({
                type:actionType.SET_POST,
                payload:response.data.result
            })
        }
    })
}

export const deletePost=(data)=>dispatch=>{
    post('api/deletepost',data).then(response=>{
        if(response.data.status===200){
            dispatch({
                type:actionType.SET_POST,
                payload:response.data
            })
        }
    })
}



export const getUserApi=()=>dispatch=>{
    AxiosService().then(response=>{
       
        dispatch({
            type:actionType.GET_USER,
            payload:response.data
        })
    })
}

export const getComments=()=>dispatch=>{
    Comments().then(response=>{
       

        dispatch({
           type:actionType.GET_COMMENTS,
           payload:response.data
        })
    })
}

export const signup=(data)=>dispatch=>{
 
    post('signup',data).then((response)=>{
    
      if(response.data.status===200){
         
        dispatch({
            type:actionType.signup,
            payload:response.data
         })
      }
     
    },error=>{
         console.log(error)
    })   
}

export const login=(data)=>dispatch=>{
    post('login',data).then(response=>{
        dispatch({
            type:actionType.login,
            payload:response.data
         }) 
    },
    error=>{
        console.log(error)
    })
}

export const getProfile=()=>dispatch=>{
    get('api/getprofile').then(response=>{
        dispatch({
            type:actionType.getprofile,
            payload:response.data
        })
    })
}


export const updateProfile=(data)=>dispatch=>{
    post('api/updateprofile',data).then(response=>{
        dispatch({
            type:actionType.updateProfile,
            payload:response.data   
        })
    })
}