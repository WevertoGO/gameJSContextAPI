import styles from "./styles.module.scss";

import { QuinaContext } from "../../../contexts/QuinaProvider/context";
import { useContext } from "react";

const ListAllNumberDifferences = () => {
  const quinaContext = useContext(QuinaContext);
  const { quinaState } = quinaContext;

  // const lightNumbers = (item, event) => {
  //   quinaState.listaJogosQuina.map((arr) => {
  //     return arr.map((itemArr) => {
  //       return itemArr === item ? console.log(itemArr) : false;
  //     });
  //   });
  // };

  return (
    <div className={styles.ListAllNumbersDifferencesContainer}>
      <h3>Todos os números sorteados sem repetição</h3>
      {quinaState.listAllNumbersDifferences.length > 0 ? (
        <div className={styles.NumerosContainer}>
          {quinaState.listAllNumbersDifferences.map((item, index) => {
            return (
              <h3
                key={index}
                // onMouseOver={(event) => lightNumbers(item, event)}
                className={styles.Numeros}
              >
                {item}
              </h3>
            );
          })}
        </div>
      ) : (
        <div className={styles.EmptyContainer}>
          <h3>Não há números sorteados</h3>
          <img
            src="./svg/info.svg"
            alt="informação de que a lista está vazia"
          />
        </div>
      )}
    </div>
  );
};

export default ListAllNumberDifferences;
