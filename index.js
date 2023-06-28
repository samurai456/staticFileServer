const express = require('express')
const multer = require('multer')
const path = require('path')
const upload = multer({dest: 'stat/'})
const cors = require('cors')

const app = express()

app.use('/static', express.static(path.join(__dirname, '/stat')))
app.use(cors({
    origin: 'https://staticfront.onrender.com',
    methods: ['POST', 'GET'],
}));

app.post('/upload', upload.single('file'), (req, res)=>{
    console.log(req.file)
    res.send({type: 'filename', name: req.file.filename})
});

app.listen(8500, ()=>console.log('server is running'))