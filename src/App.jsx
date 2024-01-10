import { useState } from "react";
import NavComp from "./components/NavComp";
import { HeroComp } from "./components/HeroComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div data-bs-theme='lite'>
        <NavComp />
        <HeroComp />
      </div>
    </>
  );
}

export default App;
