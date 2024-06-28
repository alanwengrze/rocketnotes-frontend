import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useAuth } from "../../hooks/auth"

import { useNavigate } from "react-router-dom";

export function Header(){
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const navigate =  useNavigate();

  function handleSignOut(){
    const confirm = window.confirm("Tem certeza que deseja sair?");
    if(confirm){
      navigate("/");
      signOut();
    }else{
      return;
    }
    
  }
  
  return(
    <Container>
      <Profile to="/profile">
        <img 
          src={avatarUrl} 
          alt={user.name} 
        />
        <div>
          <span>Bem-vindo(a),</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}