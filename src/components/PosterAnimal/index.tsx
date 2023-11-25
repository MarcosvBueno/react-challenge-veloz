import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { ImageSourcePropType } from "react-native";
import { Container ,ImagePoster,ContainerButton,TextButton,TextPoster } from "./style";
function PosterAnimal() {
  const poster: ImageSourcePropType = require("../../../assets/gato.png");

  return (
    <Container>
      <View>
        <TextPoster>40% off on all cats adoption!!!</TextPoster>
        <ContainerButton >
          <TextButton>Comprar</TextButton>
        </ContainerButton>
      </View>
      <View>
        <ImagePoster source={poster}  />
      </View>
    </Container>
  );
}

export default PosterAnimal;
