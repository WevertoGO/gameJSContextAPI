import styles from "./App.module.scss";
import { CrudPlayers } from "./components/ComponentPlayers/CrudPlayers";
import { CrudQuina } from "./components/ComponentQuina/CrudQuina";

import { QuinaProvider } from "./contexts/QuinaProvider/index";
import { PlayersProvider } from "./contexts/PlayersProvider/index";
import ListAllNumberDifferences from "./components/ComponenteListAllNumberDifferences/ListAllNumberDifferences";

function App() {
  return (
    <PlayersProvider>
      <QuinaProvider>
        <div className={styles.AppContainer}>
          <CrudQuina />
          <ListAllNumberDifferences />
          <CrudPlayers />
        </div>
      </QuinaProvider>
    </PlayersProvider>
  );
}

export default App;
