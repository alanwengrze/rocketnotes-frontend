import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function New(){
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }
  function handleRemoveLink(linkDeleted){
    setLinks(prevState => prevState.filter(link => link !== linkDeleted));
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }
  function handleRemoveTag(tagDeleted){
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted));
  }

  async function handleNewNote(){

    if(!title){
      return alert("Você precisa adicionar um título.")
    }
    if(!description){
      return alert("Você precisa adicionar uma descrição.")
    }

    if(newTag && newLink){
      return alert("Você deixou uma tag e um link no campo para adicionar, mas não clicou em adicionar. 😥 Clique para adicionar ou deixe o campo vazio.")
    }

    if(newLink){
      return alert(`Você deixou um link no campo para adicionar, mas não clicou em adicionar. 😥 Clique para adicionar ou deixe o campo vazio.`)
    }
    
    if(newTag){
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. 😥 Clique para adicionar ou deixe o campo vazio.")
    }
  
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }
  function handleBack(){
    navigate(-1);
  }
  return ( 
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText 
              title="Voltar"
              onClick={handleBack}
            />
          </header>

          <Input 
            placeholder="Título"
            type="text"
            onChange={event=>setTitle(event.target.value)}
          />
          <TextArea 
            placeholder="Observações"
            onChange={event=>setDescription(event.target.value)}
          />
          <Section title="Links úteis">
           {
            links.map((link, index)=>(
              <NoteItem
                key={String(index)}
                value={link}
                onClick={()=>{ handleRemoveLink(link) }}
              />
            ))
           }

            <NoteItem
                isNew
                placeholder="Novo link"
                value={newLink}
                onChange={event=>setNewLink(event.target.value)}
                onClick={handleAddLink}
            />
           
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index)=>(
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={()=>{ handleRemoveTag(tag) }}
                  />
                ))
              }
              <NoteItem 
                isNew 
                placeholder="Nova tag"
                value={newTag}
                onChange={event=>setNewTag(event.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button 
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
};