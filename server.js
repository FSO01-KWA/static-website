const express = require('express');
const app = express();
const PORT = 3000;

// public 폴더 내의 파일을 정적으로 제공
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
});
