import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrementAction = (event) => {
    setCount(count + 1);
  };

  const handleDecrementAction = (event) => {
    setCount(count - 1);
  };
  return (
    <div>
      <button
        aria-label="Increment Value"
        onClick={() => handleDecrementAction()}
      >
        -
      </button>

      <span>{count}</span>

      <button
        aria-label="Decrement Value"
        onClick={(event) => handleIncrementAction()}
      >
        +
      </button>
    </div>
  );
}
