var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine
app.set('view engine', 'pug');

// sessions
app.set('trust proxy', 1);
var sess = {
	secret: 'testing',
	resave: true,
	saveUninitialized: true,
	cookie: { secure: !true }
};
app.use(session(sess));

var sdet;

var homeRouter = require('./routes/homeRouter.js');
var loginRouter = require('./routes/loginRouter.js');
var registerRouter = require('./routes/registerRouter.js');
var confLinkRouter = require('./routes/confLinkRouter.js');
var profileRouter = require('./routes/profileRouter.js');
var friendsRouter = require('./routes/friendsRouter.js');
var messagesRouter = require('./routes/messagesRouter.js');
var testCompRouter = require('./routes/testCompRouter.js');
var FOFRouter = require('./routes/404Router.js');

app.use('/', homeRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('', confLinkRouter);
app.use('/profile', profileRouter);
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);
app.use('/testcomp', testCompRouter);
app.use('*', FOFRouter);



/*
app.get('/login', ((req, res) => {
	res.sendFile(path.join(__dirname+'/signin.html'));
}));
app.get('/register', ((req, res) => {
	res.sendFile(path.join(__dirname+'/register.html'));
}));
app.get('/regcon', ((req, res) => {
	res.sendFile(path.join(__dirname+'/views/regcon.html'));
}));
app.post('/regcon/post', ((req, res) => {
	console.log('request accepted');
	console.log(req.body.email);
	console.log(req.body);
}));
*/
app.get('/test2', ((req, res) => {
	res.sendFile(path.join(__dirname+'/test.html'));
}));

app.listen(9876, () => {
	console.log('listening on 9876', "45.32.207.200");
});
