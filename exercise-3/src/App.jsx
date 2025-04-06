import React from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [result, setResult] = useState("");

  function onA(event) {
    setNumA(event.target.value);
  }

  function onB(event) {
    setNumB(event.target.value);
  }

  function computeSum() {
    if (isNaN(numA) || isNaN(numB) || numA === "" || numB === "") {
      setResult("Error: Enter valid numbers!");
    } else {
      setResult(parseFloat(numA) + parseFloat(numB));
    }
  }
  /* You will need some function to handle the key pressed and button events */

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input
         value={result}
         disabled
         style={{ color: isNaN(result) ? "red" : "black" }}
       />
      <button onClick={computeSum}>Compute</button>
    </main>
  );
}

export default App;
