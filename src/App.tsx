import { BrowserRouter, Route,Routes } from "react-router-dom";
import Bucket from "./screens/bucket/bucket";
import ResortDetails from "./screens/resort-details/resortDetails";
import ResortsList from "./screens/resorts-list/resortList";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<ResortsList />} />
      <Route path="/store"  element={<ResortDetails />}/>
      <Route path="/bucket"element={<Bucket />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
