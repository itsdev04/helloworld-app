import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 gap-4">
      <h1 className="text-4xl font-bold text-blue-600">Hello World!</h1>
      <p className="text-gray-600">Vite + React + Tailwind is working</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Clicks: {count}
      </button>
    </div>
  );
}

export default App;
