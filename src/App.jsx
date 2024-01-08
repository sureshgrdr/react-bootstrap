import { useState } from "react";
import NavComp from "./components/NavComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavComp />
    </>
  );
}

export default App;
