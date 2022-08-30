import { Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';

import { Dashboard } from './pages/dahsboard';
import { Login } from './pages/login';
import { Patients } from './pages/patients';
import { Sessions } from './pages/sessions';

export const App = () => {
  return (
    <Page>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/patients" element={<Patients />} />
        <Route exact path="/sessions" element={<Sessions />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Page>
  );
};
