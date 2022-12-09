import React from "react";
import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const handleAdd = () => {
    setNumber(number + 1);
  };

  const handleMin = () => {
    if (number !== 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-evenly bg-blue-100 h-[500px] rounded-b-md">
      <div className="flex flex-col items-center gap-5">
        <p className="text-lg font-semibold">Counter Angka</p>
        <h1 className="text-9xl">{number}</h1>
      </div>
      <div className="flex gap-10">
        <button
          onClick={() => handleAdd()}
          className="bg-blue-600 text-white py-2 px-4 rounded-md text-xl"
        >
          Tambah
        </button>
        <button
          onClick={() => handleMin()}
          className="bg-red-600 text-white py-2 px-4 rounded-md text-xl"
        >
          Kurang
        </button>
      </div>
    </div>
  );
}

export default Counter;
