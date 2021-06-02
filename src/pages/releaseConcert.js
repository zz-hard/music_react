import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Select,Button, Carousel,Upload,Message,MessageBox} from 'element-react';
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
            fileList:[],
            form: {
                music: '',
                musicuserId: sessionStorage.getItem('id'),
                introduction: '',
                price:'',
                seat:'',
              },
              rules: {
                music: [
                  { required: true, message: '请输入音乐会名称', trigger: 'blur' },
                   
                ],
                musicuserId: [
                   
                ],
                introduction: [
                   
                ],
                price:[
                    { required: true, message: '请输入音乐会价格', trigger: 'blur' },
                ],
                seat:[
                    { required: true, message: '请输入音乐会限定座位', trigger: 'blur' },
                ]
              }
        };
    }
    componentWillMount = () => {
         
    }
    componentDidMount  = () =>{

    }
    logout = () => {
        this.props.history.replace('/home');
    }
    handlePreview(file) {
        console.log(file,'preview');
      }
      
    handleRemove(file, fileList) {
        console.log(file,'remove');
    }
    // release(file){
    //     debugger
    //     console.log(file,1111111111111);
    //     //发起请求
    //     this.props.UploadImg({
    //         files:file,
    //         id:1,
    //     },(data)=>{
    //         console.log(data,'成功');
    //     })
    // }
    submitUpload() {
        console.log(this.refs.upload,this.refs.upload.submit());
        this.refs.upload.submit();
        console.log($('a'));
      }

      Upload = () =>{
          console.log(1);
          this.props.UploadImg(null,(data)=>{
              
          })
      }

      handleSubmit(e) {
          const _this=this;
        e.preventDefault();
        this.refs.form.validate((valid) => {
          if (valid) {
            alert('温馨提示需要现发布音乐会才能上传图片!');
            let dataStrArr=this.state.form.seat.split(",");
            let arr =[[]];
            // console.log(dataStrArr,dataStrArr[0],dataStrArr[1]);
            for (let i = 0; i < dataStrArr[0]; i++) {
                arr[i] = []
                for (let j = 0; j < dataStrArr[1]; j++) {
                     arr[i][j] = 1;
                }
            }
            let arr1 = _this.array2String(arr);
            console.log(arr,arr1);
            this.props.UpdateMusic({
                music:this.state.form.music,
                userId:this.state.form.musicuserId,
                introduction:this.state.form.introduction,
                seat:`${arr1}`,
            },(data)=>{
                MessageBox.confirm('你已经成功发布音乐会？继续上传图片吧！', '提示', {
                    type: 'warning'
                }).then(() => {
                    // this.props.history.push('/personalCenter');
                    // location.reload();
                }).catch(() => {
                    Message({
                      type: 'info',
                      message: '温馨提示请尽快上传图片'
                    });
                });
                // console.log(a)
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }

      //二维数组tostring  eval()字符串转为二维数组
     array2String = function(arr){
        // var arr = [[1,2,3], [4,6,9], [2,3,7]];
        var s = '';
        for (var i = 0; i < arr.length; i++) {
            s += '[';
            for(var j = 0; j<arr[i].length-1; j++){
                s += arr[i][j] + ',';
            }
            s += arr[i][arr[i].length-1] + '],';
        }
        return '[' + s.substr(0, s.length-1) + ']';
    }
      
      onChange(key, value) {
        this.setState({
          form: Object.assign({}, this.state.form, { [key]: value })
        });
      }
    render() {
        // debugger
        const fileList = [];
        return (
            <div className='releaseConcert'>
                {/* <img src={cover} className="coverImg" /> */}
                {/* <Header login={this.login}></Header> */}
                <Header 
                logout={this.logout}
                ></Header>
                {/* <form className="up" action="http://localhost:3000/upload" method="post" enctype="application/json">
                    <input name="fileUpload" type="file" />
                    <img src="" alt=""/>
                    <button type="submit">上传</button>
                </form> */}
                <div>
                <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-ruleForm">
                    <Form.Item label="音乐会名称" prop="music">
                        <Input  value={this.state.form.music} onChange={this.onChange.bind(this, 'music')} autoComplete="off" />
                    </Form.Item>
                    <Form.Item label="音乐会出票方" prop="musicuserId">
                        <Input  value={this.state.form.musicuserId}   autoComplete="off" />
                    </Form.Item>
                    <Form.Item label="音乐会简介" prop="introduction">
                        <Input value={this.state.form.introduction} onChange={this.onChange.bind(this, 'introduction')}></Input>
                    </Form.Item>
                    <Form.Item label="音乐会票价" prop="price">
                        <Input value={this.state.form.price} onChange={this.onChange.bind(this, 'price')}></Input>
                    </Form.Item>
                    <Form.Item label="音乐会座位" prop="seat">
                        <Input value={this.state.form.seat} placeholder="请输入行列信息即可例如：12,5，为12行5列" onChange={this.onChange.bind(this, 'seat')}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
                    </Form.Item>
                </Form>
                </div>
               <Upload
                className="upload-demo"
                data={{id:13}}
                name="files"
                ref="upload"
                // action="//jsonplaceholder.typicode.com/posts/"
                action="http://localhost:3000/upload"
                onPreview={file => this.handlePreview(file)}
                onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                fileList={fileList}
                autoUpload={false}
                tip={<div className="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>}
                trigger={<Button size="small" type="primary">选取文件</Button>}
                // httpRequest={this.Upload}
                >
                <Button style={{ marginLeft: '10px'}} size="small" type="success" onClick={() => this.submitUpload()}>上传到服务器</Button>
                </Upload>


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

