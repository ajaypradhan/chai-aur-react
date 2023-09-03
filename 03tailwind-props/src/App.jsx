import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 mb-4 p-4 tex rounded-xl">Tailwind test</h1>

      <Card username="Ajay Pradhan" btnText="Visit Me→" />
      <Card username="Hitesh Chaudhary" btnText="My Profile→" />
    </>
  );
}

export default App;
