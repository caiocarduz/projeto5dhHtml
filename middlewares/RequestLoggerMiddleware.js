const fs = require('fs')
const path = require('path')
module.exports = (req,res,next) => {

    let linha = `${req.ip} | ${new Date().toISOString()} | ${req.url} \n`;

    fs.appendFileSync(path.join(__dirname, '../logs/log.txt'), linha)
    next();
}