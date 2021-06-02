/**
 * @version 1.0
 */

//  import hashHistory from 'history';
 const immutable = require("object-path-immutable");
 
 export default {
    'ON_LOGIN_INFO' : (state,payload) => {
        let immuOp = immutable(state);
        immuOp = immuOp.set('username',payload.username);
        immuOp = immuOp.set('pictureUser',payload.picture_user);
        return immuOp.value();
    },
 };
 