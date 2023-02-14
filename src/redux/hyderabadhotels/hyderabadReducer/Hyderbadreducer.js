import React from 'react'
const initialState={ // state
    noofrooms1:10,
    noofrooms2:10,
    noofrooms3:10,
    noofrooms4:10
  }
const Hyderabadreducer=(state=initialState,action)=> // reducer to dispatch action and perform 
{
switch(action.type){
case'BOOK-HOTEL1':
return{
    ...state,
    noofrooms1:state.noofrooms1-action.payload
}
case'BOOK-HOTEL2':

    return{
        ...state,
        noofrooms2:state.noofrooms2-action.payload
    }
case'BOOK-HOTEL3':

    return{
        ...state,
        noofrooms3:state.noofrooms3-action.payload
    }
 case'BOOK-HOTEL4':

    return{
        ...state,
        noofrooms4:state.noofrooms4-action.payload
   }


default:return state
}

}
export default Hyderabadreducer