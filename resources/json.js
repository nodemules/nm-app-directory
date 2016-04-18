// json.js

var fs = require("fs"),
    json = {};

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

json.readFile = function (file){

    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}

module.exports = json;