const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/index');
const {ServerConfig} = require('./config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',router);

app.listen(ServerConfig.PORT,()=>{
    console.log("Server is up PORT : ",ServerConfig.PORT);
});