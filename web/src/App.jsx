import { useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';

import { Dashboard } from './pages/dahsboard';
import { Patients } from './pages/patients';
import { Sessions } from './pages/sessions';
import { Auth } from './pages/auth';

export const App = () => {
  // Logic to set the user currently logged in
  const [user, setUser] = useState(true);

  return (
    <Page user={user}>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/patients" element={<Patients />} />
        <Route exact path="/sessions" element={<Sessions />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Page>
  );
};
