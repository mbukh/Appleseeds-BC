import "./App.css";
import { Input } from "./components/Input.component";
import { RecordList } from "./components/RecordList.component";

import { read, update, remove, create } from "./services/localStorageAPI";

function App() {
  update([]);
  create({
    name: "test1",
  });

  console.log(read());
  return <div className="container"></div>;
}

export default App;
