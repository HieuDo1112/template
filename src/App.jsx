import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            React + Vite + Tailwind CSS
          </h1>
          <p className="text-gray-700">
            Dự án của bạn đã được cài đặt thành công!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
