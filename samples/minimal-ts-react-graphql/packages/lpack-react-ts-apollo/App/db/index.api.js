/*
 * Copyright (c) 2020.  Ernst & Young
 *  @author : Nathan
 */

import resolvers from "App/db/entities/**/(*).js"
import schemas   from "App/db/entities/**/(*).graphql"
import scalars   from "App/db/scalars/**/(*).js"

import {mergeResolvers, mergeTypeDefs} from '@graphql-toolkit/schema-merging';
import {GraphQLScalarType}             from 'graphql'

const graphql     = {
	schema:
		{
			typeDefs : mergeTypeDefs(
				[
					...Object.keys(scalars).map(typeId => "scalar " + typeId + '\n'),
					...Object.keys(schemas).map(typeId => schemas[typeId]),
					`
				      schema {
				        query: Query
				        mutation: Mutation
				      }
			`
				], {
					//useSchemaDefinition  : schemaDefinition,
					//forceSchemaDefinition: schemaDefinition,
					throwOnConflict    : true,
					commentDescriptions: true,
					reverseDirectives  : true,
					//...options,
				}),
			resolvers: mergeResolvers(
				[
					...Object.keys(scalars).map(typeId => ({ [typeId]: new GraphQLScalarType(scalars[typeId]) })),
					...Object.keys(resolvers).map(typeId => resolvers[typeId]),
					{}
				])
		}
};
export {graphql};