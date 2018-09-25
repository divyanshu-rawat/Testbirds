

import * as t from '../ActionTypes';

const intialState = {
	intial_data: []
}

const app = (state = intialState, action) => {

	switch(action.type){
		case t.SAVE_DATA:
		    return []

		default:
			return []
	}
}

export default app