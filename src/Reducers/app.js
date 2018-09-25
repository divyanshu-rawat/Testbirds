

import * as t from '../ActionTypes';
import data from '../Data_set/data.json'

const app = (state = data , action) => {

	switch(action.type){

		case t.ADD_TEAM_MEMBER:
			return state
			break;

		default:
			return state
	}
}

export default app