 import $ from 'jquery';
 import Api from '../api/api';
 import ImgApi from '../api/imgApi';
 
 const presonalActionCreators = {
     
    findPresonalInfo:(params,callback)=>{
        return function(dispatch) {
            $.ajax({
               type : 'post',
               data:params,
               url : Api.FINDAllByUserName,
               success : (data) => {
                   callback(data);
               },
               error : (err) => {
                   
               }
           });
        }
     },
     saveOrUpdatePresonalInfo:(params,callback)=>{
        return function(dispatch) {
            $.ajax({
               type : 'post',
               data:params,
               url : Api.SaveOrUpdate,
               success : (data) => {
                   callback(data);
               },
               error : (err) => {
                   
               }
           });
        }
     },
     findOderById:(params,callback)=>{
        return function(dispatch) {
            $.ajax({
               type : 'get',
               data:params,
               url : Api.FindOderById,
               success : (data) => {
                   callback(data);
               },
               error : (err) => {
                   
               }
           });
        }
     },
     deleteOderById:(params,callback)=>{
        return function(dispatch) {
            $.ajax({
               type : 'get',
               data:params,
               url : Api.DeleteById,
               success : (data) => {
                   console.log(data);
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
    fingMusicUserById: (params,callback) => {
        return function(dispatch) {
            $.ajax({
               type : 'get',
               data:params,
               url : Api.FingMusicUserById,
               success : (data) => {
                   callback(data);
               },
               error : (err) => {
                   
               }
           });
        }
    },
    
 };
 
 export default presonalActionCreators;
 