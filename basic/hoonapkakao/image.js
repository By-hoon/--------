const express = require('express');
const router = express.Router();

const multer = require('multer');
const fs = require('fs');
const uploader = multer({dest: 'uploads/'});

router.get('/', (req, res, next) => {
    res.render('index')
});

router.post('/upload_page', uploader.single('홍길동'), (req, res, next) => {
    console.log('파일 업로드')
    res.redirect('/');
});

module.exports = router;