const express = require('express')
const cors = require("cors")
const app = express()
const fs = require('fs');
/**
 * Multer 미들웨어는 파일 업로드를 위해 사용되는 multipart/form-data에서 사용된다.
 * 다른 폼으로 데이터를 전송하면 적용이 안된다.
 * Header의 명시해서 보내주는게 좋다.
 */
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {  // 파일이 업로드될 경로 설정
        cb(null, __dirname + '/public/img/certificate')
    },
    filename: (req, file, cb) => {	// timestamp를 이용해 새로운 파일명 설정
        cb(null, file.originalname)
    },
})
const upload = multer({ storage: storage })

app.use(cors())// Test를 하기 위해서 세팅 "실제 서버에 배포할 때는 아이피를 설정 해야된다."

/*
 * @author Ryan
 * @description 단일 파일 업로드
 * 
 * 클라이언트에서 file이라는 Key(fieldname) 값을 통해 파일을 전송하면 req.file 안에 파일 정보를 얻을 수 있다.
 * 
 * 단일 이미지 전송이기 때문에 여러 파일을 보내게 되면 에러가 발생된다.
 * 
 */


 app.get('/certificate/read', (req, res) => {
    console.log("요청 받음");
    fs.readFile(__dirname + '/public/json/certificate.json', 'utf8', (error, jsonFile) => {

        if (error) return console.log(error);
        console.log(jsonFile);
        res.json(JSON.parse(jsonFile))
        //jsonfile은 문자열인데 json.parse통해 json으로 만들어줌.

    })
    
})

app.post('/certificate/upload', upload.single('file'), (req, res, next) => {
    console.log('zzz '+req.file["title"])
    
    const {originalname } = req.file
    const { desc } = req.body;
    const {title}= req.body;
    console.log('title:'+title);
    
    console.log(req.body);


    // JSON 읽고 수정
    const jsonBuf = fs.readFileSync(__dirname + '/public/json/certificate.json').toString();
    let data = JSON.parse(jsonBuf);
    data.certificate.push({
        path: `/img/certificate/${originalname}`,
        desc: desc,
        title:title
    })
    fs.writeFileSync(__dirname + '/public/json/certificate.json', JSON.stringify(data));

    res.json({ ok: true, data: "Single Upload Ok" })

})




app.listen(3001, () => console.log("Multer Server Start"))