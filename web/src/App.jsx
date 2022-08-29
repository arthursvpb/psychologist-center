import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard } from './pages/dahsboard';
import { Login } from './pages/login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/patients" element={<Dashboard />} />
      <Route path="/sessions" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
