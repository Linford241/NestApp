import React from 'react';
import { Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import NestsPage from './pages/NestsPage';
import NotFoundPage from './pages/NotFoundPage';
import NestPage from './pages/NestPage';
import AddNestPage from './pages/AddNestPage';
import EditNestPage from './pages/EditNestPage';
import './index.css'
import nests from './nests.json';

function App() {  


 

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
       <Route index element={<HomePage />} />
       <Route path='/nests' element={<NestsPage />} />
       <Route path='/addnests' element={<AddNestPage />} />
       <Route path='/edit-nest/:id' element={<EditNestPage  />} 
        />
        {nests.map((nestling) => (
       <Route path='/nests/:id' element={<NestPage key={nestling.id}
       nestling={ nestling }  />}  />
        )
        )}
       <Route path="*" element={<NotFoundPage />} />
    </Route>
      )
  );
  return <RouterProvider router={router} />
}

export default App
