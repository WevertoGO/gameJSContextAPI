import * as types from "./types";


export const isMountReducer = (dispatch) =>{
    dispatch({type:types.IS_MOUNT})
}

export const isUpdateReducer = (dispatch) =>{
    dispatch({type:types.IS_UPDATE})
}

export const isNotUpdateReducer = (dispatch) =>{
    dispatch({type:types.IS_NOT_UPDATE})
}

export const isAmountReducer = (dispatch) =>{
    dispatch({type:types.IS_AMOUNT})
}





export const insertPlayerReducer = (dispatch, payload) =>{
    dispatch({type:types.INSERT_PLAYER, payload:payload})
}

export const deletePlayerReducer = (dispatch, payload) =>{
    dispatch({type:types.DELETE_PLAYER, payload:payload})
}

export const deleteAllPlayersReducer = (dispatch) =>{
    dispatch({type:types.DELETE_ALL_PLAYERS})
}

export const updatePlayerReducer = (dispatch, payload) =>{
    dispatch({type:types.UPDATE_PLAYER, payload:payload})
}