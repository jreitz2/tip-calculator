import { useEffect, useState } from "react";

export default function Bill({
  setTipPerPerson,
  setTotalPerPerson,
  formData,
  setFormData,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    let updatedValue = value;
    if (value.includes(".")) {
      const parts = value.split(".");
      if (parts[1].length > 2) {
        updatedValue = `${parts[0]}.${parts[1].slice(0, 2)}`;
      }
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
    }));
  };

  const handleClick = (amount) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      tip: amount,
    }));
  };

  useEffect(() => {
    if (formData.bill !== "" && formData.people !== "" && formData.tip !== "") {
      let tempTipPerPerson = (formData.bill * formData.tip) / formData.people;
      setTipPerPerson(Number.parseFloat(tempTipPerPerson).toFixed(2));

      let tempTotalPerPerson =
        formData.bill / formData.people + tempTipPerPerson;
      setTotalPerPerson(Number.parseFloat(tempTotalPerPerson).toFixed(2));
    }
  }, [formData]);

  return (
    <div className="bill">
      <div className="bill-input">
        <label htmlFor="bill">Bill</label>
        <br />
        <input
          type="text"
          placeholder="0"
          name="bill"
          id="bill"
          value={formData.bill}
          onChange={handleChange}
        />
      </div>
      <div className="select-tip">
        <div htmlFor="tip">Select Tip %</div>
        <div className="tip-btns">
          <button onClick={() => handleClick(0.05)}>5%</button>
          <button onClick={() => handleClick(0.1)}>10%</button>
          <button onClick={() => handleClick(0.15)}>15%</button>
          <button onClick={() => handleClick(0.25)}>25%</button>
          <button onClick={() => handleClick(0.5)}>50%</button>
          <button>Custom</button>
        </div>
      </div>
      <div className="people-input">
        <label htmlFor="people">Number of People</label>
        <input
          type="number"
          placeholder="0"
          name="people"
          id="people"
          step="1"
          value={formData.people}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
