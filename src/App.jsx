import ittc from "./images/ittc.png";

function App() {
  return (
    <div className="bg-black h-screen">
      <div
        className="max-w-screen- flex flex-wrap items-center justify-between mx-auto p-1 rounded-b-md "
        style={{
          backgroundImage:
            "linear-gradient(45deg, #7bed9f, #FFD700, #5A4FCF, #f1f2f6, #FF3503)",
        }}
      >
        <img src={ittc} alt="" className="w-40 xl:w-52" />
      </div>
    </div>
  );
}

export default App;
