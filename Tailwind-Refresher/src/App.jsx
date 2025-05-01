import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-2xl p-5 rounded-2xl  font-bold underline bg-pink-100">
        Hello
      </h1>

      <div className="p-10 m-10 border-2 rounded-lg bg-pink-100">
        <h1 className="text-center">Text 1</h1>
        <h1 className="text-right">Text 2</h1>
        <h1 className="text-left">Text 3</h1>
      </div>

      <div className="flex justify-center items-center bg-[url('./assets/c2df41c3-a17b-4b5b-9b7e-d622b4ea43a5.jpeg')] h-48 bg-center bg-cover rounded-2xl">
        <h1 className="text-center text-2xl p-5 rounded-2xl text-red-500 font-bold  ">
          Hey This is a background image practice
        </h1>
      </div>

      <div className="bg-linear-65 from-purple-300 to-pink-300 p-10 m-10 rounded-lg">
        <h1 className="text-3xl font-bold">Background Gradient </h1>
      </div>

      <div className="bg-amber-100 p-10 m-10 rounded-lg flex">
        <div className="flex-1">Box 1</div>
        <div className="flex-1">Box 2</div>
        <div className="flex-1">Box 3</div>
      </div>

      <div className="bg-amber-100 p-10 m-10 rounded-lg flex justify-around items-center">
        <div>Box1</div>
        <div>Box2</div>
        <div>Box3</div>
      </div>

      <div className="grid grid-cols-4 gap-4 p-10 m-10 rounded-lg bg-amber-300">
        <div className="border-2 col-span-2 rounded-lg border-amber-950 p-3 bg-amber-100">
          Box1
        </div>
        <div className="border-2 rounded-lg border-amber-950 p-3 bg-amber-100">
          Box2
        </div>
        <div className="border-2 rounded-lg border-amber-950 p-3 bg-amber-100">
          Box3
        </div>
        <div className="border-2 row-span-2 rounded-lg border-amber-950 p-3 bg-amber-100">
          Box4
        </div>
        <div className="border-2 rounded-lg border-amber-950 p-3 bg-amber-100">
          Box5
        </div>
        <div className="border-2 rounded-lg col-span-2 border-amber-950 p-3 bg-amber-100">
          Box6
        </div>
        <div className="border-2 rounded-lg border-amber-950 p-3 bg-amber-100">
          Box7
        </div>
        <div className="border-2 rounded-lg col-span-2 row-span-2 border-amber-950 p-3 bg-amber-100">
          Box8
        </div>
        <div className="border-2 rounded-lg border-amber-950 p-3 bg-amber-100">
          Box9
        </div>
        <div className="border-2 rounded-lg border-amber-950 p-3 bg-amber-100">
          Box10
        </div>
        <div className="border-2 rounded-lg border-amber-950 p-3 bg-amber-100">
          Box11
        </div>
        <div className="border-2 rounded-lg col-span-3 border-amber-950 p-3 bg-amber-100">
          Box12
        </div>
      </div>
    </>
  );
}

export default App;
