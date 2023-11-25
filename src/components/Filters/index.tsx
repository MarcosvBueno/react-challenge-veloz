import React from "react";
import { View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  ContainerFilter,
  FiltersIcon,
  FiltersText,
  ContainerFilterModal,
} from "./style";
import { petProps } from "../../types";

interface FiltersProps {
  applySort: (sortFunction: (prevData: petProps[]) => petProps[]) => void;
}


function Filters({ applySort }: FiltersProps) {

  const sortById = () => {
    applySort((prevData) => [...prevData].sort((a, b) => Number(a.id) - Number(b.id)));
    
  };

  const sortByType = () => {
    applySort((prevData) => [...prevData].sort((a, b) => a.type.localeCompare(b.type)));
  };

  const sortByPrice = () => {
    applySort((prevData) => [...prevData].sort((a, b) => a.price - b.price));
  };

  return (
    <Container>
      <ContainerFilter>
        <View>
          <FiltersText>Filtros :</FiltersText>
        </View>
        <ContainerFilterModal>
          <FiltersIcon onPress={sortById}>
            <AntDesign name="bars" size={24} color="#262a4c" />
            <FiltersText>Id</FiltersText>
          </FiltersIcon>
          <FiltersIcon onPress={sortByType}>
            <MaterialIcons name="pets" size={24} color="#262a4c" />
            <FiltersText>Type</FiltersText>
          </FiltersIcon>
          <FiltersIcon onPress={sortByPrice}>
            <MaterialIcons name="attach-money" size={24} color="#262a4c" />
            <FiltersText>Price</FiltersText>
          </FiltersIcon>
        </ContainerFilterModal>
      </ContainerFilter>
    </Container>
  );
}

export default Filters;
