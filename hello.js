var http = require('http');
var dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

function serverCallback(req, res) {
    var begin_time = dayjs("7:00", "HH:mm");
    var end_time = dayjs("17:00", "HH:mm");
    var message = `Olá ${process.argv[2]}! \n`;
    message += "Seja bem vindo a nossa página! \n";
    message += `Agora são ${dayjs().format("HH:mm")}. \n`;
    message += `Funcionamos entre as ${begin_time.format("HH:mm")} até ${end_time.format("HH:mm")}. \n`
    res.end(message);
};

http.createServer(serverCallback).listen('8080');