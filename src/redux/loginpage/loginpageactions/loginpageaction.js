import React from 'react'
const loginpageaction=(userName,password,name,mobilenumber)=>{ //action to dispatch into reducer 
    return{
        type:'loginpage',
        userName:userName,
        password:password,
        name:name,
        mobilenumber:mobilenumber
    }

    
}
export default loginpageaction//default export