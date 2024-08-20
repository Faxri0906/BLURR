import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;