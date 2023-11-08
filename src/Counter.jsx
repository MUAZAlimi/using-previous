import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [values, setvalues] = useState({
    firstName: "",
    lastName: ""
  })
  const add = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };
  const subtract = () => {
    setCount(prev => prev - 1);
    setCount(prev => prev - 1);
  };
  const updateArray = (newVal) => {
        setvalues({...values, last: "Dave", })
  }
  return (
    <section className="Counter">
      <h1>{count}</h1>
      <div className="calcBtn">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
      </div>
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  );
}

export default Counter;
