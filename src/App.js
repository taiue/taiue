import Rodape from "./Componentes/Rodape/Rodape";
import Televisao from "./Componentes/Televisao";
import "./index.css";

function App() {
  return (
    <>
      <div className="App">
        <main className="content">
        <Televisao/>
        </main>
        <Rodape />
      </div>
    </>
  );
}

export default App;
