import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components";
import { Home, About, Projects, Contact } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
