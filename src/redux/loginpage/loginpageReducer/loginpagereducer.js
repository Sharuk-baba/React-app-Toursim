import React from 'react'
const initialState={ // state
    userName:"",
    password:"",
    name:"",
    mobilenumber:""
  }
const loginpagereducer=(state=initialState,action)=> // reducer to dispatch action and perform 
{
switch(action.type){
case'loginpage':
return{
    ...state,
    userName:action.userName,
    password:action.password,
    name:action.name,
    mobilenumber:action.mobilenumber
}



default:return state
}

}
export default loginpagereducer