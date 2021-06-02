import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Input, Select,Button, Carousel} from 'element-react';
import './scss/releaseConcert.scss';
import wd from '../img/wd.jpg';
import cover from '../img/Cover.jpeg';
import $ from 'jquery';
import Header from '../components/personalCenter/header';
import UploadPicture from '../components/personalCenter/UploadPicture'
import releaseConcertActionCreators from '../actions/releaseConcert-action';

class releaseConcert extends Component {
    constructor(props){
        super(props);
        this.state={
            uploadDom:null,
        };
    }
    componentWillMount = () => {
         
    }
    componentDidMount  = () =>{

    }
    logout = () => {
        this.props.history.replace('/home');
    }
    uploadImage = (e) =>{
        $(".upload").slideToggle(); //自动收缩和展开
        this.listenforupload();

    }
    //实现监听是否拖动上传
    listenforupload = () =>{
        let num=0;
        let timer=null;
        let fs = null;
        const _this = this;
        const oDiv = $(".upload")[0];
        let op=$(".upload p.tis");
        //当进入
        oDiv.ondragenter = function(){
            op.html("可以释放元素");
        }
        //离开
        oDiv.ondragleave=function(){
            op.html("请将图片拖拽到此区域");
        };
        //在内部移动
        oDiv.ondragover=function(e){
            e.preventDefault();
            e.stopPropagation();
        }
        //释放
        oDiv.ondrop=function(e){
            clearTimeout(timer)
            e.stopPropagation();
            e.preventDefault();
            //获取拖过来的文件
            fs = e.dataTransfer.files;
            console.log(fs,'1');
            let len = fs.length; //获取文件个数
            for(let i=0;i<len;i++){
                let _type=fs[i].type;
                if(_type.indexOf("image")!=-1){//判断他是不是图片文件
                    num++;
                    if(num<=3){
                        let fd=new FileReader();
                        fd.readAsDataURL(fs[i]);
                        fd.onload=function(){
                            let oImg=$("<img src='' width='180' height='180' />");
                            oImg.attr("src",this.result);
                            $(".upload").append(oImg);
                            op.html("");
                        }
                    }else{
                        op.html("最多只能上传3张哦");
                        timer=setTimeout(function(){
                            op.html('')
                        },500)
                    }
                }else{
                    alert("请，上传图片文件！！");
                }
            }
        }
        //点击发表说说按扭
    $(".fb").click(function(){
        console.log(fs);
        debugger
        // $(".upload").slideUp();
        var txt=$(".Edit").text();
        if(txt==""){
            $(".Edit").focus();
        }else{
            $(".shuoshuo").show();
            var html=$(".shuoshuo").html();
            if($(".upload")[0].firstChild==$('img')[0]){
                $(".shuoshuo").html(html+"<div class='box'><p>"+txt+"</p>"+$(".upload").html()+"</div>");
            }else{
                $(".shuoshuo").html(html+"<div class='box'><p>"+txt+"</p></div>");
            }
        }
        // $(".upload").html("");
        // $(".Edit").text("");
        
        //发起请求
        _this.props.UploadImg({
            files:fs,
            id:1,
        },(data)=>{
            console.log(data,'成功');
        })
    });
    }
    // releaseConcert = () => {
    //     $(".upload").slideUp();
    //     let txt=$(".Edit").text();
    //     if(txt==""){
    //         $(".Edit").focus();
    //     }else{
    //         $(".shuoshuo").show();
    //         let html=$(".shuoshuo").html();
    //         if($(".upload")[0].firstChild==$('img')[0]){
    //             $(".shuoshuo").html(html+"<div class='box'><p>"+txt+"</p>"+$(".upload").html()+"</div>");
    //         }else{
    //             $(".shuoshuo").html(html+"<div class='box'><p>"+txt+"</p></div>");
    //         }
    //     }
    //     $(".upload").html("");
    //     $(".Edit").text("");
    // }
    render() {
        return (
            <div className='releaseConcert'>
                <img src={cover} className="coverImg" />
                {/* <Header login={this.login}></Header> */}
                <Header 
                logout={this.logout}
                ></Header>
                {/* <UploadPicture></UploadPicture> */}
                <div id="Tz_Message">
                    <div id="MesCon">
                        <div className="imgBut" onClick={this.uploadImage}>上传图片</div>
                        <span className='concertName'>音乐会详情：</span><div className="Edit" contenteditable="true"></div>
                    </div>
                    <span className='price'>票价：</span><input style={{borderRadius: '4px',height: '40px',marginTop: '8px'}} type="text" />
                    {/* <span className="fb" onClick={this.releaseConcert}>发布音乐会</span> */}
                    <span className="fb">发布音乐会</span>
                    <div className="upload" id='upload' >
                        <p className="tis">请将图片拖拽到此区域</p>
                    </div>
                </div>
                <div className="shuoshuo">
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
     
    }
  };
  export default connect(
    mapStateToProps,
    releaseConcertActionCreators
  )(releaseConcert);

