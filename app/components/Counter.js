"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCounter] = useState(0);

  return <button onClick={() => setCounter((c) => c + 1)}>{count}</button>;
}
