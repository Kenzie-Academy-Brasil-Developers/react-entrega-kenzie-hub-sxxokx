import api from '../../services/api'
import { UserContext } from './UserContext';
import { toast } from 'react-toastify';
import { React ,createContext, useContext } from 'react';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {

  const { setOpen, setLoading,} = useContext(UserContext)


  // const createTech = async (data) => {
  // //console.log(data)
  // try {
  //   const response = await api.post('/users/techs', data);
  //   //console.log(response)
  //   toast.success('Tecnologia adicionada com sucesso')
  //   setOpen(false)
  //   setLoading(true);
  //   window.location.reload('/dashboard')
  // } catch (error) {
  //   console.log(error.response.data.message);
  //   toast.error('Ops! algo deu errado')
  // }
  // }

  //   return(
  //       <TechContext.Provider value={{createTech}}>
  //           {children}
  //       </TechContext.Provider>
  //   )
}
