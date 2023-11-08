import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState({
    first: "",
    last: ""
  })
  const add = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };
  const subtract = () => {
    setCount(prev => prev - 1);
    setCount(prev => prev - 1);
  };
  const updateArray = () => {
        setValues({...values, last: "Dave", })
        setValues(prev => ({...prev, last: "Muaz"}));
  }
  console.log(values)
  updateArray()
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
