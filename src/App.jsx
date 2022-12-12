import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { SingUpPage } from './pages/singUp';
import { DashboardPage } from './pages/dashboard';
import { useState } from 'react';
import { api } from './api/api';
import { StyledApp } from './style';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function App() {

  const navigate = useNavigate()
  const [user, setUser] =useState(null)

  async function userLogin  (formData, setLoading) {
    try {
      setLoading(true)
      const response = await api.post('/sessions', formData)
      localStorage.setItem('@TOKEN', response.data.token)
      setUser(response.data.user)
      toast.success('Login com Sucesso')
      navigate('/dashboard')
    } catch (error) {
      console.error(error)
      toast.error('E-mail ou Senha invalido')
    } finally{
      setLoading(false)
    }   
  }

  function userLogOff(){
   localStorage.removeItem('@TOKEN')
   setUser(null)
   navigate('/')
 }
 
  return (
    <StyledApp>
            <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            {/* Same as */}
            <ToastContainer />
      <Routes>
        <Route path='/' element={<LoginPage  setUser={setUser} userLogin={userLogin} />}/>
        <Route path='/register' element={<SingUpPage />} />
        <Route path='/dashboard' element={<DashboardPage user={user} setUser={setUser} userLogOff={userLogOff} />}/>
      </Routes>
    </StyledApp>
  );
}

export default App;
