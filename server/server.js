let config = require('../webpack.config');
let express = require('express');
let path = require('path');
let webpack = require('webpack');
let mongoose = require('mongoose');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');


let app = express();
let port = 8888;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log();
});

let tododb = mongoose.Schema({
    todo: String,
    done: Boolean,
    time: String
});


let tododbM = mongoose.model('tododbM', tododb);


let getAll = function (res) {
    return tododbM.find().then(function (data) {
        res.json({data: data});
    }).catch(function (err, res) {
        res.json({success: 0, err: err});
        
    });
};

let addTodo = function (res, time, todo) {
    let newTodo = new tododbM({time: time, todo: todo, done: false});
    newTodo.save().then(function () {
        res.json({success: 1});
    }).catch(function (err, res) {
        res.json({success: 0, err: err});
        
    })
};

let deleteTodo = function (res, time) {
    tododbM.findOneAndRemove({time: time}).then(function () {
        res.json({success: 1})
    }).catch(
        function (err, res) {
            res.json({success: 0, err: err});
        }
    )
    
};

let completeTodo = function (res, time) {
    tododbM.findOneAndUpdate({time: time}, {done: 1}).then(function () {
        res.json({success: 1});
    }).catch(
        function (err, res) {
            res.json({success: 0, err: err});
        }
    );
};


let compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./client/'));

app.get("/", function (req, res) {
    res.render(path.resolve('client/index.html'));
});

app.get("/css", function (req, res, next) {
    res.sendFile(path.resolve('client/css/'));
});

app.get("/todo/:action", function (req, res) {
    let action = req.params.action;
    let query = req.query;
    console.log(`${action}+${query.time}+${query.todo}`);
    switch (action) {
        case "getAll":
            getAll(res);
            break;
        case "add":
            addTodo(res, query.time, query.todo);
            break;
        case "delete":
            deleteTodo(res, query.time);
            break;
        case "complete":
            completeTodo(res, query.time);
            break;
        default:
            return 0;
    }
    
});

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.log("Express server listening on port", port);
    }
});



