export default function Advice() {
  return (
    <>
      <div className="flex items-center justify-center flex h-screen flex-col">
        <div className="text-xl not-italic hover:italic font-light dark:text-green-500">
          click the button to receive an advice
        </div>
        <button class="mt-6 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-black py-2 px-4 border border-green-500 hover:border-transparent rounded">
          Receive Advice
        </button>
      </div>
    </>
  );
}
