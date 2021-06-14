import * as types from "./types";

////// -----------BOLEANOS------------////////////////
export const isMountReducer = (dispatch) => {
  ///
  dispatch({ type: types.IS_MOUNT }); ///
}; ///
///
export const isAmountReducer = (dispatch) => {
  ///
  dispatch({ type: types.IS_AMOUNT }); ///
}; ///
///
export const isUpdateReducer = (dispatch) => {
  ///
  dispatch({ type: types.IS_UPDATE }); ///
}; ///
///
export const isNotUpdateReducer = (dispatch) => {
  ///
  dispatch({ type: types.IS_NOT_UPDATE }); ///
}; ///
//////////////////////////////////////////////////////

export const insertReducer = (dispatch, payload) => {
  dispatch({ type: types.INSERT_QUINA, payload: payload });
};

export const updateReducer = (dispatch, payload) => {
  dispatch({ type: types.UPDATE_QUINA, payload: payload });
};

export const deleteReducer = (dispatch, payload) => {
  dispatch({ type: types.DELETE_QUINA, payload: payload });
};

export const deleteAllReducer = (dispatch) => {
  dispatch({ type: types.DELETE_ALL_QUINA});
};