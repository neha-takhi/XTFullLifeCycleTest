/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SET_FILTER, REMOVE_FILTER } from './constants';

// The initial state of the App
export const initialState = {
  filter: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_FILTER:
        const isExist =
          draft.filter.findIndex(i => i.filter === action.data.filter) === -1;
        isExist && draft.filter.push(action.data);
        break;
      case REMOVE_FILTER:
        const data = draft.filter;
        const filteredData = data.filter(item => item !== action.data);
        draft.filter = filteredData;
        break;
    }
  });

export default homeReducer;
