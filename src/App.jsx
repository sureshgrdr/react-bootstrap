import { useState } from "react";
import NavComp from "./components/NavComp";
import { HeroComp } from "./components/HeroComp";
import Test from "./components/Test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div data-bs-theme='lite'>
        <NavComp />
        <HeroComp />
        <Test />
      </div>
    </>
  );
}

export default App;
