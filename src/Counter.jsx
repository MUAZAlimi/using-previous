import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    const add = () => {
     setCount(count + 1)
     setCount(count + 1)
    }
    const subtract = () => {
        setCount(count - 1)
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
  )
}

export default Counter
