/******************************************************************************
 *  Execution       : default node          : cmd> index.js
 *                      
 * 
 *  Purpose         : Create APIs
 * 
 *  @description    
 * 
 *  @overview       : GraphQL APIs
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 01-april-2019
 *
 ******************************************************************************/
/*
required files
*/
const express = require('express')
const cors = require('cors')
const graphqlExpress = require('express-graphql')
const userSchema = require('./graphql/types/index').userSchema;
const mongoose = require('./config/mongoose')
const db = mongoose();
const app = express()
const bodyParser = require('body-parser')
const jwt = require('express-jwt')
var expressValidator = require('express-validator')

/*
 bodyparser
*/
app.use(bodyParser.json())
app.use(expressValidator());
/*
we simply apply the auth middleware to that endpoint.
*/
// const authMiddleware = jwt({
//     secret: 'somesecret'
//   })

//   app.use(authMiddleware)

app.use('/graphql', cors(), graphqlExpress({
    schema: userSchema,
    rootValue: global,
    graphiql: true
}))
 var port = 4000
app.use('*', cors());
app.listen(port, () => {
    console.log("This GraphQL API running at port :",port);
});



