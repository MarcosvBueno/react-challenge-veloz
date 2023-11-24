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

function CardAnimal() {
  const dogImage: ImageSourcePropType = require("../../../assets/dog.png");

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
          <Text>Type : Dog</Text>
          <Text>R$ 200.00</Text>
        </CardInformation>
        <ContainerButton>
          <ButtonText>Comprar</ButtonText>
          <MaterialIcons name="pets" size={24} color="black" />
        </ContainerButton>
          </Card>
          
    </Container>
  );
}

export default CardAnimal;
