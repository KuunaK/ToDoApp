import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="h-screen flex flex-col bg-stone-900 text-stone-100">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-stone-900 via-stone-800 opacity-50" />
        <div className="absolute inset-0 backdrop-blur-md" />
      </div>

      <Header />
      <Hero />
    </div>
  );
};

export default App;
