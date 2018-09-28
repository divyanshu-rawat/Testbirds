

import * as t from '../ActionTypes';

export const add_team_member = (object) => {
  	return {type : t.ADD_TEAM_MEMBER, object}
};

export const delete_team_member = (id) => {
  	return {type : t.DELETE_TEAM_MEMBER, id}
};