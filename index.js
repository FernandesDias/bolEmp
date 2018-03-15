const http = require('http'),
express = require('express'),
path = require('path'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
cors = require('cors'),
app = express();


const appRoutes = require('./routes/approutes');
const port = process.env.PORT || 5000;

//mongoose.connect('mongodb://localhost/meanDb');
mongoose.connect('mongodb://junior:junior15@ds028559.mlab.com:28559/juniordstore');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//setar pasta estatica
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', appRoutes);

http.createServer(app).listen(port);

console.log('Rodando na porta ', port);