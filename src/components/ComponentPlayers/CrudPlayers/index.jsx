import styles from "./styles.module.scss";
import {
  InputPhone,
  InputName,
  InputHunch,
} from "../../ComponentsInputs/index";
import { useContext, useState } from "react";
import { PlayersContext } from "../../../contexts/PlayersProvider/context";
import { QuinaContext } from "../../../contexts/QuinaProvider/context";
import {
  deleteAllPlayersReducer,
  insertPlayerReducer,
  updatePlayerReducer,
  isAmountReducer,
  isMountReducer,
  isUpdateReducer,
  isNotUpdateReducer,
  deletePlayerReducer,
} from "../../../contexts/PlayersProvider/actions";

export const CrudPlayers = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [hunch, setHunch] = useState([]);
  const [obj, setObj] = useState({
    name: name,
    phone: phone,
    hunch: [],
    index: "",
  });

  const acertos = new Set();

  const playersContext = useContext(PlayersContext);
  const { playersState, playersDispatch } = playersContext;

  const quinaContext = useContext(QuinaContext);
  const { quinaState } = quinaContext;

  const clearDataPlayer = () => {
    setHunch([]);
    setName("");
    setPhone("");
    setObj({});
  };

  const insertPlayer = () => {
    let obj = {
      name: name,
      phone: phone,
      hunch: [],
    };

    if (hunch.length > 0) {
      obj.hunch = [hunch];
    }

    insertPlayerReducer(playersDispatch, obj);
    clearDataPlayer();
  };

  const showPlayer = (index) => {
    isUpdateReducer(playersDispatch);
    isMountReducer(playersDispatch);

    const ob = playersState.arraysPlayers[index];
    const { name, phone, hunch } = ob;

    setObj({ name: name, phone: phone, hunch: hunch, index: index });
    setPhone(phone);
    setName(name);
    setHunch(hunch.toString());
  };

  const updatePlayer = () => {
    let objeto = {
      name: name,
      phone: phone,
      hunch: [],
      index: obj.index,
    };

    if (hunch.length > 0) {
      objeto.hunch = [hunch];
    }

    updatePlayerReducer(playersDispatch, objeto);
    isAmountReducer(playersDispatch);
    isNotUpdateReducer(playersDispatch);
    clearDataPlayer();
  };

  const cancel = () => {
    isAmountReducer(playersDispatch);
    isNotUpdateReducer(playersDispatch);
    clearDataPlayer();
  };

  const remove = () => {
    deletePlayerReducer(playersDispatch, obj.index);
    clearDataPlayer();
  };

  const hits = (player) => {
    if (!!player.hunch[0]) {
      //acertos.splice(0,acertos.length)// remove todos os elementos do array
      acertos.clear()
      const NumbersOfPlayer = player.hunch[0].split("-");
      NumbersOfPlayer.map((item1) => {
        return quinaState.listAllNumbersDifferences.map((item2) => {
          return parseInt(item1) === parseInt(item2)
            ? acertos.add(item2)
            : false;
        });
      });
    }
    console.log(acertos);
  };

  return (
    <div className={styles.PlayersContainer}>
      <h3 className={styles.PlayersTitle}>Jogadores Participantes</h3>
      <table className={styles.TableContainer}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Números</th>
            <th>Acertos</th>
          </tr>
        </thead>
        <tbody>
          {playersState.arraysPlayers.map((player, index) => {
            return (
              <tr key={index} onClick={() => showPlayer(index)}>
                <td>{player.name}</td>
                <td>{player.phone}</td>
                <td>
                  {player.hunch.map((item, index) => {
                    return <span key={index}>{item}</span>;
                  })}
                </td>
                <td>
                  {hits(player)}
                  {acertos.size}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className={styles.Buttons}>
        <span onClick={() => deleteAllPlayersReducer(playersDispatch)}>
          Excluir Todos
        </span>
        <button onClick={() => isMountReducer(playersDispatch)}>
          Add Participante
        </button>
      </div>

      {playersState.isMount && (
        <div className={styles.PopUpPlayer}>
          <div className={styles.PopUpSubContainer}>
            {playersState.isUpdate ? (
              <h3 className={styles.PopUpTitle}>Alterar Jogador</h3>
            ) : (
              <h3 className={styles.PopUpTitle}>Adicionar Jogadores</h3>
            )}

            <InputName
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <InputPhone
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <InputHunch
              value={hunch}
              onChange={(event) => setHunch(event.target.value)}
            />
            <div className={styles.PopUpFooter}>
              {playersState.isUpdate ? (
                <>
                  <span onClick={remove}>Excluir</span>
                  <button onClick={cancel} className={styles.BtnCancel}>
                    Cancel
                  </button>
                  <button onClick={updatePlayer}>update</button>
                </>
              ) : (
                <>
                  <button onClick={cancel} className={styles.BtnCancel}>
                    Cancel
                  </button>
                  <button onClick={insertPlayer}>Insert</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
