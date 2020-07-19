"use strict";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const config = require('config');
const cors = require('cors');
const exitHook = require('exit-hook');
const apiRoutes=require('./routes/apiRoutes')
 
app.use(helmet());
// app.use(cors());
app.use(bodyParser.json());

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use('/api',apiRoutes)

app.all('*', function (req, res) {
    console.log(`Invalid path ${req.originalUrl}`);
    res.status(404).json({
        "status": "404",
        "error": {
            "code": "ERR101",
            "message": "Invalid path!"
        }
    })
});

app.use(function (err, req, res, next) {
  
        console.log(`Error ${err.message}`);
        // console.log(`Validation Error ${err.details.body[0].message}`);
    // console.log(`Error ${err.message}`);
    res.status(500).json({
        "status": "500",
        "error": {
            "code": "ERR103",
            "message": "Something went wrong!!"
        }
    })
})

process.on('unhandledRejection', err => {
    console.log('Shutting down...');
    process.exit(1); 
});

exitHook(() => {
    console.log('Exiting application');
});


app.listen(process.env.PORT||config.get('port'), () => {
    // logger.info(`Project is running on ${process.env.PORT||config.get('port')}`);
    // logger.info(`Environment  `+ process.env.NODE_ENV);
    console.log(`Server started`)
})
