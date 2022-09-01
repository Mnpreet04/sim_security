import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Steps from "./components/Steps";
import TrainingTypes from "./components/TrainingTypes";
import Training from "./pages/Training";
import Licensing from "./pages/Licensing";
import Certification from "./pages/Certification";
import SecurityInformation from "./components/SecurityInformation";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <NavBar/>
      <TrainingTypes/>
      <Steps/>
      <Services/> */}
      <Routes>
        <Route
          path=""
          element={
            <Fragment>
              <Header />
              <NavBar />
              <TrainingTypes />
              <Steps />
              <Services />
              <SecurityInformation/>
            </Fragment>
          }
        />
        {/* <Route path=""  element={<NavBar/>} />
      <Route path=""  element={<TrainingTypes/>} />
      <Route path=""  element={<Steps/>} />
      <Route path=""  element={<Services/>} /> */}
        <Route path="/training" element={<Training />} />
        <Route path="/licensing" element={<Licensing/>}></Route>
        <Route path="/certification" element={<Certification/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
