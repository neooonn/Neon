import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './layouts/Navbar.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Layout from './layouts/Layout.jsx'
import Achievements from './pages/Achievements.jsx'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
        { path: "achievements", element: <Achievements /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
