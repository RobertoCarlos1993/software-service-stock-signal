import React from "react";
import NavBar from "./components/navBar";
import ChargeCustomer from "./components/chargeCustomer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ChargeCustomer>
        <button>Comprar</button>
      </ChargeCustomer>
    </div>
  );
}

export default App;
