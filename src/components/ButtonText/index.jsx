import { Container } from "./styles";

export function ButtonText({children, title, isActive = false, ...rest}){
  return(
    <Container
      type="button"
      $isactive={isActive}
      {...rest}
    >
      {title}
      {children}
    </Container>
  )
}