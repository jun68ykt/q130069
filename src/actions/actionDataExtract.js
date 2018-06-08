// actions/actionDataExtract.js
import axios from 'axios';

import * as actionTypes from '../constants/actionTypes';

const getTrnSalesRequest = () => {
  return {
    type: actionTypes.GET_TRNSALES_REQUEST
  };
};

const getTrnSalesSuccess = (json) => {
  return {
    type: actionTypes.GET_TRNSALES_SUCCESS,
    items: json
  };
};

const getTrnSalesFailure = (error) => {
  return {
    type: actionTypes.GET_TRNSALES_FAILURE,
    error
  };
};

export const getTrnSales = () => {
  return (dispatch) => {
    dispatch(getTrnSalesRequest())
    // return axios.get(`http://localhost:8080/det/trnsales`)
    return axios.get(`http://localhost:3000/det/trnsales.json`)
      .then(res =>
        dispatch(getTrnSalesSuccess(res.data))
      ).catch(err =>
        dispatch(getTrnSalesFailure(err))
      )
  };
};
