import React from 'react'

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';

// Import React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/room/:id',
    element: <RoomDetails />
  }
])

const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App