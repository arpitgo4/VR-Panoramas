import { combineReducers } from 'redux';

const rootReducer = (state = {}, action) => {

	switch(action.type){
		
		case 'FETCHING_IMAGES':
			return {
				...state,
				misc: {
					is_loading: true
				}
			};

		case 'SAVE_IMAGES':
			return {
				...state,
				gallery: [ ...action.images ]
			};

		case 'IMAGES_FETCHED':
			return {
				...state,
				misc: {
					is_loading: false
				}
			};

		default: return state;
	}
};

export default rootReducer;