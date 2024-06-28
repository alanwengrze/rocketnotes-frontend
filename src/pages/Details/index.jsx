import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Details(){
  const [data, setData] = useState(null);
  const params = useParams();

  const navigate = useNavigate();

  async function handleRemoveNote(){
    const confirm = window.confirm("Deseja realmente excluir esta nota?");
    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }else{
      return;
    }
  }

  function handleBack(){
    navigate(-1);
  }

  useEffect(() =>{
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);
  return(
    <Container>
      <Header />
    {
      data &&
      <main>
        <Content>

          <ButtonText 
            title="Excluir Nota"
            onClick={handleRemoveNote}
          />
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          {
            data.links &&
          <Section 
            title="Links úteis"
          >
            <Links>
              { 
                data.links.map(link => (
                  <li key={String(link.id)}>
                    <a target="_blank" href={link.url}>{link.url}</a>
                  </li>
                ))
               
              }
            </Links>
          </Section>
          }
          {
            data.tags &&
            <Section 
              title="Marcadores"
            >
              {
                data.tags.map(tag => (
                  <Tag
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))
               
              }
            </Section>
          }

          <Button
            title="Voltar"
            onClick={handleBack}
          />
        </Content>
      </main>
    }
    </Container>
  )
}
