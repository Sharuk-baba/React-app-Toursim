import React from 'react'
const Bookhotel1=(number=1)=>{ //action to dispatch into reducer 
    return{
        type:'BOOK-HOTEL1',
        payload:number
    }

    
}
export default Bookhotel1 //default export