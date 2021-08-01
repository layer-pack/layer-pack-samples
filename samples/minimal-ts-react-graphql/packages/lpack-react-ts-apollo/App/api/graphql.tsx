/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
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