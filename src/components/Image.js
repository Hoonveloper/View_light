
import React ,{useState,useEffect}from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components/macro'
import axios from 'axios';
import './Image.css';
function Image() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/certificate/read')
        .then((res)=> {
            const list = [];
            //console.log(res.data["certificate"]);
            res.data["certificate"].forEach((one) => {
                console.log(one);
                list.push(one);

            })
            console.log(list);
            setData(list);

        })
        
    }, []);
    useEffect(() => {
        console.log(data);
        
    }, [data])
    const scatter =data.map((one)=> {
        return (
            <div>
            <img src= {one.path}/>
            <div>{one.desc}</div>
            </div>

        );
        
    })
    return (
        <div className="container">
            {scatter}
        </div>
    )
}

export default Image
