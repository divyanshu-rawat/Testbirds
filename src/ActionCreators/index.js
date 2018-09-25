

import * as t from '../ActionTypes';

export const save_json_data = (JSON_DATA) => {
  	return {Type : t.SAVE_DATA, Json_Data: JSON_DATA}
};

export const add_team_member = (Name) => {
  	return {Type : t.ADD_TEAM_MEMBER, Name: 'divyanshu'}
};