//This file will hold all the return objects or fields for each service

const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, 
    GraphQLID, GraphQLInt,GraphQLSchema, 
    GraphQLList,GraphQLNonNull,GraphQLInputObjectType  } = graphql;
const Category =  require("../models/category");
const Product = require('../models/product');
const Section =  require("../models/section");
const Bussiness =  require("../models/bussiness");


const RandomDieType = new GraphQLObjectType({
    name : 'randomDie',
  fields: () => ({
    
        numSides: { type: GraphQLInt },
        rollOnce: { type: GraphQLInt },
        roll:{
            type:new GraphQLList(GraphQLInt),
            args:{numRolls:{type: GraphQLInt }} 
        }
  })
})

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID  },
        name: { type: GraphQLString }, 
        pages: { type: GraphQLInt }
    })
});

const IndustryType = new GraphQLObjectType({
    name: 'Industry',
    fields: () => ({
        name: { type: GraphQLString }, 
        img:{type:GraphQLString},
        id: { type: GraphQLString }, 
        createdDate: { type: GraphQLString }


    })
});



const MeasureMentType =  new GraphQLInputObjectType({
    name:"Measurement",
    fields:() => ({
        name : {type:GraphQLString},
        sizename:{type:GraphQLString},
        size:{type:GraphQLString}
    })
})

const MeasureMentTypeOutPut =  new GraphQLObjectType({
    name:"MeasurementOutput",
    fields:() => ({
        name : {type:GraphQLString}, //40,42,44 or S,M,L
        sizename:{type:GraphQLString}, //shoulder,hip,length
        size:{type:GraphQLString}//shoulder=28,hip=24,length=22 (so each sizeset will have min 3 entries)
    })
})

const UserType = new GraphQLObjectType({
    name : "User",
    fields:() => ({
        name:{type:GraphQLString},
        id:{type:GraphQLString},
        createdDate:{type:GraphQLString},
        email:{type:GraphQLString},
        img:{type:GraphQLString},
        address:{type:GraphQLString},
        mobile:{type:GraphQLString},
        role:{type:GraphQLInt,defaultValue: 0},
        password:{type:GraphQLString}
     
    })
})

const ProductType = new GraphQLObjectType({
    name:"Product",
    fields:() => ({
        name:{type : GraphQLString},
        id:{ type: GraphQLString }, 
        createdDate: { type: GraphQLString },
        sectionId:{type:GraphQLString},
        img:{type:GraphQLString},
        price:{type:GraphQLInt},
        measurements:{
           type: new GraphQLList(MeasureMentTypeOutPut),
       
        }
    })
})

const OrderProductInputType = new GraphQLInputObjectType({
    name:"orderProductInput",
    fields:() => ({
        productId : { type: GraphQLString }, 
        measurements:{
            type: new GraphQLList(MeasureMentType),
        
        },
        createdFor:{ type: GraphQLString },
        price:{type : GraphQLInt},
        address:{ type: GraphQLString },
        quantity:{type:new GraphQLNonNull(GraphQLInt)}
    })
})


const Order = new GraphQLObjectType({
    name:"order",
    fields:() => ({
        productId : { type: GraphQLString }, 
        measurements:{
            type: new GraphQLList(MeasureMentTypeOutPut),
        
        },
        createdFor:{ type: GraphQLString },
        address:{ type: GraphQLString },
    })
})

const OrderType = new GraphQLObjectType({
    name:"orderType",
    fields:() => ({
        id:{ type: GraphQLString },
        productList:{
            type: GraphQLList(Order)
        },
        mobile:{ type: GraphQLString },
        createdDate:{ type: GraphQLString },
        createdBy:{ type: GraphQLString }
    })
})

const SectionType = new GraphQLObjectType({
    name :"Section",
    fields:() => ({
        name:{type : GraphQLString},
        id:{ type: GraphQLString }, 
        createdDate: { type: GraphQLString },
        categoryId:{ type: GraphQLString },
        productList:{
            type: new GraphQLList(ProductType),
            resolve(parent,args){
                return Product.find({sectionId:parent.id});
            }
        }
    })
})

const BussinessTypeOutput = new GraphQLObjectType({
    name: 'BussinessOutput',
    fields: () => ({
        name: { type: GraphQLString }, 
        id: { type: GraphQLString }, 
        createdDate: { type: GraphQLString },
        img:{ type: GraphQLString },
        location:{ type: GraphQLString },
        phoneNumber:{ type: new  GraphQLList(GraphQLString) },
        city:{type:GraphQLString}
    })
});

const CategoryType = new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        name: { type: GraphQLString }, 
        id: { type: GraphQLString }, 
        createdDate: { type: GraphQLString },
        bussinessId:{ type: GraphQLString },
        bussinessDetails:{
            type : BussinessTypeOutput,
            resolve(parent,args){
                return Bussiness.findById(parent.bussinessId)
            }
        },
        sectionList:{
            type: new GraphQLList(SectionType),
            resolve(parent,args){
                return Section.find({ categoryId: parent.id });
            }
        }
        
    })
});

//This is the businesstyple that gets returned for a business used in schema.js--Pravin
const BussinessType = new GraphQLObjectType({
    name: 'Bussiness',
    fields: () => ({
        name: { type: GraphQLString }, 
        id: { type: GraphQLString }, 
        createdDate: { type: GraphQLString },
        industryId:{ type: GraphQLString },
        categoryList:{
            type: new GraphQLList(CategoryType),
            resolve(parent,args){
                return Category.find({ bussinessId: parent.id });
            }
        },
        img:{ type: GraphQLString },
        location:{ type: GraphQLString },
        phoneNumber:{ type: new  GraphQLList(GraphQLString) },
        city:{type:GraphQLString}
    })
});

module.exports = {
    RandomDieType,BookType,IndustryType,BussinessType,CategoryType,OrderType,OrderProductInputType,SectionType,ProductType,UserType,MeasureMentType
}