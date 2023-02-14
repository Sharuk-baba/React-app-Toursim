
import Hyderabadreducer from '../hyderabadhotels/hyderabadReducer/Hyderbadreducer'//import reduer
import { legacy_createStore as createStore} from 'redux' 
import loginpagereducer from '../loginpage/loginpageReducer/loginpagereducer'
import { combineReducers } from 'redux'
const combinereducers=combineReducers({
    hotels:Hyderabadreducer,
    loginpage:loginpagereducer
})
const Store = createStore(combinereducers)//creating store
export default Store //default export