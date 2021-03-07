
const graphql = require('graphql');  //Pravin -- Graphql lib
const Industry = require('../models/industry'); //Pravin -- Mongoos schemas
const Bussiness =  require("../models/bussiness");
const Category =  require("../models/category");
const Section =  require("../models/section");
const RandomDie = require( "../service/RandomDie");
const Product =  require("../models/product");
const Users = require("../models/users");

//Pravin -- What types Graphql returns
const {RandomDieType,BookType,IndustryType,BussinessType,CategoryType,UserType,SectionType,ProductType,MeasureMentType} =  require("../graphQlTypes/bussinessTypes")
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

// const BookType = new GraphQLObjectType({
//     name: 'Book',
//     fields: () => ({
//         id: { type: GraphQLID  },
//         name: { type: GraphQLString }, 
//         pages: { type: GraphQLInt }
//     })
// });

// const IndustryType = new GraphQLObjectType({
//     name: 'Industry',
//     fields: () => ({
//         id: { type: GraphQLID  },
//         created: { type: GraphQLString }
//     })
// });

// const RandomDieType = new GraphQLObjectType({
//     name : 'randonDie',
//   fields: () => ({
    
//         numSides: { type: GraphQLInt },
//         rollOnce: { type: GraphQLInt },
//         roll:{
//             type:new GraphQLList(GraphQLInt),
//             args:{numRolls:{type: GraphQLInt }} 
//         }
//   })
// })
/*
{
  getDie(number:6){
    numSides,
    rollOnce,
    roll(numRolls:4)
  }
}
*/

//RootQuery describe how users can use the graph and grab data.
//E.g Root query to get all authors, get all books, get a particular book 
//or get a particular author.

//Pravin -- RootQuery DDL

const AdminQuery  = new GraphQLObjectType({
        name:"adminQuery",
        fields:{
            addIndustry:{
                    type:IndustryType,
                    args:{name: { type: new GraphQLNonNull(GraphQLString)}},
                    resolve(parent,args){
                        try{
                            let industry = new Industry({
                                name:args.name
                            })
                            return industry.save()
                        }catch(error){
                            console.log("Error",error)
                    }
                    
                }    
            },
            addBussiness:{
                type:BussinessType, //Which object its going to be return type
                args:{
                    name:{ type: new GraphQLNonNull(GraphQLString)},
                    industryId:{ type: new GraphQLNonNull(GraphQLString)},
                    img:{type:new GraphQLNonNull(GraphQLString)},
                    location:{type:new GraphQLNonNull(GraphQLString)},
                    phoneNumber:{type:new GraphQLList(GraphQLInt)},
                    address1:{type:new GraphQLNonNull(GraphQLString)},
                    address2:{type:new GraphQLNonNull(GraphQLString)},
                    city:{type:new GraphQLNonNull(GraphQLString)},
                    state:{type:new GraphQLNonNull(GraphQLString)},
                    country:{type:new GraphQLNonNull(GraphQLString)},
                    zipCode:{type:new GraphQLNonNull(GraphQLString)}
                },
                resolve(parent,args){
                    let bussiness = new Bussiness({...args})
                    return bussiness.save()
                }
            },
            addCategory:{
                type:CategoryType,
                args:{
                    name:{ type: new GraphQLNonNull(GraphQLString)},
                    bussinessId:{ type: new GraphQLNonNull(GraphQLString)}
                },
                resolve(parent,args){
                    let category = new Category({
                        name:args.name,
                        bussinessId:args.bussinessId
                    })
                    return category.save()
                }
            },addSection:{
                type:SectionType,
                args:{
                    name:{type:new GraphQLNonNull(GraphQLString)},
                    categoryId: {type:new GraphQLNonNull(GraphQLString)},
                },
                resolve(parent,args){
                    let section = new Section({
                        name:args.name,
                        categoryId:args.categoryId,
                    })
                    return section.save();
                }
            },
            getProductAllProducts:{
                type:new GraphQLList(ProductType), //PRAVIN : GRAPHQLIST means array here it returns array of ProductType
               //  args:{sectionid:{type:new GraphQLNonNull(GraphQLString)}}, //Here pass only sectionID
                resolve(parents,args){
                        return Product.find();
                }
            },
            getAllUsers:{
                type:new GraphQLList(UserType), //PRAVIN : GRAPHQLIST means array here it returns array of ProductType
               //  args:{sectionid:{type:new GraphQLNonNull(GraphQLString)}}, //Here pass only sectionID
                resolve(parents,args){
                        return  User.find();
                }
            },
            addProduct:{
                type:ProductType,
                args:{
                    name:{type:new GraphQLNonNull(GraphQLString)},
                    sectionId: {type:new GraphQLNonNull(GraphQLString)},
                    measurements: {type:new GraphQLList(MeasureMentType)},
                    img:{type:new GraphQLNonNull(GraphQLString)},
                },
                resolve(parents,args){
                    ///console.log("measurements",measurements)
                    let product = new Product ({
                        name:args.name,
                        sectionId:args.sectionId,
                        measurements:args.measurements,
                        img:args.img
                    })

                    return product.save()
                }
            },userSignup:{
                    type:UserType,
                    args:{
                     name:{type:new GraphQLNonNull(GraphQLString)},
                     mobile:{type : GraphQLString},
                     role : {type:GraphQLInt},
                     address:{type : GraphQLString},
                     img:{type : GraphQLString},
                     password:{type :new GraphQLNonNull(GraphQLString)},
                     email:{type:new GraphQLNonNull(GraphQLString)},
                    },
                    resolve(parents,args,root,ast){
                        // console.log("Parent",parents);
                        // console.log("ARGS",args);
                        console.log("ROOT",root);
                       //  console.log("AST",ast)
                        let users = new Users({
                            name:args.name,
                            mobile:args.mobile,
                            role:args.role?args.role:0,
                            img:args.img,
                            address:args.address,
                            email:args.email,
                            password:args.password
                        })
                        console.log("USERS",users)
                        return users.save()
                    }
            }
        }
    })
 
//Creating a new GraphQL Schema, with options query which defines query 
//we will allow users to use when they are making request.
module.exports = new GraphQLSchema({
    query: AdminQuery
    //mutation:MutationQuery
});
// view rawschema.js hosted with ❤ by GitHub00000
