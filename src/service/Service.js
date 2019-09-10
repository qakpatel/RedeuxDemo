import axios from 'axios';


export const AxiosService=()=>{
   return axios.get('https://jsonplaceholder.typicode.com/users')
}

export const Comments=()=>{
   return axios.get('https://jsonplaceholder.typicode.com/comments')
}

export const post=(endurl,data)=>{
    if(localStorage.getItem('token')){
      const headers = {
         'Content-Type': 'application/json',
         'Authorization': JSON.parse(localStorage.getItem('token'))
       }
      return axios.post('http://localhost:5000/'+endurl,data,{headers:headers})
    }
   return axios.post('http://localhost:5000/'+endurl,data)
}

export const get=(endurl)=>{
   if(localStorage.getItem('token')){
      const headers  = {
         'Content-Type': 'application/json',
         'Authorization': JSON.parse(localStorage.getItem('token'))
       }
      return axios.get('http://localhost:5000/'+endurl,{headers :headers })
    }
   return axios.get('http://localhost:5000/'+endurl)
}


