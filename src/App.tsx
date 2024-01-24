import React from 'react';
import RealtimeUpdatePage from './containers/RealtimeUpdatePage';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';

const router = createBrowserRouter([{ path: '*', Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route path="/" element={<RealtimeUpdatePage />} />
      <Route path="/crypto" element={<RealtimeUpdatePage />} />
    </Routes>
  );
}
