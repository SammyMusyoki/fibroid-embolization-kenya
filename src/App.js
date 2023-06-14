import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomeLayout from "./Layouts/HomeLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import News from "./Pages/News";
import NewsLayout from "./Layouts/NewsLayout";
import Contact from "./Pages/Contact";
import FAQS from "./Pages/FAQS";
import Donations from "./Pages/Donations";
// import Projects from "./Pages/Projects";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} >
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="/" element={<NewsLayout />}>
        {/* <Route path=":id" element={<News />}/> */}
        <Route path=":id" element={<FAQS />}/>
        <Route path="contact-us" element={<Contact />}/>

      </Route>
      <Route path="make-a-donation" element={<Donations />}/>
      {/* <Route path="projects" element={<Projects />}/> */}
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
