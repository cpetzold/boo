var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});


app.get('/', function(req, res){
  res.render('index', {
    locals: {
      title: 'Boo'
    }
  });
});

app.post('/players/add', function(req, res){
  console.log(req);
  res.send('hi');
  res.end();
});



if (!module.parent) {
  app.listen(1337);
  console.log("Boo on port %d", app.address().port);
}