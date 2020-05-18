/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;
const selectFilter = state => state.filter;
const makeSelectFilter = () =>
  createSelector(
    selectHome,
    selectFilter,
    filterState => filterState.filter,
  );

export { selectHome, makeSelectFilter };
