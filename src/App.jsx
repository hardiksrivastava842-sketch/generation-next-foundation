import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-blue-600 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">
          🎉 Tailwind CSS is Working!
        </h1>
      </div>
    </>
  );
}

export default App;
