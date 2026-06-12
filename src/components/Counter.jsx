import { ButtonTitle } from "./Button";
import { useState } from "react";

export default function Counter() {
  // penggunaan useState
  const [count, setCount] = useState(0);
  return (
    <div className="bg-red-200">
      <h1>{count}</h1>
      <nav className="flex flex-row gap-2">
        {/* Component dari props */}
        <ButtonTitle title={"+"} onClick={() => setCount((prev) => prev + 1)} />
        {/* Component dari props */}
        <ButtonTitle
          title={"-"}
          // Event onClick
          onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
        />
        {/* Component dari props */}
        <ButtonTitle title={"Reset"} onClick={() => setCount(0)} />
      </nav>
    </div>
  );
}
