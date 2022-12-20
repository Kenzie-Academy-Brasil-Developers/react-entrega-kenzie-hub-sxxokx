import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../api/api";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    
    const [open,setOpen] = useState(false)
    const [loading, setLoading] = useState(false);
    

    const [user, setUser] =useState(null)
    const navigate = useNavigate()
    const [renderTec, setRenderTec] = useState([]);

    useEffect(() => {
      
      async function autoLogin() {
        const token = localStorage.getItem("@TOKEN");
        if(token){
          try {
            api.defaults.headers.authorization = `Bearer ${token}`
            const response = await api.get('/profile');
              setUser(response.data)
              //console.log(response.data, user)
              setLoading(true);
              navigate('/dashboard')
          } catch (error) {
            console.log(error)
          } finally{
            setLoading(false)
        } 
      };
    } 
    autoLogin()
}, [loading])

  async function userLogin  (formData, setLoading) {
    try {
      setLoading(true)
      const response = await api.post('/sessions', formData)
      api.defaults.headers.authorization = `Bearer ${response.data.token}`
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
  
  const userRegister =  async(data) => {
    console.log(data)
    try {
      const response = await api.post('/users', data)
      //console.log(response.data)
      toast.success('Conta criada com sucesso')
      navigate('/')
    } catch (error) {
      //console.error(error)
      toast.error('Esse e-mail já existe')
    }  
  }

  function userLogOff(){
   localStorage.removeItem('@TOKEN')
   setUser(null)
   navigate('/')

 }

 
 const [todos, setTodos] = useState([]);

 function saveNewTodo(task) {
     if (!task) return;

     const newTodo = {
         id: todos.length + 1,
         task: task,
         completed: false
     };

     setTodos(oldTodos => [...oldTodos, newTodo]);
 }

 function deleteTodo(id) {
     const filteredTodos = todos.filter(todo => todo.id !== id);

     setTodos(filteredTodos);
 }

 function completeTask(id) {
     const filteredTodos = todos.map(todo => (
         todo.id === id ? { ...todo, completed: !todo.completed } : todo
     ));

     setTodos(filteredTodos);
 }

 const createTech = async (data) => {
  //console.log(data)

  try {
    const response = await api.post('/users/techs', data);
    //console.log(response)
    toast.success('Tecnologia adicionada com sucesso')
    setOpen(false)
    setLoading(true);
    // setTimeout(() => {
    //   window.location.replace("/dashboard")}, 1500)
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
        <UserContext.Provider value={{user, userLogin, userRegister, userLogOff, todos, saveNewTodo, deleteTodo, completeTask, loading, open, setOpen, createTech, deleteTech, editTech}}>
            {children}
        </UserContext.Provider>
    )
}