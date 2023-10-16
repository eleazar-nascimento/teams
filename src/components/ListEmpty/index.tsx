import { Container, Message } from "./styles";

type ListEmpyProps = {
  message: string;
}

export function ListEmpty({
  message
}: ListEmpyProps) {
  return(
    <Container>
      <Message>
        {message}
      </Message>
    </Container>
  );
}