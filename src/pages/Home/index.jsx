import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText} from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { Link } from "react-router-dom";

export function Home(){
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
            isActive
          />
        </li>

          <li>
            <ButtonText
              title="React"
            />
          </li>

          <li>
            <ButtonText
              title="Nodejs"
            />
          </li>
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