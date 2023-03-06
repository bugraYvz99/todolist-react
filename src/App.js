import "./App.css";
import { Todos } from "./components/Todos";

function App() {
  return (
    <div className="bg-[url(img/background.png)] bg-no-repeat bg-cover h-screen">
      <Todos />
    </div>
  );
}

export default App;
