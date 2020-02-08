/*
 * Copyright (c) 2020.  Ernst & Young
 *  @author : Nathan
 */

//import {MongoClient, ObjectId} from 'mongodb'
//import {graphqlExpress, graphiqlExpress} from 'graphql-server-express'
//import {makeExecutableSchema}            from 'graphql-tools'
import {graphql} from 'App/db';

//const { ApolloServer, gql } = require('apollo-server');

//const graphqlHTTP     = require('express-graphql');
//const { buildSchema } = require('graphql');
const {ApolloServer, gql, graphiqlExpress} = require('apollo-server-express');

let schema, entities = {};

export const name = "Apollo GraphQL service";
export const priorityLevel = 100;
export const service = (app) => {

        const server = new ApolloServer({
            ...graphql.schema,
            playground: {
                settings: {
                    'editor.theme': 'light',
                },
                tabs: [
                    {
                        endpoint: "/graphql"
                    },
                ],
            }
        });

        server.applyMiddleware({app, path: '/graphql'});

    }
;