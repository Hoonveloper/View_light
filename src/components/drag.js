import React, { useState, useEffect } from 'react'
import {Button, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import axios from 'axios';

import './drag.css';

const { Dragger } = Upload;
let containerStyle = {
  display: "flex",
  flexDirection: "column"

};
function Drag() {
  const [image, setImage] = useState();
  const [desc, setDesc] = useState("");
  const handleChange = ((e) => {
    setDesc(e.target.value);

  })
  // const handleOnclick=((e)=> {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append("file", image.originFileObj);

  //     axios.post('http://localhost:3001/certificate/upload',formData).then(v => console.log(v));
  //     console.log("전송완료",formData);

  // })

  useEffect(() => {
    console.log(desc);

  }, [desc])
  useEffect(() => {
    console.log(image);

  }, [image])

  const props = {
    name: 'file',
    multiple: true,
    action: 'http://localhost:3001/certificate/upload',
    onChange(info) {

      const { status } = info.file;
      setImage(info.file);
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (

    <div className="Container">
      <h1 className="title">파일 업로드</h1>
      <div className="drag__box">
        <Dragger {...props} data={{
          desc
        }}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>


        </Dragger>
      </div>
        <textarea className="drag__textarea" value={desc} placeholder="설명을 입력하세요." onChange={handleChange} />
        <Button >Upload</Button>
      
    </div>
  )
}

export default Drag
