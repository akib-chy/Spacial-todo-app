import "./App.css";
import { Routes, Route } from "react-router-dom";
import CompletedTasks from "./Components/Completed-Tasks/CompletedTasks";
import Clander from "./Components/Clander/Clander";
import Header from "./Components/Share/Header/Header";
import Footer from "./Components/Share/Footer/Footer";
import ToDo from "./Components/To-Do/ToDo";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/complete-task" element={<CompletedTasks />} />
          <Route path="/calendar" element={<Clander />} />
          <Route path="*" element={<Clander />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
