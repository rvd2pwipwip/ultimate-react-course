import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleCountDecrease = () => {
    setCount((c) => c - step);
  };
  const handleCountIncrease = () => {
    setCount((c) => c + step);
  };
  const handleStepChange = (e) => {
    setStep(Number(e.target.value));
  };
  const handleCountChange = (e) => {
    e.target.value === "" ? setCount(0) : setCount(Number(e.target.value));
  };
  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={handleStepChange}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={handleCountDecrease}>-</button>
        <input type="number" value={count} onChange={handleCountChange} />
        <button onClick={handleCountIncrease}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count < 0
            ? `${Math.abs(count)} day${
                Math.abs(count) === 1 ? "" : "s"
              } ago was `
            : `In ${count} day${Math.abs(count) === 1 ? "" : "s"}, it will be `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
};
