import {Image} from "react-native";
import {
  Container,
  Card,
  CardInformation,
  ContainerButton,
  ButtonText,
  ContainerImageAnimal,
    IconHeart,
  IconContainer,
  TextAnimal 
} from "./style";
import { ImageSourcePropType } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { petProps } from "../../types";

function CardAnimal({ id, price, type}: petProps) {
  const dogImage: ImageSourcePropType = require("../../../assets/dog.png");
  const catImage: ImageSourcePropType = require("../../../assets/gatoCard.png");
  const fishImage: ImageSourcePropType = require("../../../assets/peixeCard.png");

  const SelectImage = () => {
    if (type === "dog") {
      return dogImage;
    } else if (type === "cat") {
      return catImage;
    } else {
      return fishImage;
    }
  };

  const priceFormatted = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Container>
      <Card >
        <IconContainer>
          <IconHeart name="heart-o" />
        </IconContainer>
        <ContainerImageAnimal type={ type}>
          <Image source={SelectImage()} style={{ width: 145, height: 175 }} />
        </ContainerImageAnimal>
        <CardInformation>
          <TextAnimal >Type : {type}</TextAnimal>
          <TextAnimal  >{priceFormatted}</TextAnimal>
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
