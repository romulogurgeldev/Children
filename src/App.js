import "./App.css";

import CenteredCard from "./components/CenteredCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard>
          <h1>FEAR</h1>
          <h3>Iron Maiden</h3>
        </CenteredCard>
        <CenteredCard>
          <h1>OF THE</h1>
          <h3>Iron Maiden</h3>
        </CenteredCard>
        <CenteredCard>
          <h1>DARK</h1>
          <h3>Iron Maiden</h3>
        </CenteredCard>
      </header>
    </div>
  );
}

export default App;
