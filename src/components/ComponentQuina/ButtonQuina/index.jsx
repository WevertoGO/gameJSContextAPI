import styles from "./styles.module.scss";

import { useContext } from "react";
import {
  deleteAllReducer,
  isMountReducer,
  isNotUpdateReducer,
} from "../../../contexts/QuinaProvider/actions";
import { QuinaContext } from "../../../contexts/QuinaProvider/context";

export const ButtonQuina = () => {
  const quinaContext = useContext(QuinaContext);
  const { quinaDispatch } = quinaContext;

  const showPoup = () => {
    isMountReducer(quinaDispatch);
    isNotUpdateReducer(quinaDispatch);
  };

  // button só abre o popUp para addQuina
  return (
    <div className={styles.Buttons}>
      <span  onClick={ () => deleteAllReducer(quinaDispatch)}>
        Excluir Tudo
      </span>
      <button onClick={showPoup}>
        Add Quina
      </button>
    </div>
  );
};
