var express = require('express')
var exphbs  = require('express-handlebars');
var path = require('path')

var app = express()

app.get('/', function(req, res){
  res.render('index', {
    title: "Inbox Pie",
  })
})

app.set('views', path.join(__dirname, 'views'))
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('x-powered-by', false)
app.use(express.static(path.join(__dirname, '../public')))

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Example app listening at http://127.0.0.1:%s', port);
});
