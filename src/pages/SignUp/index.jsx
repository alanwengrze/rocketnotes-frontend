import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

import { Link, useNavigate } from "react-router-dom";

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

  const navigate = useNavigate();
  function handleSignUp(){
    if(!name || !email || !password){
      alert("Preencha todos os campos");
      return;
    }
    if(!emailRegex.test(email)){
      return alert("E-mail inválido. Digite um e-mail válido. Ex: yourname@example.com");
    }
    if(!passwordRegex.test(password)){
      return alert("Senha fraca. Sua senha deve conter pelo menos 8 caracteres, 1 maiúscula, 1 minúscula, 1 número e 1 caractere especial");
    }

    api.post("/users", { name, email, password })
    .then(()=>{
      alert("Usário criado com sucesso");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possivel criar o usário")
      }
    })
  }

  return(
    <Container>
      <Background />
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Criar sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button 
          title="Cadastrar"
          onClick={handleSignUp}
        />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  )
}