/**
 * 登录action
 * @author
 * @log
 *   2016-11-23
 */
 import $ from 'jquery';
 import Api from '../api/api';
 import ImgApi from '../api/imgApi';
 
 const releaseConcertActionCreators = {
    UploadImg: (params,callback) => {
        return function(dispatch) {
            // dispatch(homeActionCreators.loadingStart('boardViewLoading'));
            $.ajax({
               type : 'post',
               url : Api.Upload,
               data: params,
               dataType : 'json',
            //    contentType: false,
        	//    processData: false,
               beforeSend: function(request) {
                request.setRequestHeader("Authorization",'Bearer' + ' ' + sessionStorage.getItem("token"));
                },
               success : (data) => {
                //    console.log(data);
                   callback(data);
               },
               error : (err) => {
                   
               }
           });
        }
    },
    //发起请求存入订票信息
    UpdateMusic: (params,callback) => {
        return function(dispatch) {
            // dispatch(homeActionCreators.loadingStart('boardViewLoading'));
            $.ajax({
               type : 'post',
               url : Api.UpdateMusic,
               data:params,
               success : (data) => {
                   callback(data);
               },
               error : (err) => {
                   
               }
           });
        }
    },

 };
 
 export default releaseConcertActionCreators;
 