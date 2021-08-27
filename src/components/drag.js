import React, { useState, useEffect } from 'react'
import {Input,Button, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import axios from 'axios';

const { TextArea } = Input;
const { Dragger } = Upload;

const DragContainer = styled.div`
  margin-top:100px;
  margin-bottom:100px;
  display:flex;
  flex-direction: column;
  font-weight:800px;
  h1{
    font-weight:800px;
    border-bottom: 3px solid gray;;
  }
`;

const DragBox = styled.div`
  margin-top:20px;
  margin-bottom:20px;
`;

const TextareaContainer= styled.div`
  margin-top:20px;
  width:100%;
  height:100%;
  margin-bottom:20px;
`;
function Drag() {
  const [image, setImage] = useState();
  const [desc, setDesc] = useState("");
  const [title,setTitle]=useState("");
  const handleDescChange = ((e) => {
    setDesc(e.target.value);

  })
  const handleTitleChange= ((e)=> {
    setTitle(e.target.value);

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

    <DragContainer>
      <h1>파일 업로드</h1>
      <DragBox >
        <Dragger {...props} data={{
          desc,title
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
      </DragBox>
        <Input value ={title} onChange={handleTitleChange}type="text" placeholder="제목을 입력하세요."/>
        <TextareaContainer>
          <TextArea className="drag__textarea" value={desc} placeholder="설명을 입력하세요." onChange={handleDescChange} />
        </TextareaContainer>
        <Button >Upload</Button>
      
    </DragContainer>
  )
}

export default Drag
