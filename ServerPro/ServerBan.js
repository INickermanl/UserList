const http= require('http');
let fs = require('fs');


let server=http.createServer(function(req,res){      //req-запрос, res-ответ TODO не нужно писать что такое req res это понятно без обьяснений
    console.log("URL Pages:" + req.url);
    
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    let myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadShort.pipe(res);
    
});

server.listen(3000,'127.0.0.1');
console.log('Мы отслеживаем порт 3000'); // русские коментарии не пишутся только инглиш)
