import api from '../../services/api'
import { UserContext } from './UserContext';
import { toast } from 'react-toastify';
import { React ,createContext, useContext } from 'react';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {

  const { setOpen, setLoading,} = useContext(UserContext)


  const createTech = async (data) => {
  try {
    const response = await api.post('/users/techs', data);
    toast.success('Tecnologia adicionada com sucesso')
    setOpen(false)
    setLoading(true);
    window.location.reload('/dashboard')
  } catch (error) {
    console.log(error.response.data.message);
    toast.error('Ops! algo deu errado')
  }
  }

  const editTech = async(data) => {
    try {
      setLoading(true);
      await api.put(`users/techs/${data.id}`, data);;
      toast.info("Tecnologia atualizada com sucesso!");

    } catch (error) {
      toast.error("Erro! Tente novamente!");
    } finally {
      setLoading(false);
    }
  }

  const deleteTech = async (id) => {
    
    try {
      setLoading(true);
      await api.delete(`users/techs/${id}`);
      toast.success("Tecnologia removida com sucesso!");

    } catch (error) {
      toast.error("Erro! Tente novamente!");
    } finally {
      setLoading(false);
    }
  }
    return(
        <TechContext.Provider value={{createTech, editTech, deleteTech}}>
            {children}
        </TechContext.Provider>
    )

}
