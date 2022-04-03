import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext"

const useUser = () => {
  const { user, loading, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogin = (user) => {
    setUser(user);
    navigate('/user/dashboard');
  }

  const onLogout = () => {
    setUser();
    navigate('/');
    localStorage.removeItem('TMA_AUTH_TOKEN');
  }

  return { user, loading, onLogin, onLogout }
}

export default useUser;
