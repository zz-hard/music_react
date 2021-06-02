/**
 * 登录action
 * @author
 * @log
 *   2016-11-23
 */
 import $ from 'jquery';
 import Api from '../api/api';
 import ImgApi from '../api/imgApi';
 
 const homeActionCreators = {
     
    findAllMusic: (params,callback) => {
        return function(dispatch) {
            // dispatch(homeActionCreators.loadingStart('boardViewLoading'));
            $.ajax({
               type : 'get',
               url : Api.FINDAll,
               success : (data) => {
                   callback(data);
               },
               error : (err) => {
                   
               }
           });
        }
    },
    findMusicById: (params,callback) => {
        return function(dispatch) {
            $.ajax({
               type : 'get',
               data:params,
               url : Api.FINDBYID,
               success : (data) => {
                   callback(data);
               },
               error : (err) => {
                   
               }
           });
        }
    },

    findImg: (params,callback) => {
        return function(dispatch) {
            // dispatch(homeActionCreators.loadingStart('boardViewLoading'));
            $.ajax({
               type : 'get',
               url : ImgApi.Img,
               success : (data) => {
                   callback(data);
               },
               error : (err) => {
                   
               }
           });
        }
    },
    //发起请求存入订票信息
    seatUpdate: (params,callback) => {
        return function(dispatch) {
            // dispatch(homeActionCreators.loadingStart('boardViewLoading'));
            $.ajax({
               type : 'post',
               url : Api.SeatUpdate,
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
 
 export default homeActionCreators;
 