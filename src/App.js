import "./App.css";
import Footer from "./components/footer";
import NavBAr from "./components/navbar";
import Profile from "./components/profile";
import Tools from "./components/tools";

function App() {
  return (
    <div className="flex flex-col">
      <NavBAr />
      <Profile />
      <Tools />
      <Footer />
    </div>
  );
}

export default App;
