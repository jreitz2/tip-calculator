import { useState } from "react";
import "./App.css";
import Bill from "./Components/Bill";
import Tip from "./Components/Tip";

function App() {
  const [tipPerPerson, setTipPerPerson] = useState("0.00");
  const [totalPerPerson, setTotalPerPerson] = useState("0.00");
  const [formData, setFormData] = useState({
    bill: "",
    people: "",
    tip: "",
  });
  return (
    <>
      <h1>
        <span>SPLI</span>
        <span>TTER</span>
      </h1>
      <div className="container">
        <Bill
          setTipPerPerson={setTipPerPerson}
          setTotalPerPerson={setTotalPerPerson}
          tipPerPerson={tipPerPerson}
          formData={formData}
          setFormData={setFormData}
        />
        <Tip
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
          setFormData={setFormData}
          setTipPerPerson={setTipPerPerson}
          setTotalPerPerson={setTotalPerPerson}
        />
      </div>
    </>
  );
}

export default App;
