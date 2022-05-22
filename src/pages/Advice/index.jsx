import { useState } from "react";
import ShowAdvice from "../../components/ShowAdvice";

export default function Advice() {
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    setClicked(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, "2000");
  }

  return (
    <>
      <div className="flex items-center justify-center flex h-screen flex-col m-3">
        <div className="not-italic font-light dark:text-green-500">
          <h1 className="text-5xl text-center">
            click in the button to receive an advice
          </h1>
        </div>
        <button
          onClick={handleSubmit}
          disabled={loading ? loading : false}
          className="disabled:opacity-50 disabled:cursor-wait mt-6 bg-transparent hover:bg-green-400 text-green-700 font-semibold hover:text-black py-2 px-4 border border-green-500 hover:border-transparent rounded"
        >
          Receive Advice
        </button>
        <ShowAdvice clicked={clicked} setClicked={setClicked} />
      </div>
    </>
  );
}
