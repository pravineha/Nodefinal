var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var rfs = require('rotating-file-stream') // version 2.x
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const {graphqlHTTP} = require('express-graphql'); //Pravin -- Node GraphQL Library
const generalSchema = require('./schema/generalSchema');//Pravin -- Importing the schema
const adminSchema = require('./schema/adminSchema');//Pravin -- Importing the schema
const userSchema = require('./schema/usersSchema');
const mongoose = require('mongoose');
const auth =  require('./auth');
const verifyToken =  require("./auth/verifyToken");
// const MongoClient  = require('mongoose').MongoClient;
var app = express();
const cors = require('cors');
//Mongo DB where we connect
const mongoDBURI = 'mongodb+srv://sam:y1oOZo03nNkk3m1R@cluster0.nzptr.mongodb.net/Ecom?retryWrites=true&w=majority';
const adminMiddleware = (req, res, next) => {
  if(req.user && req.user.role == 44){
    next();
  }else{
      return res.status(404).send('Permission denied'); 
  } 
     
}

app.use(cors());
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
// setup the logger
app.use(logger('combined', { stream: accessLogStream }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth',auth);

app.use('/users', usersRouter);

//Graphql Node server path
// app.use(loggingMiddleware);
app.use('/general', graphqlHTTP({      //Pravin -- This can be SelvitrendsQL
  //directing express-graphql to use this schema to map out the graph 
  //Pravin -- This is where we have written all our functions
  schema:generalSchema,
  //directing express-graphql to use graphiql when goto '/graphql' address in the browser
  //which provides an interface to make GraphQl queries
  graphiql:true
}));


// app.use('/admin', graphqlHTTP({      //Pravin -- This can be SelvitrendsQL
//   //directing express-graphql to use this schema to map out the graph 
//   //Pravin -- This is where we have written all our functions
//   schema:adminSchema,
//   // context:{user:"swami"},
//   //directing express-graphql to use graphiql when goto '/graphql' address in the browser
//   //which provides an interface to make GraphQl queries
//   graphiql:true
// }));

app.use(verifyToken);
app.use('/generalUser',(req,res) => {
 return graphqlHTTP({      //Pravin -- This can be SelvitrendsQL
    //directing express-graphql to use this schema to map out the graph 
    //Pravin -- This is where we have written all our functions
    schema:userSchema,
    context:{user:req.user.id},
    //directing express-graphql to use graphiql when goto '/graphql' address in the browser
    //which provides an interface to make GraphQl queries
    graphiql:true
  })(req, res);
});

app.use(adminMiddleware);
app.use('/admin',(req,res) => {
  return graphqlHTTP({      //Pravin -- This can be SelvitrendsQL
     //directing express-graphql to use this schema to map out the graph 
     //Pravin -- This is where we have written all our functions
     schema:adminSchema,
     context:{user:req.user},
     //directing express-graphql to use graphiql when goto '/graphql' address in the browser
     //which provides an interface to make GraphQl queries
     graphiql:true
   })(req, res);
 });


 // Create order comes here  
 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect('mongodb+srv://sam:y1oOZo03nNkk3m1R@cluster0.nzptr.mongodb.net/Ecom?rettryWrites=true&w=majority')

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// var promise = mongoose.connect('mongodb+srv://cluster0.nzptr.mongodb.net/Ecom?rettryWrites=true', {
//   useNewUrlParser:true,
//   useUnifiedTopology: true,
//   auth:{
//     user:'sam',
//     password:'y1oOZo03nNkk3m1R'
//   },
//   w:"majority"
//   /* other options */
// }).catch((error) => {
//   console.log("ERROR IN DB CONNECTION",error)
// });

// promise.then(function(db) {
//    console.log("DB",db.Mongoose);
// })




// MongoClient.connect(mongoDBURI, function(err, db) {
//   // Now you can use the database in the db variable
//   console.log("DB",db)
// })



module.exports = app;
