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