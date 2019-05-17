let express= require('express');
let bodyParser= require('body-parser');

let app= express();
let urlencodedParser = bodyParser.urlencoded({extended:false});

app.set('view engine','ejs');
app.use('/public',express.static('public'));


app.get('/', function(req,res){
res.sendFile(__dirname+"/index.html");
});

app.get('/about', function(req,res){
res.sendFile(__dirname + "/about.html");
});

app.post('/about', urlencodedParser, function(req,res){
    if(!req.body)return res.sendStatus(400);
    console.log(req.body);
    res.sendFile('about_access', {data: req.body});
    });
    

app.get('/news/:id', function(req,res){
    let obj= {title:"User",id:4};//paraphras:['Add','Delete','Upgrade']};
res.render('news',{newsId: req.params.id, obj: obj});
});
app.listen(4000,'127.0.0.1');