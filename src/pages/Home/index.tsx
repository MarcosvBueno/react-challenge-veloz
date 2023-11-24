import { Text, Image } from "react-native";
import { SafeAreaView } from "react-native";
import { ImageSourcePropType } from "react-native";
import { Container } from "./style";

const poster: ImageSourcePropType = require("../../../assets/posterCat.png");

function HomePage() {
  return (
    <Container>
      <Text>Home Page</Text>
    </Container>
  );
}

export default HomePage;
