



import * as t from '../../ActionTypes';

const Team = (state = [ {"username": "Minta János","role": "Internal","picture": "avatar-default.png","id": 3}] , action) => {

	switch(action.type){

		case t.ADD_TEAM_MEMBER:
			let _new_array = state.concat(action.object)
			return _new_array ;
			break;

		case t.DELETE_TEAM_MEMBER:
			let key_array = state.map(function(e) { return e.id; })

			let delete_key = state.map(function(e) { return e.id; }).indexOf(action.id);
			let old_array  = state.slice(0,delete_key)

			let new_array = state.slice(delete_key + 1, state.length)
			let return_state = old_array.concat(new_array)
			return return_state

		default:
			return state
	}
}

export default Team