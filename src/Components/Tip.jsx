export default function Tip({
  tipPerPerson,
  totalPerPerson,
  setFormData,
  setTipPerPerson,
  setTotalPerPerson,
}) {
  const handleClick = () => {
    setFormData({
      bill: "",
      people: "",
      tip: "",
    });
    setTipPerPerson("0.00");
    setTotalPerPerson("0.00");
  };

  return (
    <div className="tip">
      <div>
        <div className="tip-amount">
          <div>
            <div>Tip Amount</div>
            <div className="subtext">/ person</div>
          </div>
          <div className="tip-number">${tipPerPerson}</div>
        </div>
        <div className="tip-amount">
          <div>
            <div>Total</div>
            <div className="subtext">/ person</div>
          </div>
          <div className="tip-number">${totalPerPerson}</div>
        </div>
      </div>
      <button onClick={handleClick}>RESET</button>
    </div>
  );
}
