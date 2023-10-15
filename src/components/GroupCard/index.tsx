import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type GroupCard = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({
  title,
  ...rest
}: GroupCard) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>
        {title}
      </Title>
    </Container>
  );
}