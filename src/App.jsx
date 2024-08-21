import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/mainLayout";
import { Home } from "./pages/home";
import { Create } from "./pages/create";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
