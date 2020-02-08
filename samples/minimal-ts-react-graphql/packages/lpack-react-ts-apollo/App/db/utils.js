
/*
 * Copyright (c) 2020.  Ernst & Young
 *  @author : Nathan
 */

export const prepare        = ( o ) => {
	o._id = o._id.toString()
	return o
}