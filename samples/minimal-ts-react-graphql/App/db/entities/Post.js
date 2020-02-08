/*
 * Copyright (c) 2020.  Ernst & Young
 *  @author : Nathan
 */

import {prepare}     from "App/db/utils";
import {collections} from "App/db";

const { PubSub } = require('apollo-server-express');

const pubsub = new PubSub();

let postList = [{ _id: "test", title: "test" }]

export const Post = {};

export const Query    = {
	       async posts() {
		       console.log("posts")
		       return postList;
	       }
       }
;
export const Mutation = {
	       async createPost( root, args, context, info ) {
		       console.log("createPost")
		       postList.push(args)
		       pubsub.publish(POST_ADDED, { postAdded: args });
		       return args;
	       }
       }
;

const POST_ADDED = 'POST_ADDED';

export const Subscription = {
	postAdded: {
		// Additional event labels can be passed to asyncIterator creation
		subscribe: () => pubsub.asyncIterator([POST_ADDED]),
	},
};