import "./App.css";
import GenericComponent from "./GenericComponent";

function App() {
  return (
    <div className="App">
      <GenericComponent>
        Hola!!
        <h1>Titulo</h1>
        <p>Parrafo</p>
        <ul>
          <li>"1.- Lunes"</li>
          <li>"1.- Martes"</li>
          <li>"1.- Miercoles"</li>
        </ul>
        {"Texto generico creativo c:"}
        {() => {
          return <div>Funcion que regresa un componente</div>;
        }}
      </GenericComponent>
    </div>
  );
}

export default App;
