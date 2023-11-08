import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
  return (
    <section className="Counter">
      <h1>{count}</h1>
      <div className="calcBtn">
        <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
        <button onClick={() => setCount(prevState => prevState - 1)}>-</button>
      </div>
        <div>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
    </section>
  )
}

export default Counter
