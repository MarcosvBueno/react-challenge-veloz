import { Text, Image } from "react-native";
import { SafeAreaView } from "react-native";
import { ImageSourcePropType } from "react-native";
import { Container } from "./style";
import CardAnimal from "../../components/CardAnimal";
import Filters from "../../components/Filters";

const poster: ImageSourcePropType = require("../../../assets/posterCat.png");

function HomePage() {
  return (
    <Container>
      <Filters />
      <CardAnimal />
    </Container>
  );
}

export default HomePage;
