import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import DefaultLayout from './layout/DefaultLayout';
import { Toaster } from 'react-hot-toast';
import { getCookie } from 'typescript-cookie';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  let isLogin: any = getCookie('isLogin') || false;
  console.log(isLogin);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster />
      {!isLogin ? (
        <Routes>
          <Route
            index
            element={
              <>
                <PageTitle title="Signin | Lanang 6B RPL" />
                <SignIn />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <h1>Not Found</h1>
              </>
            }
          />
        </Routes>
      ) : (
        <DefaultLayout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <PageTitle title="Dashboard Lanang 6B RPL" />
                  <Dashboard />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <h1>Not Found</h1>
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <PageTitle title="Profile | Lanang 6B RPL" />
                  <Profile />
                </>
              }
            />
            <Route
              path="/settings"
              element={
                <>
                  <PageTitle title="Settings | Lanang 6B RPL" />
                  <Settings />
                </>
              }
            />
          </Routes>
        </DefaultLayout>
      )}
    </>
  );
}

export default App;
