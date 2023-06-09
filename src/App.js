import "./App.css";
import Header from "./components/header/header";

function App() {
  const pessoa = {
    nome: "Thiago Pereira",
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
          <Header nome={pessoa.nome} />
        </div>
      </header>
    </div>
  );
}

export default App;
