import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Forms from "./Pages/Forms";
import Feedback from "./Pages/Feedback";
import NotFound from "./Pages/NotFound";
import FormViewer from "./Pages/FormViewer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="forms" element={<Forms />} />
          <Route path="forms/:slug" element={<FormViewer />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
