import { useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';

import { Dashboard } from './pages/dahsboard';
import { Login } from './pages/login';
import { Patients } from './pages/patients';
import { Sessions } from './pages/sessions';
import { Signup } from './pages/signup';

export const App = () => {
  // Logic to set the user currently logged in
  const [user, setUser] = useState(false);

  return (
    <Page user={user}>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/patients" element={<Patients />} />
        <Route exact path="/sessions" element={<Sessions />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Page>
  );
};
