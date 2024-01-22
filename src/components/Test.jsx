import { useState } from "react";

let num = 5;

function Test() {
  const [state, setState] = useState(0);

  const handleInc = () => {
    state + num <= 15 ? setState((prev) => prev + num) : setState("Limit Reached");
  };
  const handleDec = () => {
    state - num >= 0 ? setState((prev) => prev - num) : setState("Limit Reached");
  };

  return (
    <>
      <h1>React Test</h1>
      <div className='input-group w-50 mx-auto'>
        <input type='text' className='form-control' value={state} />
        <button className='btn btn-outline-secondary ' onClick={handleInc}>
          Increase by {num}
        </button>
        <button className='btn btn-outline-secondary ' onClick={handleDec}>
          Decrease by {num}
        </button>
        <button className='btn btn-outline-secondary' onClick={() => setState(0)}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Test;
