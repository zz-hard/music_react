import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Upload,Message} from 'element-react';
import './UploadPicture.scss';
import $ from 'jquery';

class UploadPicture extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
          imageUrl: '',
        };
      }
      
      render() {
        const { imageUrl } = this.state;
        return (
          <Upload
            className="avatar-uploader upload"
            action="//jsonplaceholder.typicode.com/posts/"
            showFileList={false}
            onSuccess={(res, file) => this.handleAvatarScucess(res, file)}
            beforeUpload={file => this.beforeAvatarUpload(file)}
          >
            { imageUrl ? <img src={imageUrl} className="avatar" /> : <i className="el-icon-plus avatar-uploader-icon"></i> }
          </Upload>
        )
      }
      
      handleAvatarScucess(res, file) {
        this.setState({ imageUrl: URL.createObjectURL(file.raw) });
      }
      
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
      
        if (!isJPG) {
          Message('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          Message('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
      
}
export default UploadPicture;