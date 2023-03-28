import React, { useState } from "react";
import "./App.css";
import Form from "./form";

type CounterProps = {
  title: string;
};

const Counter = ({ title }: CounterProps) => {
  const [count, setCount] = useState(0);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    console.log(`${e.clientX}, ${e.clientY}`);
    setCount(count + 1);
  };
  return (
    <div>
      <h1>
        {title}
        {count}
      </h1>
      <button onClick={handleClick}>+1</button>
      <a href="/#" onClick={handleClick}>
        link
      </a>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Counter title="count: " />
      <Form />
    </div>
  );
};

export default App;
