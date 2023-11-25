import { Text, Image} from "react-native";
import {
  Container,
  Card,
  CardInformation,
  ContainerButton,
  ButtonText,
  ContainerImageAnimal,
    IconHeart,
    IconContainer
} from "./style";
import { ImageSourcePropType } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

interface DataProps {
  id: string;
  price: number;
  type: string;
}

function CardAnimal({ id, price, type}: DataProps) {
  const dogImage: ImageSourcePropType = require("../../../assets/dog.png");

  const priceFormatted = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Container>
      <Card>
        <IconContainer>
          <IconHeart name="heart-o" />
        </IconContainer>
        <ContainerImageAnimal>
          <Image source={dogImage} style={{ width: 150, height: 180 }} />
        </ContainerImageAnimal>
        <CardInformation>
          <Text>Type : {type}</Text>
          <Text>{priceFormatted}</Text>
        </CardInformation>
        <ContainerButton>
          <ButtonText>Buy</ButtonText>
          <MaterialIcons name="pets" size={24} color="black" />
        </ContainerButton>
          </Card>
    </Container>
  );
}

export default CardAnimal;
