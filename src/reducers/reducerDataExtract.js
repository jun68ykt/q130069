// reducers/reducerDataExtract.js
import assign from 'object-assign';

import * as actionTypes from '../constants/actionTypes';

const initalState = {
  isFetching: false,
  items: []
};

const reducerDataExtract = (state = [initalState], action) => {
  switch (action.type) {
    case actionTypes.GET_TRNSALES_REQUEST:
      return assign({}, state, {
        isFetching: true,
        items: []
      });

    case actionTypes.GET_TRNSALES_SUCCESS:
      console.log(action.items);
      return assign({}, state, {
        isFetching: false,
        items: action.items
      });
    case actionTypes.GET_TRNSALES_FAILURE:
      return assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
};

export default reducerDataExtract;
