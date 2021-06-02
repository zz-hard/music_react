/**
 * root reducer
 * @version 1.0
 */

 import r1 from './reducer.js';
 
 import $ from 'jquery'
 
 const initialState = {
    loginData: {
        isLogining: false,
        result: '',
        emailSending: false,
        emailSendResult: '',
        reseting: false,
        resetResult: '',
      },
 }
 
 const reducerMap = $.extend({}, r1);
 
 export default function (state = initialState, action) {
   if (reducerMap[action.type]) {
     return reducerMap[action.type](state, typeof action.payload === 'undefined' ? null : action.payload);
   } else {
     return state;
   }
 }
 