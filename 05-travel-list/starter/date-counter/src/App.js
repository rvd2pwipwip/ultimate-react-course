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
  const handleStepDecrease = () => {
    setStep((s) => s - 1);
  };
  const handleStepIncrease = () => {
    setStep((s) => s + 1);
  };

  return (
    <div>
      <div>
        <button onClick={handleStepDecrease}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepIncrease}>+</button>
      </div>
      <div>
        <button onClick={handleCountDecrease}>-</button>
        <span>Count: {count}</span>
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
    </div>
  );
};
