
import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components'
import axios from 'axios';
import './Image.css';
import { List, Avatar, Space } from 'antd';
import { Button } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const StyleItem = styled(List.Item)`
cursor: pointer;
&:hover {
    opacity: 0.8;
}
`;

function Image() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/certificate/read')
            .then((res) => {
                const list = [];
                //console.log(res.data["certificate"]);
                res.data["certificate"].forEach((one) => {
                    // console.log(one);
                    list.push(one);

                })
                console.log(list);
                setData(list);

            })

    }, []);
    // for (let i = 0; i < 23; i++) {
    //     listData.push({
    //         href: 'https://ant.design',
    //         title: `pull image from backend ${i}`,
    //         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //         description:
    //             'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    //         content:
    //             'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    //     });

    // }
    const listData = data.map((one) => ({
        href: 'https://ant.design',
        title: `${one.path}`,

        description:
            `${one.desc}`,


    }))
    console.log(listData);

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    const scatter = data.map((one) => {
        return (

            <div>
                <img src={one.path} />
                <div>{one.desc}</div>
            </div>

        );

    })
    return (
        <div className="container">
            <h1 className="title">게시글 목록</h1>

            <List
                itemLayout="vertical"
                size="Large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={listData}

                renderItem={item => (
                    <StyleItem
                        key={item.title}
                        onClick={() => {}}

                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src={item.title}
                            />
                        }
                    >
                        <List.Item.Meta

                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </StyleItem>
                )}
            />
        </div>
    )
}

export default Image
