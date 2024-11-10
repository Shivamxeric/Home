import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import User from "./Components/User/User.jsx";
import Github from "./Components/Github/Github.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Sign from "./Components/Sign/Sign.jsx";

// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout/>,
//   children: [
//     {

//       path: "",
//       element: <Home />
//     },{
//       path: "about",
//       element: <About />
//     }
//     ,{
//       path: "Contact",
//       element: <Contact />
//     }

//     ,{
//       path: "user/:userid",
//       element: <User />
//     }
//   ]
// }])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      
      <Route path="Github" element={<Github />} />
      <Route path="Projects" element={<Projects/>} />
      <Route path="Sign" element={<Sign/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
