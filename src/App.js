import { useState } from "react";
import Grid from "./components/Grid";
import GridMemo from "./components/GridOptimized";

import "./App.css";

function App() {
  const [count, setCount] = useState(4);

  return (
    <div className="App">
      <div className="count-select">
        count:
        <select onChange={(e) => setCount(e.target.value)}>
          <option value={4}>4</option>
          <option value={10}>10</option>
          <option value={100}>100</option>
        </select>
      </div>
      <Grid count={count} />
      <GridMemo count={count} />
    </div>
  );
}

export default App;
