import { useState } from "react";
import BillInput from "./BillInput";
import PercentageSelector from "./PercentageSelector";

function App() {
  return (
    <>
      <TipCalculator></TipCalculator>
    </>
  );
}

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(5);
  const [tip2, setTip2] = useState(5);

  const totalTip = (bill * ((tip1 + tip2) / 2)) / 100;

  return (
    <div>
      <BillInput onSetBill={setBill} bill={bill} />
      <PercentageSelector tip={tip1} onSetTip={setTip1}>
        How did you like the service?
      </PercentageSelector>
      <PercentageSelector tip={tip2} onSetTip={setTip2}>
        How did your friend like the service?
      </PercentageSelector>
      {bill && (
        <>
          <Output bill={bill} totalTip={totalTip} />
          <Reset setBill={setBill} setTip1={setTip1} setTip2={setTip2} />
        </>
      )}
    </div>
  );
};

const Output = ({ bill, totalTip }) => {
  return (
    <h3>
      You pay {bill + totalTip} (${bill} + ${totalTip} tip)
    </h3>
  );
};

const Reset = ({ setBill, setTip1, setTip2 }) => {
  const handleClick = () => {
    setBill("");
    setTip1(5);
    setTip2(5);
  };
  return <button onClick={handleClick}>Reset</button>;
};

export default App;
