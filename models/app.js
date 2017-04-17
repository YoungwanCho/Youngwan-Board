mongoose.connect('mongodb://localhost/boards');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("connected"); 
});
var board = require('./route/contents'); // /board 경로를 통해 들어온 경우 contents.js에서 진행 된다
app.use('/boards', boards);
