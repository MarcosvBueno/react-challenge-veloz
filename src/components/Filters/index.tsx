import { View, TouchableOpacity, Text } from "react-native";
import { FontAwesome, AntDesign,MaterialIcons } from "@expo/vector-icons";
import { Container, ContainerFilter, FiltersIcon,FiltersText,ContainerFilterModal  } from "./style";
function Filters() {
  return (
    <Container>
      <View>
        <FiltersIcon>
          <AntDesign name="star" size={24} color="#262a4c" />
          <FiltersText >Todos</FiltersText >
        </FiltersIcon>
      </View>
      <ContainerFilter>
        <View>
          <FiltersText >Filtros :</FiltersText >
        </View>
        <ContainerFilterModal>
          <FiltersIcon>
          <AntDesign name="bars" size={24} color="#262a4c" />
            <FiltersText >id</FiltersText >
          </FiltersIcon>
          <FiltersIcon>
          <MaterialIcons name="pets" size={24} color="#262a4c" />
            <FiltersText >Tipo</FiltersText >
          </FiltersIcon>
          <FiltersIcon>
          <MaterialIcons name="attach-money" size={24} color="#262a4c" />
            <FiltersText >Preço</FiltersText >
          </FiltersIcon>
        </ContainerFilterModal>
      </ContainerFilter>
    </Container>
  );
}

export default Filters;
