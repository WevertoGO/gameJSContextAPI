import styles from "./styles.module.scss";
import { useContext, useState } from "react";
import { QuinaContext } from "../../../contexts/QuinaProvider/context";
import { isAmountReducer } from "../../../contexts/QuinaProvider/actions";
import { isMountReducer } from "../../../contexts/QuinaProvider/actions";
import { isUpdateReducer } from "../../../contexts/QuinaProvider/actions";
import { insertReducer } from "../../../contexts/QuinaProvider/actions";
import { updateReducer } from "../../../contexts/QuinaProvider/actions";
import { deleteReducer } from "../../../contexts/QuinaProvider/actions";
import { ButtonQuina } from "../ButtonQuina";
import InputMask from "react-input-mask";

export const CrudQuina = () => {
  //get in Context
  const quinaContext = useContext(QuinaContext);
  const { quinaState, quinaDispatch } = quinaContext;

  //init value placeholder only
  const placeholder_00 = "00";

  //init useState
  const [objNumbersUseState, setObjNumbersUseState] = useState({
    lote1: "",
    lote2: "",
    lote3: "",
    lote4: "",
    lote5: "",
    numConcurso: "",
    index: "",
  });

  const clearDataUseState = () => {
    setObjNumbersUseState({
      lote1: "",
      lote2: "",
      lote3: "",
      lote4: "",
      lote5: "",
      numConcurso: "",
      index: "",
    });
  };

  const cancel = () => {
    isAmountReducer(quinaDispatch);
    clearDataUseState();
  };

  const insertNumbers = () => {
    const arrNumbersUseState = Object.values(objNumbersUseState);

    if (arrNumbersUseState.length >= 7) {
      //agora eu retiro o INDEX para salvar no estado da lista
      arrNumbersUseState.pop();
    }

    clearDataUseState();
    insertReducer(quinaDispatch, arrNumbersUseState);
  };

  const updateNumbers = (event) => {
    const arrNumbersUseState = Object.values(objNumbersUseState);
    updateReducer(quinaDispatch, arrNumbersUseState);
    clearDataUseState();
  };

  const deleteNumbers = (event) => {
    const arrNumbersUseState = Object.values(objNumbersUseState);
    deleteReducer(quinaDispatch, arrNumbersUseState);
    clearDataUseState();
  };

  const showNumbers = (index) => {
    const arrClicked = quinaState.listaJogosQuina[index];
    isMountReducer(quinaDispatch);
    isUpdateReducer(quinaDispatch);
    return setObjNumbersUseState({
      lote1: arrClicked[0],
      lote2: arrClicked[1],
      lote3: arrClicked[2],
      lote4: arrClicked[3],
      lote5: arrClicked[4],
      numConcurso: arrClicked[5],
      index,
    });
  };

  const setValueInputs = (event) => {
    const { value, name } = event.target;

    if (name === "lote1") {
      setObjNumbersUseState({ ...objNumbersUseState, lote1: value });
    }
    if (name === "lote2") {
      setObjNumbersUseState({ ...objNumbersUseState, lote2: value });
    }
    if (name === "lote3") {
      setObjNumbersUseState({ ...objNumbersUseState, lote3: value });
    }
    if (name === "lote4") {
      setObjNumbersUseState({ ...objNumbersUseState, lote4: value });
    }
    if (name === "lote5") {
      setObjNumbersUseState({ ...objNumbersUseState, lote5: value });
    }
    if (name === "numConcurso") {
      setObjNumbersUseState({ ...objNumbersUseState, numConcurso: value });
    }
  };

  return (
    <div className={styles.QuinaContainer}>
      <h2 className={styles.QuinaTitle}>Lista de Quinas Sorteadas</h2>

      <div className={styles.QuinaSubContainer}>
        {!quinaState.listaJogosQuina.length ? (
          <div className={styles.EmptyContainer}>
            <h3>Não há jogos da QUINA</h3>
            <img
              src="./svg/info.svg"
              alt="informação de que a lista está vazia"
            />
          </div>
        ) : (
          quinaState.listaJogosQuina.map((j, index) => {
            return (
              <li onClick={() => showNumbers(index)} key={index}>
                {j.map((i, index) => {
                  return <span key={index}> {i} </span>;
                })}
              </li>
            );
          })
        )}
      </div>

      <ButtonQuina />

      {quinaState.isMount && (
        <div className={styles.PopUpContainer}>
          <div className={styles.PopUpSubContainer}>
            {quinaState.update ? (
              <h2 className={styles.PopUpTitle}>Altere o Jogo Selecionado</h2>
            ) : (
              <h2 className={styles.PopUpTitle}>Adicionar Jogo da Quina</h2>
            )}
            <InputMask
              name="lote1"
              onChange={setValueInputs}
              value={objNumbersUseState.lote1}
              placeholder={placeholder_00}
              autoComplete="off"
              mask="99"
            />
            <InputMask
              name="lote2"
              onChange={setValueInputs}
              value={objNumbersUseState.lote2}
              placeholder={placeholder_00}
              autoComplete="off"
              mask="99"
            />
            <InputMask
              name="lote3"
              onChange={setValueInputs}
              value={objNumbersUseState.lote3}
              placeholder={placeholder_00}
              autoComplete="off"
              mask="99"
            />
            <InputMask
              name="lote4"
              onChange={setValueInputs}
              value={objNumbersUseState.lote4}
              placeholder={placeholder_00}
              autoComplete="off"
              mask="99"
            />
            <InputMask
              name="lote5"
              onChange={setValueInputs}
              value={objNumbersUseState.lote5}
              placeholder={placeholder_00}
              autoComplete="off"
              mask="99"
            />
            <InputMask
              name="numConcurso"
              value={objNumbersUseState.numConcurso}
              onChange={setValueInputs}
              className={styles.LastInput}
              placeholder="nº concurso"
              autoComplete="off"
              mask="9999"
            />

            <div className={styles.PopUpFooter}>
              {quinaState.update ? (
                <>
                  <button className={styles.BtnCancel} onClick={cancel}>
                    Cancel
                  </button>
                  <button onClick={updateNumbers}>Update</button>
                  <span onClick={deleteNumbers}>Excluir</span>
                </>
              ) : (
                <>
                  <div></div>
                  <button className={styles.BtnCancel} onClick={cancel}>
                    Cancel
                  </button>
                  <button onClick={insertNumbers}>Insert</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
