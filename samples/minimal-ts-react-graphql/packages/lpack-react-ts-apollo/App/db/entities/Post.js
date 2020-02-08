/*
 * Copyright (c) 2020.  Ernst & Young
 *  @author : Nathan
 */

import {prepare}               from "App/db/utils";
import {collections}           from "App/db";

export const Post = {};

export const Query    = {
	       async posts() {
		       console.log("posts")
		       return [{ title: "test" }];
	       }
       }
;
export const Mutation = {
	       async createPost( root, args, context, info ) {
		       console.log("createPost")
		       return args;
	       }
       }
;

