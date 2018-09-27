



import * as t from '../ActionTypes';

const Team = (state = [] , action) => {
	switch(action.type){

		case t.ADD_TEAM_MEMBER:
			let _new_array = state.concat(action.object)
			return _new_array ;
			break;

		default:
			return state
	}
}

export default Team