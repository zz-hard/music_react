/**
 * redux store
 * @version 1.0
 */

 import { createStore, applyMiddleware } from 'redux'
 import thunk from 'redux-thunk'
 import createLogger from 'redux-logger'
 import rootReducer from '../reducers/reducer'
 
 const middleware = [ thunk ]
 
 export default createStore(rootReducer, applyMiddleware(...middleware))
 