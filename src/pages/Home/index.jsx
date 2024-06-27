import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText} from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home(){
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  function handleTagSelected(tagName){
    const alreadySelected = tagsSelected.includes(tagName);
    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);
    }else{
      setTagsSelected(prevState =>[...prevState, tagName]);
    }
    if(tagName === "all"){
      setTagsSelected([]);
    }
    
  }


  useEffect(() =>{
    async function fetchTags(){
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);
  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText 
            title="Todos"
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {
         tags && tags.map(tag => (
          <li key={tag.id}>
            <ButtonText
              title={tag.name}
              onClick={() => handleTagSelected(tag.name)}
              isActive={tagsSelected.includes(tag.name)}
            />
          </li>
         ))
        }
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo titulo"
          icon={FiSearch}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Link to="/details/1">
            <Note data={{
              title: 'React',
              tags: [
                {id:'1', name:'React'},
                {id:'2', name:'Nodejs'},
              ]
            }}
            />
          </Link>
          
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        <p>Criar nota</p>
      </NewNote>   
    </Container>
  )
};