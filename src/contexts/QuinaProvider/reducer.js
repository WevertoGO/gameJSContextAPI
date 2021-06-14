import * as types from "./types";
import firebase from "./../../util/db";

// const BANCO_DE_DADOS = firebase.database().ref("game");

export const reducer = (state, action) => {
  switch (action.type) {
    case types.IS_MOUNT:
      return { ...state, isMount: true };

    case types.IS_AMOUNT:
      return { ...state, isMount: false };

    case types.IS_UPDATE:
      return { ...state, update: true };

    case types.IS_NOT_UPDATE:
      return { ...state, update: false };

    case types.INSERT_QUINA:
      return insertQuina(state, action);

    case types.UPDATE_QUINA:
      return updateQuina(state, action);

    case types.DELETE_QUINA:
      return deleteQuina(state, action);

    case types.DELETE_ALL_QUINA:
      return deleteAllQuina(state);

    default:
      return { ...state };
  }
};

function insertQuina(state, action) {
  const v1 = [];
  const v2 = [];

  state.listaJogosQuina.map((arr) => {
    return arr.map((item, index) => {
      return index !== 5 ? v1.push(item) : false;
    });
  });

  action.payload.map((item, index) => {
    return index !== 5 ? v2.push(item) : false;
  });

  const allNumbers = [...v1, ...v2];

  const numbersNotRepeatSet = new Set();

  allNumbers.map((item) => {
    return item !== "" ? numbersNotRepeatSet.add(item) : false;
  });

  const numbersNotRepeatArr = Array.from(numbersNotRepeatSet);
  numbersNotRepeatArr.sort(function (a, b) {
    return a - b;
  });



  

  // BANCO_DE_DADOS.child("listaJogosQuina")
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.exists() ? snapshot.val() : console.log("não existe");
  //   });
    
  //   console.log(listaDB)
  return {
    ...state,
    listaJogosQuina: [action.payload, ...state.listaJogosQuina],
    isMount: false,
    listAllNumbersDifferences: [...numbersNotRepeatArr],
  };
}

function updateQuina(state, action) {
  //coloco o array que veio do metodo update dentro da const ARR
  const arr = action.payload;

  //pego o INDEX que veio junto com o array e que está na posição 6
  //e, por meio desse INDEX, localizo o array na listaJogosQuina.
  const i = arr[6];

  //agora eu retiro o INDEX para salvar no estado da lista
  if (arr.length >= 7) {
    arr.pop();
  }

  //após isso, substituio o valor do array, atualizo, dou update
  state.listaJogosQuina[i] = arr;

  const allNumbers = [];

  state.listaJogosQuina.map((array) => {
    return array.map((item, index) => {
      return index !== 5 && item !== "" ? allNumbers.push(item) : false;
    });
  });

  const numbersNotRepeatSet = new Set();

  allNumbers.filter((item) => {
    return numbersNotRepeatSet.add(item);
  });

  const numbersNotRepeatArray = Array.from(numbersNotRepeatSet);

  numbersNotRepeatArray.sort(function (a, b) {
    return a - b;
  });

  return {
    ...state,
    listaJogosQuina: [...state.listaJogosQuina],
    listAllNumbersDifferences: [...numbersNotRepeatArray],
    isMount: false,
    update: false,
  };
}

function deleteQuina(state, action) {
  const arr = action.payload;
  const i = arr[6];

  let arrWithoutExcluded = state.listaJogosQuina.filter((item, index) => {
    return index !== i ? item : false;
  });

  const numbersNotRepeatSet = new Set();

  arrWithoutExcluded.map((arr) => {
    return arr.map((item, index) => {
      return index !== 5 ? numbersNotRepeatSet.add(item) : false;
    });
  });

  const numbersNotRepeatArray = Array.from(numbersNotRepeatSet);
  numbersNotRepeatArray.sort((a, b) => {
    return a - b;
  });

  return {
    ...state,
    listaJogosQuina: [...arrWithoutExcluded],
    listAllNumbersDifferences: [...numbersNotRepeatArray],
    update: false,
    isMount: false,
  };
}

function deleteAllQuina(state) {
  return { ...state, listaJogosQuina: [], listAllNumbersDifferences: [] };
}
