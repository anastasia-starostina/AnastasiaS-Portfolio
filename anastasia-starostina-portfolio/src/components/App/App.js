import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../pages/Layout";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import NoPage from "../../pages/NoPage";
import AboutMe from "../../pages/AboutMe";
import HomePage from "../HomePage/HomePage";

function App() {
 return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  );
 }

export default App;
