// App.jsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router'; // Import the router
import './App.css'

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
