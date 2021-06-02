/**
 * 登录action
 * @author
 * @log
 *   2016-11-23
 */
 import $ from 'jquery';
//  import hashHistory from 'base/history';
//  import hashHistory from '../basejs/history';

 import Api from '../api/api'
 
 const loginActionCreators = {
     
     login: (params,callback) => {
         return function(dispatch) {
             $.ajax({
                type : 'post',
                url : Api.LOGING,
                data : params,
                dataType : 'json',
                success : (data) => {
                    sessionStorage.setItem("token",data.token);
                    sessionStorage.setItem("username",data.username);
                    sessionStorage.setItem("picture",data.picture);
                    sessionStorage.setItem("role",data.role);
                    sessionStorage.setItem("id",data.id);
                    callback(data);
                },
                error : (err) => {
                    
                }
            });
         }
     },
     registered: (params,callback) => {
        return function(dispatch) {
            $.ajax({
               type : 'post',
               url : Api.Registered,
               data : params,
               dataType : 'json',
               success : (data) => {
                   callback(data);
               },
               error : (err) => {
                   
               }
           });
        }
    },
     onLoginInfo : (data) => {
        return {
            type : 'ON_LOGIN_INFO',
            payload : data
        }
    },

 };
 
 export default loginActionCreators;
 