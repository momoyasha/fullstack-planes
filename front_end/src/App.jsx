import "./App.css";
import LogoutButton from "./components/LogoutButton";
import Map from "./components/map";

function App() {
  return (
    <>
      <div className="app">
        <LogoutButton />
        <Map />
      </div>
    </>
  );
}

export default App;
