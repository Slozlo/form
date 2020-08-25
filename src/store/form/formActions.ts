import {
  FETCH_FORM_VALUES,
  FETCH_FORM_VALUES_SUCCESS,
  FETCH_FORM_VALUES_FAILED,
  SEND_FORM_VALUES,
  SEND_FORM_VALUES_FAILED,
  SEND_FORM_VALUES_SUCCESS
} from "./formConstants";
import { BASE_URL } from "@config/index";
import { Dispatch } from "redux";

export const fetchValues = () => (dispatch: Dispatch) => {
  dispatch({
    type: FETCH_FORM_VALUES
  });
  fetch(`${BASE_URL}values`)
    .then(r => r.json())
    .then(result => {
      setTimeout(() => {
        dispatch({
          type: FETCH_FORM_VALUES_SUCCESS,
          payload: result
        });
      }, 500);
    });
};

export const sendValues = (values: any) => (dispatch: Dispatch) => {
  dispatch({
    type: SEND_FORM_VALUES
  });
  fetch(`${BASE_URL}send`, {
    method: "put"
  })
    .then(r => r.json())
    .then(result => {
      if (result.success) {
        setTimeout(() => {
          dispatch({
            type: SEND_FORM_VALUES_SUCCESS,
            payload: values
          });
        }, 500);
      } else {
        dispatch({
          type: SEND_FORM_VALUES_FAILED
        });
      }
    });
};
