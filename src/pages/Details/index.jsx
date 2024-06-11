import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";

export function Details(){
  return(
    <Container>
      <Header />
      <main>
        <Content>

          <ButtonText 
            title="Excluir Nota"
          />
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem error aut earum hic, corporis a delectus modi dignissimos laudantium quo quam! Velit quae aliquam soluta cupiditate enim reprehenderit, natus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, assumenda culpa sequi, molestias provident nisi architecto sit porro necessitatibus aliquam obcaecati mollitia. Dolorem odio nam dolores repellendus, perspiciatis sunt consequunturab?</p>
          <Section 
            title="Links úteis"
          >
            <Links>
              <li><a href="#">https://rocketseat.com.br/</a></li>
              <li><a href="#">https://rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section 
            title="Marcadores"
          >
            <Tag 
              title="Javascript"
            />
            <Tag 
              title="Nodejs"
            />
            <Tag 
              title="Express"
            />
          </Section>

          <Link to="/">
            <Button
              title="Voltar"
            />
          </Link>
        </Content>
      </main>
    </Container>
  )
}
