
const fs = require('fs');	// fs 모듈 선언
const folder = './img';	// 폴더 경로 값 지정

fs.readdir(folder, function(error, filelist){
    console.log(filelist)
})