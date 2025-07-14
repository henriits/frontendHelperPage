import Sidebar from "./components/Sidebar";
import ReactSetupSection from "./components/ReactSetupSection";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <ReactSetupSection />
        {/* Add more sections here */}
      </main>
    </div>
  );
}

export default App;
