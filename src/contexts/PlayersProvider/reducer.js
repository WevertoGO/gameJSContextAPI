import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.IS_MOUNT:
      return { ...state, isMount: true };
    case types.IS_AMOUNT:
      return { ...state, isMount: false };
    case types.IS_UPDATE:
      return { ...state, isUpdate: true };
    case types.IS_NOT_UPDATE:
      return { ...state, isUpdate: false };

    case types.INSERT_PLAYER:

      const getValue = action.payload
      getValue.hunch.sort((a,b) =>{
        return a-b
      })

      console.log(getValue.hunch)


      return {
        ...state,
        arraysPlayers: [...state.arraysPlayers, getValue],
        isMount: false,
      };

    case types.DELETE_PLAYER:
      return deletePlayer(state, action);

    case types.UPDATE_PLAYER:
      return update(state, action);

    case types.DELETE_ALL_PLAYERS:
      return { ...state, arraysPlayers: [] };

    default:
      return { ...state };
  }
};

const update = (state, action) => {
  const obj = action.payload;

  

  state.arraysPlayers[obj.index] = obj;

  

  return {
    ...state,
    isMount: false,
    isUpdate: false,
    arraysPlayers: [...state.arraysPlayers],
  };
};

const deletePlayer = (state, action) => {

  const i = action.payload
  
  let playersWithoutIndexSelect = state.arraysPlayers.filter((item, index)=>{
      return index!==i?item:false;
  })
  

  return {
    ...state,
    isMount: false,
    isUpdate: false,
    arraysPlayers: [...playersWithoutIndexSelect],
  };
};
