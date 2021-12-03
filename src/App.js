import React from "react";
import Timer from "./components/Timer";

const App = () => {
  return (
    <div>
      <Timer
        time={10000}
        step={1000}
        onTick={(time) => console.log("Залишилось часу: " + time)}
        autostart={true}
      />
    </div>
  );
};

export default App;