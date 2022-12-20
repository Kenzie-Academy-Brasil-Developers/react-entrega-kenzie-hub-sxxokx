import './App.css';
import { Route, Routes,} from 'react-router-dom';
import { LoginPage } from './pages/login';
import { SingUpPage } from './pages/singUp';
import { DashboardPage } from './pages/dashboard';
import { StyledApp } from './style';
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoutes } from './components/ProtectRouts';
import { UserContext } from './UserContext/UserContext';
import { useContext } from 'react';



function App() {
  const {loading} = useContext(UserContext)
  return (
      <StyledApp>
        {loading? (
          <h1>Carregando....</h1>
        ) : (
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/register' element={<SingUpPage />} />       
          <Route path='/dashboard' element={ <ProtectedRoutes />}>          
              <Route index element={ <DashboardPage />}/>            
          </Route>
        </Routes>
        )}
      </StyledApp>  
  );
}

export default App;
