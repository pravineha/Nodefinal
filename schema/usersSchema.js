
const graphql = require('graphql');  //Pravin -- Graphql lib

//Pravin -- What types Graphql returns
const {OrderType,OrderProductInputType} =  require("../graphQlTypes/bussinessTypes");
const OrdersSchema = require("../models/order");
const { GraphQLObjectType, GraphQLString, 
    GraphQLID, GraphQLInt,GraphQLSchema, 
    GraphQLList,GraphQLNonNull ,GraphQLObject } = graphql;

//Schema defines data on the Graph like object types(book type), relation between 
//these object types and descibes how it can reach into the graph to interact with 
//the data to retrieve or mutate the data   

var fakeBookDatabase = [
    { name:"Book 1", pages:432 , id:1},
    { name: "Book 2", pages: 32, id: 2},
    { name: "Book 3", pages: 532, id: 3 }
]



const UserQuery  = new GraphQLObjectType({
        name:"userQuery",
        fields:{
           createOrder:{
              type:OrderType,
              args:{
                  productList: {type:new GraphQLList(OrderProductInputType)},
                  mobile:{ type: GraphQLString },
              },resolve(parents,args,root){
                 console.log("order",args.productList)
                let order = new OrdersSchema({
                    productList:[...args.productList],
                    createdBy:root.user,
                    mobile:args.mobile
                })
                return order.save();
              }
           }
        }
    })
 
//Creating a new GraphQL Schema, with options query which defines query 
//we will allow users to use when they are making request.
module.exports = new GraphQLSchema({
    query: UserQuery
    //mutation:MutationQuery
});
// view rawschema.js hosted with ❤ by GitHub00000
