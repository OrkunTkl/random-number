import { useState } from "react";

function App() {
  const [minNum, setMinNum] = useState(0);
  const [maxNum, setMaxNum] = useState(10);
  const [randomNum, setRandomNum] = useState(0);

  const giveRandomNumber = () => {
    setRandomNum(Math.floor(Math.random() * (maxNum - minNum + 1) + minNum));
  };

  return (
    <div className="">
      <div className="container bg-orange-300 mx-auto border-[10px] border-black rounded-xl grid place-content-center mt-[100px] relative w-[900px] h-[600px] ">
        <div className=" bg-red-200 text-5xl border-[5px] py-2 px-2 rounded-lg border-black absolute mx-[200px] my-[50px]">
          <p>
            Random Number : <span>{randomNum}</span>
          </p>
        </div>
        <div className="flex justify-between mt-[150px]">
          <div className="mx-[50px] ">
            <p className="text-2xl">Min:</p>
            <input
              className="text-3xl bg-red-200"
              type="number"
              value={minNum}
              onChange={(e) => setMinNum(+e.target.value)}
            />
          </div>
          <div className="mx-[70px]">
            <p className="text-2xl">Max:</p>
            <input
              className="text-3xl bg-red-200"
              type="number"
              value={maxNum}
              onChange={(e) => setMaxNum(+e.target.value)}
            />
          </div>
        </div>

        <div className="text-3xl border border-black mx-40 px-[145px] py-3 mt-[150px] bg-red-200">
          <button onClick={giveRandomNumber}>Get Random Number</button>
        </div>
      </div>
    </div>
  );
}

export default App;
