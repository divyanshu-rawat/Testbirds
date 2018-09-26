



import * as t from '../ActionTypes';

const Team = (state = [] , action) => {

	console.log('ss',action)
	switch(action.type){

		case t.ADD_TEAM_MEMBER:
			let _new_array = state.concat([action.object])
			console.log('_new-array',_new_array)
			return _new_array ;
			break;

		default:
			return state
	}
}

export default Team