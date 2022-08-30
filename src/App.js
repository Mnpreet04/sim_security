import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Steps from "./components/Steps";
import TrainingTypes from "./components/TrainingTypes";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar/>
      <TrainingTypes/>
      <Steps/>
    </div>
  );
}

export default App;
