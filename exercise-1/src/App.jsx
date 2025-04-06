import React from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [ isRaining, setIsRaining ] = useState();

  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setIsRaining(false);
    console.log(isRaining);
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setIsRaining(true);
    console.log(isRaining);
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    return isRaining ? "Rain Time" : "Sunny Time";
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    return isRaining ? "rainy" : "sunny";
  }

  return (
    <main>
      <h1>TODO</h1>
      <button>Sunny Time</button>
      <button>Rain Time</button>
    </main>
  );
}

export default App;
